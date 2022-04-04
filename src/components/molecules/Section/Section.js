import React from 'react';
import { View } from 'react-native';
// STYLE 
import Styles from './Style';

export default function Section({ style = {}, children }) {
    return (
        <View style={[Styles.section, style]}>
            {children}
        </View>
    )
}
