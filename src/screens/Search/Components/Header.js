import React, { useCallback } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, TextInput } from 'react-native';
import { useSelector } from 'react-redux';
import { Badge } from '../../../components/atoms/Badge';
// COMPONENT
import { Icon } from '../../../components/atoms/Icon';
import { TheStatusBar } from '../../../components/molecules/TheStatusBar';
import { openBottomModal } from '../../../redux/modules/bottomModal/actions';
// STYLE
import { BAR_STYLE_DARK, BAR_STYLE_LIGHT, PRIMARY, WHITE } from '../../../styles/colors';
import { padding } from '../../../styles/mixins';

export default function Header({ Styles, navigation, dispatch, getSearchProducts }) {

    const { items } = useSelector(state => state.cart),
        [searchText, setSearchText] = useState(''),
        timeOutRef = useRef(null);

    useEffect(() => {
        clearTimeout(timeOutRef.current)
        if (searchText) timeOutRef.current = setTimeout(() => getSearchProducts(searchText), 1000);
        else getSearchProducts(searchText)
    }, [searchText])

    const openBasketModal = useCallback(() => {
        dispatch(openBottomModal({ type: 'Basket' }))
    }, [])

    const onChangeText = (text) => setSearchText(text);

    return (
        <>
            <TheStatusBar statusBarColor={WHITE} barStyle={BAR_STYLE_DARK} />
            <View style={Styles.header}>
                <Icon name="Back" imageStyle={Styles.backIcon} onPress={() => navigation.goBack()} />
                <View style={Styles.inputSearchContainer}>
                    <TextInput style={Styles.inputSearch} autoFocus={true} value={searchText} onChangeText={onChangeText} placeholder="Search fruits, vegetables..." placeholderTextColor='lightgrey' />
                </View>
                <View>
                    <Icon name="Basket" size='xxl' imageStyle={Styles.basketIcon} onPress={openBasketModal} />
                    <Badge count={items.length} />
                </View>
            </View>
        </>
    )
}
