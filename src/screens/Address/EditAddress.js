import React from 'react'
import { useDispatch } from 'react-redux';
import { TheHeader } from '../../components/molecules/TheHeader';
import { PRIMARY, WHITE } from '../../styles/colors';
//
import Styles from './Style';
// CHILD 
import Form from './Components/Form';
import { deleteAddress } from '../../redux/modules/address/action';
import { errorMessage } from '../../utils/common';

export default function EditAddress({ navigation, route }) {

    const dispatch = useDispatch();

    const handleDeleteAddress = () => {
        const onSuccess = () => navigation.navigate('AddressList')
        const onFail = ({ message }) => errorMessage(message)
        dispatch(deleteAddress({ data: { id: route.params.address.id }, onSuccess, onFail }))
    }

    return (
        <>
            <TheHeader
                navigation={navigation} title="Confirm Location"
                backIcon={true} backIconColor={WHITE}
                color={WHITE} background={PRIMARY}
                container={Styles.theHeaderContainer}
                showBasketIcon={false}
                showAddAddress={false}
                showDeleteAddress={!route.params.address.isDefault}
                deleteAddress={handleDeleteAddress}
                showStatusBar
            />
            <Form Styles={Styles} navigation={navigation} address={route.params.address} />
        </>
    )
}
