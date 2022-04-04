import React from 'react'
import { View, Text } from 'react-native'
import Styles from './Style'

export default function RadioButton({ active = false }) {
    return (
        <View style={[Styles.outer, active ? Styles.outerTrue : Styles.outerFalse]}>
            <View style={[Styles.inner, Styles[active]]} />
        </View>
    )
}
