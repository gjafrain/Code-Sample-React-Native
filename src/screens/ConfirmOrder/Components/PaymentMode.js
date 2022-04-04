import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
//
import Styles from '../Style';
import { RadioButton } from '../../../components/atoms/RadioButton'

export default function PaymentMode({ paymentMode, setPaymentMode }) {
    return (
        <View style={Styles.section}>
            <Text style={Styles.sectionTitle}>Payment Mode</Text>
            {/* <TouchableOpacity onPress={() => setPaymentMode(2)}>
                <View style={Styles.mode}>
                    <RadioButton active={paymentMode === 2} />
                    <Text style={Styles.modeLable}>Pay Online</Text>
                </View>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={() => setPaymentMode(1)}>
                <View style={Styles.mode}>
                    <RadioButton active={paymentMode === 1} />
                    <Text style={Styles.modeLable}>Pay On Delivery</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
