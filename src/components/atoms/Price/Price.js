import React from 'react';
import { View, Text } from 'react-native';
// STYLE
import Styles from './Style';
import CommomStyle from '../../../styles/commonStyle';
import { BLACK } from '../../../styles/colors';

export default function Price({ price = "", oldPrice = "", isSplit = true, color = BLACK }) {

    if (!isSplit && !oldPrice) return `₹ ${price?.replace("-", "") || "00.00"}`;

    // Check if in any case price is not defind
    if (!price) {
        price = oldPrice || "00.00";
        oldPrice = 0
    }

    return (
        <View style={Styles.priceBox}>
            <View style={CommomStyle.fRow}>
                <Text style={[Styles.newPrice, { color }]}>₹ {price.split('.')[0]}</Text>
                <Text style={[Styles.newPriceSup, { color }]}>.{price.split('.')[1]}</Text>
            </View>
            {
                oldPrice ? <View style={[CommomStyle.fRow, Styles.marginToUp]}>
                    <Text style={Styles.oldPrice}>₹ {oldPrice.split('.')[0]}</Text>
                    <Text style={Styles.oldPriceSup}>.{oldPrice.split('.')[1]}</Text>
                </View> : <></>
            }
        </View>
    )
}
