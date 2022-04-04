import React from 'react'
import { View, Text } from 'react-native'
import { Price } from '../../../components/atoms/Price'

export default function PaymentInformation({ Styles, data = {} }) {
    return (
        <View style={Styles.section}>
            <Text style={Styles.title}>Payment Information</Text>
            <View style={Styles.paymentDetail}>
                <View style={[Styles.patmentTitleSection, Styles.fRow, Styles.spaceBetween, Styles.alignCenter]}>
                    <Text style={Styles.patmentTitle}>Payment Method</Text>
                    <Text style={Styles.patmentTitle}>Paid Amount</Text>
                    <Text style={Styles.patmentTitle}>Total Amount</Text>
                </View>
                <View style={[Styles.fRow, Styles.spaceBetween, Styles.alignCenter]}>
                    <Text style={Styles.patmentValueLabel}> {data.isPaid ? 'Paid' : 'Unpaid'} | {data.paymentMethod}</Text>
                    <Text style={Styles.patmentValueLabel}><Price price={data.paidAmount} isSplit={false} /></Text>
                    <Text style={Styles.patmentValueLabel}><Price price={data.orderTotal} isSplit={false} /></Text>
                </View>
            </View>
        </View>
    )
}
