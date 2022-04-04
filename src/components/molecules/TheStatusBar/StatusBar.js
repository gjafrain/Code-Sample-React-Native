import React from 'react'
import { View, SafeAreaView, StatusBar } from 'react-native';
import { BAR_STYLE_LIGHT, PRIMARY, WHITE } from '../../../styles/colors';
// 
import Styles from './Style';

export default function TheStatusBar({ statusBarColor = PRIMARY, barStyle = BAR_STYLE_LIGHT, }) {
    return (
        <View style={[Styles.statusBar, { backgroundColor: statusBarColor, color: WHITE }]}>
            <SafeAreaView>
                <StatusBar translucent backgroundColor={statusBarColor} barStyle={barStyle} />
            </SafeAreaView>
        </View>
    )
}
