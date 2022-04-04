import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { Icon } from '../../components/atoms/Icon';
import { TheBottomTab } from '../../components/molecules/TheBottomTab';
import { TheContainer } from '../../components/molecules/TheContainer';
import { TheHeader } from '../../components/molecules/TheHeader';
import { logout } from '../../redux/modules/auth/action';
import { BAR_STYLE_DARK, BAR_STYLE_LIGHT, GRAY_TEXT, PRIMARY, WHITE } from '../../styles/colors';
import { resetRoutes } from '../../utils/common';
//
import Styles from './Style';

export default function MyAccount({ navigation, route }) {

    const dispatch = useDispatch()

    const handleNavigation = (screen) => navigation.navigate(screen);

    const handleLogout = () => {
        dispatch(logout());
        resetRoutes('/', navigation);
    }

    return (
        <>
            <TheHeader navigation={navigation} title="My Account" color={WHITE} background={PRIMARY} showSideBarIcon showBasketIcon={false} showStatusBar />
            <TheContainer statusBarColor={PRIMARY} barStyle={BAR_STYLE_LIGHT}>
                <ScrollView>
                    <View style={Styles.container}>
                        <View style={Styles.section}>
                            <TouchableOpacity style={Styles.nav} onPress={() => handleNavigation('Profile')}>
                                <View style={Styles.navRightWidghit}>
                                    <Icon name="User" imageStyle={{ tintColor: GRAY_TEXT }} />
                                    <Text style={Styles.navText}>Profile</Text>
                                </View>
                                <Icon name="Forward" size="s" imageStyle={{ tintColor: GRAY_TEXT }} container={Styles.rightIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.nav} onPress={() => handleNavigation('OrderList')}>
                                <View style={Styles.navRightWidghit}>
                                    <Icon name="List" imageStyle={{ tintColor: GRAY_TEXT }} />
                                    <Text style={Styles.navText}>Orders</Text>
                                </View>
                                <Icon name="Forward" size="s" imageStyle={{ tintColor: GRAY_TEXT }} container={Styles.rightIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.nav} onPress={() => handleNavigation('AddressList')}>
                                <View style={Styles.navRightWidghit}>
                                    <Icon name="Address" imageStyle={{ tintColor: GRAY_TEXT }} />
                                    <Text style={Styles.navText}>Address</Text>
                                </View>
                                <Icon name="Forward" size="s" imageStyle={{ tintColor: GRAY_TEXT }} container={Styles.rightIcon} />
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.section}>
                            <TouchableOpacity style={Styles.nav} onPress={() => handleNavigation('Support')}>
                                <View style={Styles.navRightWidghit}>
                                    <Icon name="Support" imageStyle={{ tintColor: GRAY_TEXT }} />
                                    <Text style={Styles.navText}>Support</Text>
                                </View>
                                <Icon name="Forward" size="s" imageStyle={{ tintColor: GRAY_TEXT }} container={Styles.rightIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.nav} onPress={() => handleNavigation('About')}>
                                <View style={Styles.navRightWidghit}>
                                    <Icon name="About" imageStyle={{ tintColor: GRAY_TEXT }} />
                                    <Text style={Styles.navText}>About</Text>
                                </View>
                                <Icon name="Forward" size="s" imageStyle={{ tintColor: GRAY_TEXT }} container={Styles.rightIcon} />
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.section}>
                            <TouchableOpacity style={Styles.nav} onPress={handleLogout}>
                                <View style={Styles.navRightWidghit}>
                                    <Icon name="Logout" imageStyle={{ tintColor: GRAY_TEXT }} />
                                    <Text style={Styles.navText}>Logout</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </TheContainer>
            <TheBottomTab navigation={navigation} route={route} />
        </>
    )
}
