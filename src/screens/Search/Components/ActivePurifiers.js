import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function ActivePurifiers({ data = [], Styles }) {

    const _renderItems = ({ item, index }) => {
        return (
            <View style={Styles.activePurifierSection} key={index}>
                <Text style={Styles.activePurifierLabel}>{item.name || 'Name'}</Text>
                <Text style={Styles.activePurifierCross}>×</Text>
            </View>
        )
    }

    return !data.length ? <></>
        : <View style={Styles.activePurifierContainer}>
            <FlatList
                horizontal={true}
                data={data}
                renderItem={_renderItems}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
}
