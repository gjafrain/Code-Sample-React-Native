import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from '../../../components/atoms/Icon';
import { PRIMARY } from '../../../styles/colors';

export default function PurifyHeader({ Styles, toggleListView, viewVericalList, showAscOrder, toggleAscDescOrder, openFilterModal }) {
    return (
        <View style={Styles.purifyContainer}>
            <TouchableOpacity onPress={toggleAscDescOrder}>
                <View style={Styles.purifySection}>
                    <Icon name={showAscOrder ? "ShortASC" : "ShortDESC"} imageStyle={{ tintColor: PRIMARY }} />
                    <Text style={Styles.purifyLabel}>Shorting</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={openFilterModal}>
                <View style={Styles.purifySection}>
                    <Icon name="Filter" imageStyle={{ tintColor: PRIMARY }} />
                    <Text style={Styles.purifyLabel}> Filter</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleListView}>
                <View style={Styles.purifySection}>
                    <Icon name={viewVericalList ? "Box" : "List"} imageStyle={{ tintColor: PRIMARY }} />
                    <Text style={Styles.purifyLabel}> View</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
