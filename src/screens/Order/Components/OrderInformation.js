import React from 'react'
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Price } from '../../../components/atoms/Price';
import { SkeletonLoader } from '../../../components/atoms/SkeletonLoader';
import { Localize } from '../../../utils/common';

export default function OrderInformation({ Styles, data = {} }) {
    const { fetchOrderDetailLoading } = useSelector(x => x.order)
    return (
        fetchOrderDetailLoading
            ? [1, 2, 3, 4].map((item) => <SkeletonLoader container={Styles.orderListLoadingContainer} linearContainer={Styles.orderListLinearContainer} width={Styles.orderListLinearContainer.width} />)
            : <View style={Styles.section}>
                <Text style={Styles.title}>Order Information</Text>
                <View style={Styles.orderList}>
                    <Text style={Styles.subTitle}>Orders</Text>
                    {data?.cart?.cartItems.map((item, i) => {
                        return (
                            <View style={[Styles.lightTextColor, Styles.orderDetailSection, Styles.fRow, Styles.spaceBetween, Styles.alignCenter]} key={i}>
                                <View>
                                    <View style={[Styles.fRow, Styles.alignCenter]}>
                                        <Text style={[Styles.itemLabel, Styles.lightTextColor]}>{Localize(item.product.name)}</Text>
                                        <Text style={[Styles.itemLabel, Styles.lightTextColor]}> x </Text>
                                        <Text style={[Styles.itemLabel, Styles.lightTextColor]}>{item.quantity}</Text>
                                    </View>
                                    <Text style={[Styles.itemLabel, Styles.lightTextColor]}>{item.product.varients[0].weight} {Localize(item.product?.varients[0]?.type?.name)}</Text>
                                </View>
                                <Text style={[Styles.itemLabel, Styles.lightTextColor]}><Price price={item.price} isSplit={false} /></Text>
                            </View>
                        )
                    })}
                </View>
                <View style={[Styles.subSection, Styles.fRow, Styles.spaceBetween, Styles.alignCenter]}>
                    <Text style={Styles.totalItemLabel}>Item Total</Text>
                    <Text style={Styles.totalItemPrice}><Price price={data?.cart?.total} isSplit={false} /></Text>
                </View>
                {/* <View style={[Styles.fRow, Styles.spaceBetween, Styles.alignCenter]}>
                <Text style={Styles.totalItemLabel}>Item Total</Text>
                <Text style={Styles.totalItemPrice}><Price price={"100.00"} isSplit={false} /></Text>
            </View> */}
                <View style={[Styles.paddingTop5, Styles.fRow, Styles.spaceBetween, Styles.alignCenter]}>
                    <Text style={[Styles.totalItemLabel, Styles.lightTextColor]}>Delivery Charges</Text>
                    <Text style={Styles.itemPrice}><Price price={data.deliveryCharges} isSplit={false} /></Text>
                </View>
                <View style={[Styles.paddingTop5, Styles.fRow, Styles.spaceBetween, Styles.alignCenter]}>
                    <Text style={[Styles.totalItemLabel, Styles.lightTextColor]}>Discount Amount</Text>
                    <Text style={Styles.itemPrice}>- <Price price={data.discountAmount} isSplit={false} /></Text>
                </View>
                <View style={[Styles.subSection, Styles.grandTotalSection, Styles.fRow, Styles.spaceBetween, Styles.alignCenter]}>
                    <Text style={Styles.grandTotalLabel}>Grand Total</Text>
                    <Text style={Styles.grandTotalPrice}><Price price={data.orderTotal} isSplit={false} /></Text>
                </View>
            </View>
    )
}
