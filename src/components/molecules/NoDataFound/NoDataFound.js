import React from 'react'
import { View, Text, Image } from 'react-native';
// 
import Styles from './Style';
import NoDataFoundImage from '../../../assets/images/no-data-found.png';

export default function NoDataFound({ text, container = {}, fullScreen = false }) {
    return (
        <View style={[Styles.container, fullScreen ? Styles.fullScreen : {}, container]}>
            <View style={Styles.imageBox}>
                <Image source={NoDataFoundImage} style={Styles.image} />
            </View>
            <Text style={Styles.text}>{text}</Text>
        </View>
    )
}
