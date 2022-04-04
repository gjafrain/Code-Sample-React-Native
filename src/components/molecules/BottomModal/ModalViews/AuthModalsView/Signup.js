import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { useSelector } from 'react-redux';
// CHILD 
import { CustomInput } from '../../../../atoms/CustomInput';
import { Button } from '../../../../atoms/Button';
//
import BgImage from '../../../../../assets/images/signup-bg2.png';
// 
//
import Styles from './Style';
import { signup as signupAction } from '../../../../../redux/modules/auth/action';
import { errorMessage } from '../../../../../utils/common';
import { Icon } from '../../../../atoms/Icon';

export default function Signup({ dispatch, onClose }) {

    const signupLoading = useSelector(state => state.auth.signupLoading),
        [signupModal, setSignUpModal] = useState({}),
        [submitted, setSubmitted] = useState(false);

    const handleChange = (name, value) => {
        setSignUpModal((prevState) => {
            prevState[name] = value
            return { ...prevState }
        })
    }

    const handleSignup = (e) => {
        setSubmitted(true);
        if (!signupModal.name || !signupModal.lastName) return true;
        const onSuccess = ({ data }) => onClose()
        const onFail = ({ message }) => errorMessage('message')
        dispatch(signupAction({ data: signupModal, onSuccess, onFail }))
    }

    return (
        <View style={[Styles.formContainer, Styles.signupFormContainer]}>
                <TouchableOpacity style={Styles.header} onPress={onClose} hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }} >
                    <Icon name={'Cross'} size={'s'} />
                </TouchableOpacity>
                <View style={Styles.inlineTextGroup}>
                    <View style={Styles.halfScreenInputText}>
                        <CustomInput label="First Name" name="name" required={true} submitted={submitted} value={signupModal.name} onChange={handleChange} />
                    </View>
                    <View style={Styles.halfScreenInputText}>
                        <CustomInput label="Last Name" name="lastName" required={true} submitted={submitted} value={signupModal.lastName} onChange={handleChange} />
                    </View>
                </View>
                <CustomInput submitted={submitted} name="email" label="Email Address" type="email-address" value={signupModal.email} onChange={handleChange} />
                <View style={Styles.signupFooter}>
                    <Button label=" Signup & proceed" loader={signupLoading} icon="RightArrow" onPress={handleSignup} />
                </View>
            </View>
    )
}