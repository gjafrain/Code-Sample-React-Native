import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ScrollView } from 'react-native';
//
import { TheContainer } from '../../components/molecules/TheContainer';
import { TheHeader } from '../../components/molecules/TheHeader';
//
import Styles from './Style';
import { BAR_STYLE_LIGHT, PRIMARY, WHITE } from '../../styles/colors';
import { fetchOrdersDetail } from '../../redux/modules/order/action';
import commonStyle from '../../styles/commonStyle';
import OrderStatusList from './Components/OrderStatusList';
import OrderInformation from './Components/OrderInformation';
import PaymentInformation from './Components/PaymentInformation';
import DeliveryTo from './Components/DeliveryTo';
import { errorMessage } from '../../utils/common';


export default function OrderDetail({ navigation, route }) {

    const dispatch = useDispatch(),
        [orderDetail, setOrderDetail] = useState({});

    useEffect(() => { route.params?.id ? getOrderDetail(route.params.id) : navigation.goBack() }, [route.params?.id])

    const getOrderDetail = (orderId) => {
        const onSuccess = ({ data }) => setOrderDetail(data)
        const onError = ({ message }) => errorMessage(message)
        dispatch(fetchOrdersDetail({ data: { orderId }, onSuccess, onError }))
    }

    return (
        <>
            <TheHeader
                navigation={navigation} title={`Order # 000${route.params.id}`}
                // navigation={navigation} title={`Order # 0001`}
                backIcon={true} backIconColor={WHITE}
                color={WHITE} background={PRIMARY}
                container={Styles.header}
                showBasketIcon={false}
                showStatusBar
            />
            <TheContainer statusBarColor={PRIMARY} barStyle={BAR_STYLE_LIGHT} container={Styles.container}>
                <ScrollView>
                    <OrderStatusList Styles={{ ...Styles, ...commonStyle }} data={orderDetail?.orderStatuses} />
                    <OrderInformation Styles={{ ...Styles, ...commonStyle }} data={orderDetail} />
                    <PaymentInformation Styles={{ ...Styles, ...commonStyle }} data={orderDetail} />
                    <DeliveryTo Styles={{ ...Styles, ...commonStyle }} data={orderDetail} />
                </ScrollView>
            </TheContainer>
        </>
    )
}
