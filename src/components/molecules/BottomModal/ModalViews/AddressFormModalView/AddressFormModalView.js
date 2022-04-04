import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { addAddrress, updateAddress } from '../../../../../redux/modules/address/action';
// 
import { PRIMARY, WHITE } from '../../../../../styles/colors';
import commonStyle from '../../../../../styles/commonStyle';
import { errorMessage, successMessage } from '../../../../../utils/common';
import { Button } from '../../../../atoms/Button';
import { CustomInput } from '../../../../atoms/CustomInput';
import { Icon } from '../../../../atoms/Icon';
// 
import Styles from './Style';

export default function AddressFormModalView({ onClose, navigation, dispatch, params }) {

    const { addAddressLoading, updateAddressLoading } = useSelector(state => state.address),
        [addressModal, setAddressModal] = useState({ type: 'Home', ...params.address }),
        [submitted, setSubmitted] = useState(false);

    useEffect(() => {

        const { address, coordinate, pinnedAddress } = params;

        if (coordinate.latitude !== address.latitude && coordinate.longitude !== address.longitude) {
            setAddressModal((prevState) => {

                return {
                    ...prevState,
                    landmark: pinnedAddress?.address_components[1]?.long_name,
                    pincode: pinnedAddress?.address_components[(pinnedAddress.address_components.length - 1)]?.long_name,
                }
            })
        }

    }, [])

    const handleChange = (name, value) => {
        setAddressModal((prevState) => {
            prevState[name] = value
            return { ...prevState }
        })
    }

    const handleSave = () => {
        setSubmitted(true);
        if (!addressModal.houseNumber || !addressModal.landmark || !addressModal.pincode || !addressModal.address) return true;

        const onSuccess = ({ message }) => {

            setSubmitted(false);
            onClose();
            if(addressModal.id){
                AddressList
            }
            navigation.navigate('AddressList');
            successMessage(message);
        }

        const onFail = ({ message }) => errorMessage(message)

        const data = {
            ...addressModal,
            latitude: params.coordinate.latitude,
            longitude: params.coordinate.longitude
        }

        if (!addressModal.id) dispatch(addAddrress({ data, onSuccess, onFail }));
        else dispatch(updateAddress({ data, onSuccess, onFail }));
    }

    return (
        <ScrollView>
            <View style={Styles.container}>
                <View style={[Styles.header]}>
                    <View style={commonStyle.fRow}>
                        <View style={Styles.crossIcon}>
                            <Icon name={'Back'} size={'l'} onPress={onClose} />
                        </View>
                        <Text style={Styles.heading}>Address Detail</Text>
                    </View>
                </View>
                <View style={Styles.addressForm}>
                    <CustomInput label="House/Plot Number" name="houseNumber" value={addressModal.houseNumber} required={true} submitted={submitted} onChange={handleChange} />
                    <CustomInput label="Landmark" name="landmark" value={addressModal.landmark} required={true} submitted={submitted} onChange={handleChange} />
                    <CustomInput name="address" label="Full Address" value={addressModal.address} required={true} submitted={submitted} onChange={handleChange} />
                    <CustomInput label="Pincode" name="pincode" type="number-pad" value={addressModal.pincode ? parseInt(addressModal.pincode) : null} required={true} submitted={submitted} onChange={handleChange} />
                    <CustomInput label="Delivery Contact Number" name="phone" type="phone-pad" value={addressModal.phone} required={false} submitted={submitted} onChange={handleChange} />
                    <View style={Styles.addressTypeOptionsContainer}>
                        {['Home', 'Work', 'Other'].map((x, i) => {
                            return (
                                <TouchableOpacity key={i}
                                    style={[Styles.addressTypeOption, addressModal.type === x ? Styles.activeAddressType : {}]}
                                    onPress={() => handleChange('type', x)}>
                                    <Icon name={x} size="md" imageStyle={{ tintColor: addressModal.type === x ? WHITE : PRIMARY }} />
                                    <Text style={{ color: addressModal.type === x ? WHITE : PRIMARY }} >{x}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                    <Button label="Save" loader={addAddressLoading || updateAddressLoading} iconBefore={false} icon="Tick" onPress={handleSave} />
                </View>
            </View>
        </ScrollView>
    );
}
