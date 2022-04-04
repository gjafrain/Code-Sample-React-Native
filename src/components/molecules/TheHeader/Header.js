import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// STYLE 
import Styles from './Style';
import { ALERT, BAR_STYLE_LIGHT, PRIMARY, SECONDARY, THIRD, WHITE } from '../../../styles/colors';
import { padding } from '../../../styles/mixins';
//
import { openBottomModal } from '../../../redux/modules/bottomModal/actions';
//
import { Icon } from '../../atoms/Icon';
import { Badge } from '../../atoms/Badge';
import { TheStatusBar } from '../TheStatusBar';

export default function Header({
    navigation = {}, title = '',
    color = WHITE, background = PRIMARY,
    container = {},
    showSideBarIcon = false,
    showBasketIcon = true,
    backIcon = false,
    backIconColor = PRIMARY,
    drawerIconColor = WHITE,
    basketIconColor = WHITE,
    showAddAddress = false,
    showDeleteAddress = false,
    leftIcon = "Sidebar",
    showSerachIcon,
    showStatusBar = false,
    statusBarColor = PRIMARY,
    barStyle = BAR_STYLE_LIGHT,
    deleteAddress = () => { }
}) {

    const dispatch = useDispatch(),
        cartItems = useSelector(state => state.cart.items);

    const _renderLeftWidget = () => {
        switch (true) {
            case showSideBarIcon:
                return <View>
                    <Icon size="md" name={leftIcon} size={'xl'} onPress={() => navigation.openDrawer()} imageStyle={{ tintColor: drawerIconColor }} />
                </View>
            case backIcon:
                return (
                    <View style={padding(0, 20, 0, 0)}>
                        <Icon size="md" name="Back" onPress={() => navigation.goBack()} imageStyle={{ tintColor: backIconColor }} />
                    </View>
                )
            default:
                return <View style={padding(0, 30, 0, 0)} />
        }
    }

    const _renderMiddleWidget = () => {
        return (
            <View>
                <Text style={[Styles.title, { color }]}>{title}</Text>
                {/* <Image source={LOGO} style={{height:50,width:60}}/> */}
            </View>
        )
    }

    const _renderRightWidget = () => {
        switch (true) {
            case showBasketIcon:
                return (
                    <View>
                        <Icon size={'xl'} onPress={() => dispatch(openBottomModal())} imageStyle={{ tintColor: basketIconColor }} />
                        <Badge count={cartItems.length} />
                    </View>
                )
            case showAddAddress:
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('AddAddress')}>
                        <View style={Styles.addAddress}>
                            <Icon name={'Plus'} size={'xs'} imageStyle={[Styles.addIcon, { tintColor: SECONDARY }]} />
                            <Text style={Styles.addAddressText}>Add</Text>
                        </View>
                    </TouchableOpacity>
                )
            case showDeleteAddress:
                return (
                    <View style={Styles.deleteAddress}>
                        <Icon name={'Trash'} size={'xl'} imageStyle={{ tintColor: ALERT }} onPress={deleteAddress} />
                    </View>
                )
            case showSerachIcon:
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <View style={Styles.deleteAddress}>
                            <Icon name={'Search'} size={'xl'} imageStyle={{ tintColor: WHITE }} />
                        </View>
                    </TouchableOpacity>
                )
            default:
                return <View style={padding(0, 30, 0, 0)} />
        }
    }

    return (
        <>
            {showStatusBar && <TheStatusBar statusBarColor={statusBarColor} barStyle={barStyle} />}
            <View style={[Styles.container, container, { backgroundColor: background }]}>
                {_renderLeftWidget()}
                {_renderMiddleWidget()}
                {_renderRightWidget()}
            </View>
        </>
    )
}
