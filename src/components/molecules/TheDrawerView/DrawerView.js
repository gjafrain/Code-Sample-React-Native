import React, { useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
// STYLE
import Styles from './Style';
import { Icon } from '../../atoms/Icon';
import { BAR_STYLE_DARK, GRAY_LIGHT, PRIMARY, WHITE } from '../../../styles/colors';
//
import { logout } from '../../../redux/modules/auth/action';
//
import Logo from '../../../assets/images/second-logo.png';
import languageContext from '../../../utils/context';
import { RadioButton } from '../../atoms/RadioButton';
import { openBottomModal } from '../../../redux/modules/bottomModal/actions';
import { TheDrawerView } from '.';
import { TheStatusBar } from '../TheStatusBar';

export default function DrawerView({ stackNavigation, drawerNavigation }) {

    const dispatch = useDispatch(),
        consts = useContext(languageContext);

    const user = useSelector(state => state.auth.user);

    const handleNavPress = (screen) => {
        drawerNavigation.closeDrawer();
        stackNavigation.navigate(screen);
    }

    const handleLogout = async () => {
        dispatch(logout());
        stackNavigation.replace('/');
    }

    const handleChangeLanguage = (lng) => {
        consts.changeLanguage(lng);
        drawerNavigation.closeDrawer();
    }

    const hanglePressLogin = () => {
        dispatch(openBottomModal({ type: 'EnterMobile' }))
        drawerNavigation.closeDrawer();
    }

    return (
        <>
            {/* <TheStatusBar/> */}
            <View style={Styles.container}>
                <DrawerContentScrollView>
                    <View style={Styles.scrollContainer}>
                        <View style={Styles.header}>
                            <View style={Styles.logoImageBox}>
                                <Image source={Logo} style={Styles.logoImage} />
                            </View>
                        </View>
                        <View style={Styles.body}>
                            <TouchableOpacity onPress={() => handleNavPress('Home')}>
                                <View style={Styles.link}>
                                    <Icon name="Store" size="xl" imageStyle={{ tintColor: PRIMARY }} />
                                    <Text style={Styles.linkText}>Store</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.link} onPress={() => handleNavPress('CategoryProducts')}>
                                <Icon name="Category" size="xxl" imageStyle={{ tintColor: PRIMARY }} />
                                <Text style={Styles.linkText}>Categories</Text>
                            </TouchableOpacity>
                            {/* <View style={[Styles.link, !user.token && Styles.disableLink]}>
                            <Icon name="Coupon" size="xl" imageStyle={{ tintColor: PRIMARY }} />
                            <Text style={Styles.linkText}>Coupons</Text>
                        </View> */}
                            {/* <View style={[Styles.link, !user.token && Styles.disableLink]}>
                            <Icon name="Nutrition" size="xxl" imageStyle={{ tintColor: PRIMARY }} />
                            <Text style={Styles.linkText}>Nutrition</Text>
                        </View> */}
                            <TouchableOpacity style={Styles.link} onPress={() => handleNavPress('Support')}>
                                <Icon name="Support" size="xxl" imageStyle={{ tintColor: PRIMARY }} />
                                <Text style={Styles.linkText}>Support</Text>
                            </TouchableOpacity>
                            {/* <View style={Styles.link}>
                            <Icon name="Condition" size="xxl" imageStyle={{ tintColor: PRIMARY }} />
                            <Text style={Styles.linkText}>Tearm & Conditions</Text>
                        </View> */}
                            <TouchableOpacity style={Styles.link} onPress={() => handleNavPress('About')}>
                                <Icon name="About" size="xxl" imageStyle={{ tintColor: PRIMARY }} />
                                <Text style={Styles.linkText}>About</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.link} onPress={() => handleNavPress('PrivacyPolicy')}>
                                <Icon name="Policy" size="xxl" imageStyle={{ tintColor: PRIMARY }} />
                                <Text style={Styles.linkText}>Privacy Policy</Text>
                            </TouchableOpacity>
                            <View style={Styles.changeLanguageWrapper}>
                                <View style={Styles.labelWrapper}>
                                    <Text style={Styles.changeLanguageLabelText}>Language Options</Text>
                                    <LinearGradient
                                        colors={[GRAY_LIGHT, GRAY_LIGHT, WHITE, WHITE]}
                                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ height: 1, width: 200 }} />
                                </View>
                                <TouchableOpacity style={Styles.languageOptionLink} onPress={() => handleChangeLanguage('hn')}>
                                    <RadioButton active={consts.type === 'hn'} />
                                    <Text style={Styles.languageOptionText}>हिन्दी</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={Styles.languageOptionLink} onPress={() => handleChangeLanguage('en')}>
                                    <RadioButton active={consts.type === 'en'} />
                                    <Text style={Styles.languageOptionText}>English</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </DrawerContentScrollView>
                <View style={Styles.footer}>
                    {
                        user.token ? <TouchableOpacity onPress={handleLogout}>
                            <View style={Styles.link}>
                                <Icon name="Logout" size="xl" imageStyle={{ tintColor: PRIMARY }} />
                                <Text style={Styles.linkText}>Logout</Text>
                            </View>
                        </TouchableOpacity>
                            : <TouchableOpacity onPress={hanglePressLogin}>
                                <View style={Styles.link}>
                                    <Icon name="Login" size="xl" imageStyle={{ tintColor: PRIMARY }} />
                                    <Text style={Styles.linkText}>Login</Text>
                                </View>
                            </TouchableOpacity>
                    }
                </View>
            </View>
        </>
    )
}
