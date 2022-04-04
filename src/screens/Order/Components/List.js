import moment from 'moment'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
//
import commonStyle from '../../../styles/commonStyle';
import { Icon } from '../../../components/atoms/Icon'
import { Price } from '../../../components/atoms/Price'
//
import { SkeletonLoader } from '../../../components/atoms/SkeletonLoader';
import { OrderStatusEnum } from '../../../utils/enum';

export default function List({ Styles, orderList = [{}, {}, {}, {}, {}, {}, {}], redirectToOrderDetail, loading }) {
    return <View style={Styles.ordersContainer}>
        {orderList.map((order, index) => {
            return loading
                ? <SkeletonLoader container={Styles.orderListLoadingContainer} linearContainer={Styles.orderListLinearContainer} width={Styles.orderListLinearContainer.width} />
                : <View style={Styles.order} key={index}>
                    <TouchableOpacity onPress={() => redirectToOrderDetail(order.id)}>
                        <View style={[commonStyle.fRow, commonStyle.spaceBetween, commonStyle.alignCenter]}>
                            <View>
                                <View style={Styles.orderId}>
                                    <Text style={[Styles.orderIdText, Styles[`orderStatus_${order.currentStatus}`]]}>Order</Text>
                                    <Text style={[Styles.orderIdText, Styles[`orderStatus_${order.currentStatus}`]]}> # 000{order.id}</Text>
                                </View>
                                <Text style={Styles.ordersDate}>
                                    {moment(order.deliveryStartTime).format('DD MMM YYYY hh:mm a')}
                                </Text>
                            </View>
                            <Icon size="s" name={'Forward'} style={Styles.forwordIcon} />
                        </View>
                    </TouchableOpacity>
                    <View style={Styles.ordersInfo}>
                        <Text style={Styles.ordersPrice}>
                            <Price price={order.orderTotal} showOldPrice={false} isSplit={false} />
                        </Text>
                        <View style={[commonStyle.fRow, commonStyle.spaceBetween]}>
                            <Text style={[Styles.paymentStatus, Styles[`paymentStatus_${order.isPaid}`]]}>{order.isPaid ? 'Paid' : 'Unpaid'}</Text>
                            <Text style={Styles.paymentStatus}> | {order.paymentMethod}</Text>
                        </View>
                        <Text style={[Styles.orderStatus, Styles[`orderStatus_${order.currentStatus}`]]}>{OrderStatusEnum[order.currentStatus]}</Text>
                    </View>
                </View>
        })}
    </View>
}
