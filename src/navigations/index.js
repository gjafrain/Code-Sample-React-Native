import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// SCREENS
import { Home } from "../screens/Home";
import { CategoryProducts } from '../screens/CategoryProducts';
import { ConfirmOrder } from '../screens/ConfirmOrder';
import { EnterMobile, VerifyOtp, Signup } from '../screens/Auth';
import { MyAccount, Profile } from '../screens/MyAccount';
import { AddressList, AddAddress, EditAddress } from '../screens/Address';
import { OrderList, OrderDetail } from '../screens/Order';
import { Search } from '../screens/Search';
import { About } from '../screens/About';
import { Support } from '../screens/Support';
import { PrivacyPolicy } from '../screens/PrivacyPolicy';
// CHILD 
import { TheDrawerView } from '../components/molecules/TheDrawerView';
import { closeConfig } from '../utils/navigationConfig';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigations({ navigation }) {
    return (
        <Drawer.Navigator
            initialRouteName='Home'
            drawerContent={(props) => <TheDrawerView stackNavigation={navigation} drawerNavigation={props.navigation} />}
        >
            <Drawer.Screen
                name="Home"
                component={Home}
            />
            <Drawer.Screen
                name="MyAccount"
                component={MyAccount}
            />
        </Drawer.Navigator>
    )
}

export default () => {
    return (
        <Stack.Navigator
            headerMode='none'
            initialRouteName="Home"
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                transitionSpec: {
                    open: closeConfig,
                    close: closeConfig
                },
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}>
            <Stack.Screen name="Home" component={DrawerNavigations} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="CategoryProducts" component={CategoryProducts} />
            <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} />
            <Stack.Screen name="Login" component={EnterMobile} />
            <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="MyAccount" component={MyAccount} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="AddressList" component={AddressList} />
            <Stack.Screen name="AddAddress" component={AddAddress} />
            <Stack.Screen name="EditAddress" component={EditAddress} />
            <Stack.Screen name="OrderList" component={OrderList} />
            <Stack.Screen name="OrderDetail" component={OrderDetail} />
            <Stack.Screen name="Support" component={Support} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        </Stack.Navigator>
    )
}