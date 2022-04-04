import React from 'react'
import { View, Text } from 'react-native';
//
import Styles from './Style';

export default function Badge({ count = 0 }) {
    if (!count) return <></>;
    return (
        <View style={Styles.badge}><Text style={Styles.badgeCount}>{count}</Text></View>
    )
}
