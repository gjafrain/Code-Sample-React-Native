import moment from 'moment'
import React from 'react'
import { View, Text } from 'react-native'

export default function DeliveryTo({ Styles, data = {} }) {
    return (
        <View style={Styles.section}>
            <Text style={Styles.title}>Deliver To</Text>
            <View style={Styles.addressDetailSection}>
                <Text style={[Styles.addressLabel, Styles.lightTextColor]}>{data.fullName}</Text>
                <Text style={[Styles.addressLabel, Styles.lightTextColor]}>HNo. {data.houseNumber}</Text>
                <Text style={[Styles.addressLabel, Styles.lightTextColor]}>{data.addressType} - {data.address}</Text>
                <Text style={[Styles.addressLabel, Styles.lightTextColor]}>{data.deliveryPhone}</Text>
            </View>
            <Text style={Styles.deliverySlotTitle}> Delivery Slot </Text>
            <Text style={[Styles.deliverySlotValue, Styles.lightTextColor]}>{moment(data.deliveryStartTime).format('DD MMM YYYY hh:mm a')}</Text>
        </View>
    )
}
