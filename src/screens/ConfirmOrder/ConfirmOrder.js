import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity, ScrollView, View, Text } from 'react-native';
//
import { openBottomModal } from '../../redux/modules/bottomModal/actions';
import { placeOrder } from '../../redux/modules/order/action';
// STYLE
import Styles from './Style';
import { BAR_STYLE_LIGHT, PRIMARY, WHITE } from '../../styles/colors';
// COMPONENT
import { Icon } from '../../components/atoms/Icon';
import { TheHeader } from '../../components/molecules/TheHeader';
import { TheContainer } from '../../components/molecules/TheContainer';
// CHILD
import DeliverySlots from './Components/DeliverySlots';
import OrderSummary from './Components/OrderSummary';
import PaymentMode from './Components/PaymentMode';
import { Price } from '../../components/atoms/Price';
import { errorMessage } from '../../utils/common';
import { fetchCartById } from '../../redux/modules/cart/action';


export default function ConfirmOrder({ navigation, route }) {
    const dispatch = useDispatch(),
        { cart, items } = useSelector(state => state.cart),
        { placeOrderLoading } = useSelector(state => state.order),
        [paymentMode, setPaymentMode] = useState(0),
        [deliverySlot, setDeliverySlot] = useState(null),
        [orderTotal, setOrderTotal] = useState(null);

    useEffect(() => {
        if (!items.length) navigation.navigate('Home')
        return () => { }
    }, [items])

    const payOrder = () => {
        confirmOrder();
        // if (paymentMode === 1) dispatch(openBottomModal({ type: 'ConfirmOrder', callBack: confirmOrder, data: { orderTotal } }))
        // else confirmOrder();
    }

    const confirmOrder = () => {

        if (!route.params?.addressId) return errorMessage('Address not found, Please select address!')
        else if (!paymentMode) return errorMessage('Please select payment mode')

        const onSuccess = ({ data }) => {
            dispatch(fetchCartById({}));
            dispatch(openBottomModal({ type: 'ThanksOrder', data: { id: data.id } }));
        }
        const onFail = ({ message }) => errorMessage(message)

        const payload = {
            deliveryStartTime: deliverySlot.start,
            deliveryEndTime: deliverySlot.end,
            addressId: route.params.addressId,
            paymentMethod: paymentMode,
            cartId: cart.id
        }
        dispatch(placeOrder({ data: payload, onSuccess, onFail }))
    }

    return (
        <>
            <TheHeader title={"Confirm Order"} navigation={navigation} showBasketIcon={false} background={PRIMARY} color={WHITE} showSideBarIcon={false} backIcon={true} container={Styles.headerContainer} backIconColor={WHITE} showStatusBar />
            <TheContainer barStyle={BAR_STYLE_LIGHT} statusBarColor={PRIMARY}>
                <ScrollView>
                    <DeliverySlots setDeliverySlot={setDeliverySlot} />
                    <OrderSummary setOrderTotal={setOrderTotal} />
                    <PaymentMode paymentMode={paymentMode} setPaymentMode={setPaymentMode} />
                    <TouchableOpacity disabled={paymentMode === 0} onPress={payOrder}>
                        <View style={[Styles.section, Styles.placeOrderButton, Styles[paymentMode]]}>
                            <Icon loader={placeOrderLoading} name={"RightArrow"} imageStyle={{ tintColor: WHITE }} />
                            <Text style={Styles.placeOrderButtonText}> Pay <Price price={orderTotal || "00.00"} showOldPrice={false} isSplit={false} /></Text>
                            {paymentMode === 1 ? <Text style={Styles.placeOrderButtonText}> On Delivery</Text> : <></>}
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </TheContainer>
            {/* <TheBottomTab navigation={navigation} route={route} /> */}
        </>
    )
}
