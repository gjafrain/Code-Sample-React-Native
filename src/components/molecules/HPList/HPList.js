import React from 'react';
import { View, FlatList } from 'react-native';
// STYLE
import Styles from './Style';
// ATOMS 
import { VCart } from '../../atoms/VCart';

export default function HPList({ container, products = [], horizontal = true, loading = false }) {
    return (
        <View style={[Styles.container, container]}>
            <FlatList
                horizontal={horizontal}
                data={products}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => <VCart product={item} key={index} loading={loading} startingSpace={index === 0} lastSpace={(products.length === (index + 1) && products.length > 2)} />}
            />
        </View>
    )
}
