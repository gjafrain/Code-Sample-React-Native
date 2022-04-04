import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
// 
//
import LogoImage from '../../../../../assets/images/second-logo.png';
// 
import Styles from './Style';
import { CustomInput } from '../../../../atoms/CustomInput';
import { Button } from '../../../../atoms/Button';
import { errorMessage, successMessage } from '../../../../../utils/common';
import { Icon } from '../../../../atoms/Icon';
import { sendSupport } from '../../../../../redux/modules/support/action';
import { RadioButton } from '../../../../atoms/RadioButton';

export default function SupportFormModalView({ params, onClose, dispatch }) {

    const { type, title } = params,
        [submitted, submittedSet] = useState(false),
        [contectOption,] = useState(type),
        [state, setState] = useState({}),
        [contactOption, setContactOption] = useState('Phone'),
        [error, errorsSet] = useState({}),
        { submitRequestPending } = useSelector(state => state.support);


    const onChange = (name, value) => {
        if (value && name === 'phone') value = value.replace(/\D/g, '');
        setState((prevState) => ({ ...prevState, [name]: value }))
    }

    const checkValidData = () => {

        if (contectOption !== 'Feedback' && !state.title) return true;
        if (!state.description) return true

        if (contactOption === 'Email' || contactOption === 'Both') {
            if (!state.email) return true;
            const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            if (!regex.test(state.email)) {
                return {
                    error: true,
                    email: "Given email address is not valid."
                }
            }
        }

        if (contactOption === 'Phone' || contactOption === 'Both') {
            if (!state.phone) return true
            if (state.phone.length !== 10) {
                return {
                    error: true,
                    phone: "Phone number should be 10 digit."
                }
            }
        }

        return null;
    }

    const handleSubmit = () => {

        submittedSet(true)
        // REQUIRED CHECK 
        const isBreak = checkValidData();

        if (isBreak) return errorsSet({ ...isBreak });
        errorsSet({})

        const onSuccess = ({ message }) => {
            submittedSet(false)
            successMessage(message);
            setState({})
            setTimeout(() => onClose(), 3000)
        }
        const onFail = ({ message }) => errorMessage(message)
        const payload = {
            ...state,
            type: contectOption,
            platform: 'App'
        }
        dispatch(sendSupport({ data: payload, onSuccess, onFail }))
    }


    return (
        <ScrollView>
            <View style={Styles.formContainer} >
                <View style={Styles.logoWrapper}>
                    <Image source={LogoImage} style={Styles.logoImage} />
                </View>
                <Text style={[Styles.title, Styles.formTitle]}>
                    {
                        type === "Bug"
                            ? "Tell us what's broken"
                            : type === "Feature"
                                ? "Tell us how we can improve"
                                : "How would you rate your experience"
                    }
                </Text>
                <View style={Styles.formWrapper}>
                    <View style={Styles.contactOption}>
                        <TouchableOpacity style={Styles.radioButtonWrapper} onPress={() => { setContactOption('Phone') }}>
                            <RadioButton active={contactOption === 'Phone'} title="Phone" />
                            <Text style={Styles.optionLabel}>Phone</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.radioButtonWrapper} onPress={() => { setContactOption('Email') }}>
                            <RadioButton active={contactOption === 'Email'} title="Email" />
                            <Text style={Styles.optionLabel}>Email</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.radioButtonWrapper} onPress={() => { setContactOption('Both') }}>
                            <RadioButton active={contactOption === 'Both'} title="Both" />
                            <Text style={Styles.optionLabel}>Both</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        type === 'Feedback' && <View style={Styles.starWrapper}>
                            {[1, 2, 3, 4, 5].map((x, i) => {
                                const avtiveStar = x <= state.rating;
                                return <Icon key={i} imageStyle={avtiveStar ? Styles.activeStar : Styles.inActiveStar} name="Favorite" size={'xxxxl'} onPress={() => onChange('rating', x)} />
                            })}
                        </View>
                    }
                    {(contactOption === 'Phone' || contactOption === 'Both')
                        ? <View style={Styles.textWrapper}>
                            <CustomInput
                                placeholder="Enter your mobile number"
                                name="phone"
                                value={state.phone}
                                onChange={onChange}
                                required={true}
                                submitted={submitted}
                                inputStyle={Styles.input}
                                type="numeric"
                                autoComplete='tel-device'
                                error={error.phone}
                                errorMsg={error.phone}
                            />
                        </View>
                        : <></>
                    }
                    {(contactOption === 'Email' || contactOption === 'Both')
                        ? <View style={Styles.textWrapper}>
                            <CustomInput
                                placeholder="Your email address"
                                required={true}
                                submitted={submitted}
                                value={state.email}
                                name="email"
                                type={'email-address'}
                                onChange={onChange}
                                inputStyle={Styles.input}
                                error={error.email}
                                errorMsg={error.email}
                            />
                        </View>
                        : <></>
                    }
                    {
                        type !== 'Feedback' && <View style={Styles.textWrapper}>
                            <CustomInput
                                placeholder={type === "Feature" ? "Give your idea a name" : "Add a title"}
                                value={state.title}
                                name="title"
                                onChange={onChange}
                                inputStyle={Styles.input}
                                required={true}
                                submitted={submitted}
                            />
                        </View>
                    }
                    <View style={Styles.textWrapper}>
                        <CustomInput
                            value={state.description} name="description"
                            placeholder={type === 'Feedback' ? "Describe your experience" : type === "Feature" ? "Tell us more, include the problem it solves" : "Describe the bug in detail"}
                            onChange={onChange}
                            multiline={true}
                            numberOfLines={2}
                            inputStyle={Styles.input}
                            required={true} submitted={submitted}
                        />
                    </View>
                    <View style={Styles.btnWrapper}>
                        <Button label={'Submit'} icon={'Tick'} loader={submitRequestPending} onPress={handleSubmit} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
