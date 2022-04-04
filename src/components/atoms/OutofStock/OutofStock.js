import React from "react";
import { Text, View } from "react-native";
import Styles from './Style';

export default function OutofStock({ container = {}, outofStockText = {} }) {
    return <View style={[Styles.outStockBtn, container]}>
        <Text style={[Styles.outStockBtnText, outofStockText]}> Out of Stock </Text>
    </View>
}
