import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
//
import { Price } from '../../../../atoms/Price';
//
import Styles from './Style';
import commonStyle from '../../../../../styles/commonStyle';
import { Button } from '../../../../atoms/Button';


export default function ConfirmOrderModalView({ callBack, data, onClose }) {

    const handleConfirm = async () => {
        await onClose()
        callBack()
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Text style={Styles.headerText}>Order Total</Text>
                <Text style={Styles.orderPrice}>
                    <Price price={data.orderTotal} showOldPrice={false} isSplit={false} />
                </Text>
            </View>
            <View style={Styles.body}>
                <Text style={Styles.confirmOrderText}>You have choosen to pay for this order on delivery.</Text>
                <View style={commonStyle.fRow}>
                    <Text style={Styles.confirmOrderText}>Press</Text>
                    <Text style={[Styles.confirmOrderText, commonStyle.textCaplital]} > Confirm </Text>
                    <Text style={Styles.confirmOrderText}>to place the order.</Text>
                </View>
            </View>
            <View style={Styles.footer}>
                <TouchableOpacity onPress={onClose}>
                    <Text style={Styles.cancelButton}>Cancel</Text>
                </TouchableOpacity>
                <Button label="Confirm" icon="Tick" iconBefore={true} onPress={handleConfirm} />
            </View>
        </View>
    )
}
