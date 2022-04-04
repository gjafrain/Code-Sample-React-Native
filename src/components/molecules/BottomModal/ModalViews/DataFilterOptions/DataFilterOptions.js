import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import Slider from 'react-native-slider';
// 
import { closeBottomModal } from '../../../../../redux/modules/bottomModal/actions';
import commonStyle from '../../../../../styles/commonStyle';
import { Icon } from '../../../../atoms/Icon';
import Styles from './Style';
import { Price } from '../../../../atoms/Price';


export default function DataFilterOptions({ navigation, callBack, data }) {

    const dispatch = useDispatch(),
        [weightType, setWeightType] = useState(10),
        [price, setPrice] = useState(1000);

    const closeModal = () => dispatch(closeBottomModal({}));

    return (
        <View style={Styles.container}>
            <View style={[Styles.header]}>
                <View style={commonStyle.fRow}>
                    <View style={Styles.crossIcon}>
                        <Icon name={'Cross'} size={'l'} onPress={closeModal} />
                    </View>
                    <Text style={Styles.heading}>Filter Options</Text>
                </View>
            </View>
            <View style={Styles.body}>
                <View style={Styles.section}>
                    <Text style={Styles.title}>Weight Type</Text>
                    <Text>kg</Text>
                    <Text>gram</Text>
                    <Text>bunch</Text>
                    <View style={[commonStyle.fRow, commonStyle.spaceBetween]}>
                        <Text style={Styles.sliderValue}>0</Text>
                        <Text style={Styles.sliderValueBox}>0 - {weightType}</Text>
                        <Text style={Styles.sliderValue}>10</Text>
                    </View>
                </View>
                <View style={Styles.section}>
                    <Text style={Styles.title}>Weight</Text>
                    <Slider
                        style={Styles.slider}
                        minimumValue={0}
                        maximumValue={10}
                        step={1}
                        value={weightType}
                        onSlidingComplete={(value) => { setWeightType(value) }} />
                    <View style={[commonStyle.fRow, commonStyle.spaceBetween]}>
                        <Text style={Styles.sliderValue}>0</Text>
                        <Text style={Styles.sliderValueBox}>0 - {weightType}</Text>
                        <Text style={Styles.sliderValue}>10</Text>
                    </View>
                </View>
                <View style={Styles.section}>
                    <Text style={Styles.title}>Price</Text>
                    <Slider
                        style={Styles.slider}
                        minimumValue={0}
                        maximumValue={1000}
                        step={1}
                        value={price}
                        onSlidingComplete={(value) => { setPrice(value) }} />
                    <View style={[commonStyle.fRow, commonStyle.spaceBetween]}>
                        <Text><Price price={"00.00"} isSplit={false} /></Text>
                        <Text style={Styles.sliderValueBox}>0 - {price}</Text>
                        <Text><Price price={"1000.00"} isSplit={false} /></Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
