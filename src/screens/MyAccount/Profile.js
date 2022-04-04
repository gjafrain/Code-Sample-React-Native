import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Image } from 'react-native';
// COMPONENT
import { TheContainer } from '../../components/molecules/TheContainer';
import { TheHeader } from '../../components/molecules/TheHeader';
import { Button } from '../../components/atoms/Button';
import { CustomInput } from '../../components/atoms/CustomInput';
// STYLE
import { BAR_STYLE_DARK, BAR_STYLE_LIGHT, PRIMARY, WHITE } from '../../styles/colors';
import Styles from './Style';
import { updateProfile } from '../../redux/modules/auth/action';
import { errorMessage, successMessage } from '../../utils/common';
//
import Logo from '../../assets/images/second-logo.png';


export default function Profile({ navigation }) {

    const dispatch = useDispatch(),
        user = useSelector(state => state.auth.user),
        { updateProfileLoading } = useSelector(state => state.auth),
        [userModal, setUserModal] = useState({});

    useEffect(() => {
        setUserModal({ ...user })
    }, [user])

    const handleChange = (name, value) => {
        setUserModal((prevState) => {
            prevState[name] = value
            return { ...prevState }
        })
    }

    const handleUpdate = () => {
        const onSuccess = ({ message }) => successMessage(message)
        const onFail = ({ message }) => errorMessage(message)
        dispatch(updateProfile({ data: userModal, onSuccess, onFail }))
    }

    return (
        <>
            <TheHeader
                navigation={navigation} title='Profile'
                backIcon={true} backIconColor={WHITE}
                color={WHITE} background={PRIMARY}
                container={Styles.theProfileHeaderContainer}
                showBasketIcon={false}
                showStatusBar={true} 
            />
            <TheContainer statusBarColor={PRIMARY} barStyle={BAR_STYLE_LIGHT} container={Styles.theProfileContainer}>
                <View style={Styles.logoContainer}>
                    <View style={Styles.logoImageBox}>
                        <Image source={Logo} style={Styles.logoImage} />
                    </View>
                </View>
                <View style={Styles.profileForm}>
                    <CustomInput required={true} submitted={false} editable={false} value={userModal.phone} name="phone" label="Phone Number" type="phone-pad" onChange={handleChange} />
                    <View style={Styles.inlineInputText}>
                        <View style={Styles.halfInputText}>
                            <CustomInput label="First Name" name="name" value={userModal.name} required={true} submitted={false} onChange={handleChange} />
                        </View>
                        <View style={Styles.halfInputText}>
                            <CustomInput label="Last Name" name="lastName" value={userModal.lastName} required={true} submitted={false} onChange={handleChange} />
                        </View>
                    </View>
                    <CustomInput required={false} submitted={false} name="email" value={userModal.email} label="Email Address" type="email-address" onChange={handleChange} />
                </View>
                <View style={Styles.profileFooter}>
                    <Button label="Update" loader={updateProfileLoading} icon="Tick" onPress={handleUpdate} />
                </View>
            </TheContainer>
        </>
    )
}
