import React, { useState } from 'react';
import {useSelector } from 'react-redux';
import { View, Text, TextInput, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
//
import LoginBg from '../../../../../assets/images/login-bg.png';
//
import Styles from './Style';
import { Button } from '../../../../atoms/Button';
import { errorMessage } from '../../../../../utils/common';
import { sendOtp } from '../../../../../redux/modules/auth/action';
import { setViewType } from '../../../../../redux/modules/bottomModal/actions';


export default function EnterMobile({ dispatch }) {

    const sendOtpLoading = useSelector(state => state.auth.sendOtpLoading),
        [mobile, setMoblie] = useState(null),
        [error, setError] = useState(false);

    const handleChangeMobile = ({ nativeEvent: { text } }) => {
        if (text && text.length > 10) { setError(false); return true; }
        setMoblie(text)
    }

    // Handle the button press
    const handleSendOtp = async () => {
        if (!mobile || mobile.length !== 10) { setError(true); return true }
        const onSuccess = () => dispatch(setViewType({ type: 'VerifyOtp', data: { phone: mobile } }))
        const onFail = ({ message }) => errorMessage(message)
        dispatch(sendOtp({ data: { phone: mobile }, onSuccess, onFail }))
    }

    return (
        <ImageBackground source={LoginBg} barStyle="dark-content" style={Styles.modalBgImage}>
            <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={Styles.formContainer}>
                <View style={Styles.loginForm}>
                    <Text style={Styles.normalText}>
                        Enter mobile number to login
                    </Text>
                    <View style={Styles.textContainer}>
                        <View style={Styles.inputWrapper}>
                            <TextInput style={[Styles.phoneExtention, error ? Styles.textError : {}]} value={"+91 -"} editable={false} />
                            <TextInput style={[Styles.inputText, error ? Styles.textError : {}, Styles.phoneText]} keyboardType="numeric" autoComplete='tel-device' value={mobile} onChange={handleChangeMobile} />
                        </View>
                        <View style={Styles.phoneDigitCountTextContainer}>
                            <Text style={[Styles.phoneDigitCountText, error ? Styles.phoneDigitCountTextError : {}]}>{mobile ? mobile.length : 0}/10</Text>
                        </View>
                    </View>
                    <View style={Styles.button}>
                        <Button label="Send otp" loader={sendOtpLoading} icon={"RightArrow"} iconBefore={false} onPress={handleSendOtp} />
                    </View>
                </View>
            </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}
