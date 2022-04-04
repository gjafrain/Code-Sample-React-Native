import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text } from 'react-native';
//
import Styles from '../Style';
import { Price } from '../../../components/atoms/Price'
import { fetchCartById } from '../../../redux/modules/cart/action';

export default function OrderSummary({setOrderTotal}) {

    const dispatch = useDispatch();
    const [cart, setCart] = useState(null);

    useEffect(() => {
        getCart();
    }, [])

    const getCart = () => {
        const onSuccess = ({ data }) => {
            setCart(data)
            setOrderTotal(data.total)
        }
        dispatch(fetchCartById({ onSuccess }))
    }


    return (
        <View style={Styles.section}>
            <Text style={Styles.sectionTitle}>Order Summary</Text>
            {cart ? <>
                <View style={Styles.orderSummary}>
                    <View>
                        <Text style={Styles.orderSummaryLabel}>Item Order</Text>
                        <Text style={Styles.itemCount}>{cart.cartItems.length} Items</Text>
                    </View>
                    <Text style={Styles.orderSummaryLabel}> <Price price={cart.subTotal} isSplit={false} showOldPrice={false} /></Text>
                </View>
                <View style={Styles.deliveryCharge}>
                    <Text style={Styles.orderSummaryLabel}>Delivery Charges</Text>
                    <Text style={Styles.orderSummaryLabel}> <Price price={"00.00"} isSplit={false} showOldPrice={false} /></Text>
                </View>
                {/* <Text style={Styles.deliveryChargeHint}>Delivery Charges Message</Text> */}
                {/* <View style={Styles.orderSummary}>
                    <Text style={Styles.appliedCoupon}>Welcome</Text>
                    <Text style={Styles.orderSummaryLabel}> <Price price={"-17.00"} isSplit={false} showOldPrice={false} /></Text>
                </View> */}
                <View style={Styles.orderTotal}>
                    <Text style={Styles.orderTotalLable}>Total</Text>
                    <Text style={Styles.orderTotalLable}> <Price price={cart.total} isSplit={false} showOldPrice={false} /></Text>
                </View>
            </>
                : <></>}
        </View>
    )
}
