import React, { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDeviceId as deviceId, getBrand, getVersion, hasNotch as notch } from 'react-native-device-info';
import { CommonActions, NavigationActions } from '@react-navigation/native';
import { showMessage, hideMessage } from "react-native-flash-message";
import languageContext from './context';
// import NotificationSounds, { playSampleSound } from '`react-native-notification-sounds`';

// ****

export const deliveryRadious = 2.8;
export const stockInActive = 3;

// ****


export const getValue = async (key) => await AsyncStorage.getItem(key);
export const setValue = async (key, value) => await AsyncStorage.setItem(key, value);
export const removeValue = async (key) => await AsyncStorage.removeItem(key);
export const multiRemoveValue = async (keys) => await AsyncStorage.multiRemove(keys);

// *** GET DEVICE DETAIL
export const getDeviceId = () => deviceId();
export const getDeviceBrand = () => getBrand();
export const getAppVersion = () => getVersion();
export const hasNotch = () => notch();
// ***

export const resetRoutes = (routeName, navigation) => {
    const resetAction = CommonActions.reset({
        index: 1,
        routes: [{ name: routeName }],
    });
    navigation.dispatch(resetAction);
}

export const errorMessage = (message = "Error") => {
    showMessage({
        message,
        type: "danger",
    });
}

export const successMessage = (message = "Success") => {
    showMessage({
        message,
        type: "success",
    });
}


export const AlertSound = () => {
    NotificationSounds
        .getNotifications('notification')
        .then(soundsList => playSampleSound(soundsList[5]))
}


export const Localize = (text = "") => {

    if (!/[⚑]/.test(text)) return text;

    text = text.split("⚑")
    if (global.consts?.type === 'hn') return text[1] || text[0]
    return text[0]
}


export const distance = (lat1, lon1, lat2 = 29.6857, lon2 = 76.9905, unit = "K") => {
    if ((lat1 == lat2) && (lon1 == lon2)) return 0;
    else {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) dist = 1;
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") { dist = dist * 1.609344 }
        if (unit == "N") { dist = dist * 0.8684 }
        return dist;
    }
}