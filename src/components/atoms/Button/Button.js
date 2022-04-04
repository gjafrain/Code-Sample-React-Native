import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// 
import Styles from './Style';
import commonStyle from '../../../styles/commonStyle';
import { Icon } from '../Icon';
import { WHITE } from '../../../styles/colors';

export default function Button({ label, loader = false, showIcon = true, icon, iconBefore = false, size = "md", style = "spaceBetween", onPress = () => { }, disable=false }) {
    return (
        <TouchableOpacity onPress={disable ? () => { } : onPress} style={[Styles.button, commonStyle[style], disable ? Styles.disabeBtn : {}]}>
            {iconBefore ? showIcon && <Icon loader={loader} name={icon} size={size} imageStyle={{ tintColor: WHITE }} /> : <></>}
            <Text style={[Styles.btnText, showIcon ? iconBefore ? Styles.paddingRight : Styles.paddingLeft : {}]}>{label}</Text>
            {iconBefore ? <></>
                : showIcon && <Icon loader={loader} name={icon} size={size} imageStyle={{ tintColor: WHITE }} />}
        </TouchableOpacity>
    )
}
