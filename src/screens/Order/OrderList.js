import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView, RefreshControl, View } from 'react-native';
//
import { TheContainer } from '../../components/molecules/TheContainer';
import { TheHeader } from '../../components/molecules/TheHeader';
//
import Styles from './Style';
import { BAR_STYLE_LIGHT, PRIMARY, WHITE } from '../../styles/colors';
import { fetchOrdersList } from '../../redux/modules/order/action';
import List from './Components/List';
import { NoDataFound } from '../../components/molecules/NoDataFound';


export default function OrderList({ navigation }) {

    const dispatch = useDispatch(),
        { fetchOrderListLoading } = useSelector(state => state.order),
        orderList = useSelector(state => state.order.orderList || [{}, {}, {}, {}, {}, {}, {}, {}, {}]),
        [refresh, refreshSet] = useState(false);

    useEffect(() => {
        if (refresh) refreshSet(false)
    }, [refresh])

    const handleRefresh = () => {
        dispatch(fetchOrdersList({}));
        refreshSet(true);
    }

    useEffect(() => {
        dispatch(fetchOrdersList({}))
    }, [])

    const redirectToOrderDetail = (id) => navigation.navigate('OrderDetail', { id })

    return (
        <>
            <TheHeader
                navigation={navigation} title='Orders'
                backIcon={true} backIconColor={WHITE}
                color={WHITE} background={PRIMARY}
                container={Styles.header}
                showBasketIcon={false}
                showStatusBar={true}
            />
            <TheContainer statusBarColor={PRIMARY} barStyle={BAR_STYLE_LIGHT} Tag={View}>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={refresh}
                            onRefresh={handleRefresh}
                        />
                    }>
                    {(!fetchOrderListLoading && !orderList.length) && <NoDataFound text={"Ohh, your order history is empty!"} fullScreen={true} />}
                    <List orderList={orderList} loading={fetchOrderListLoading} Styles={Styles} redirectToOrderDetail={redirectToOrderDetail} />
                </ScrollView>
            </TheContainer>
        </>
    )
}
