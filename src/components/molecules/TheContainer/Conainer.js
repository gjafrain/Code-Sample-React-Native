import React from 'react';
// import { View, StatusBar, SafeAreaView } from 'react-native';
import { SafeAreaView, View } from 'react-native';
// STYLE 
import Styles from './Style';
import { PRIMARY } from '../../../styles/colors';
// 
import { TheStatusBar } from '../TheStatusBar'

export default function Conainer({ children, container = {}, statusBarColor = PRIMARY, barStyle = "default", showStatusBar = false,Tag=SafeAreaView }) {
    return (
        <>
            {showStatusBar && <TheStatusBar statusBarColor={statusBarColor} barStyle={barStyle} />}
            <Tag style={[Styles.container, container]}>
                {children}
            </Tag>
        </>
    )
}