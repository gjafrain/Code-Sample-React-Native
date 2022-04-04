import React from 'react';
import { TheHeader } from '../../components/molecules/TheHeader';
import { PRIMARY, WHITE } from '../../styles/colors';
//
import Styles from './Style';
// CHILD 
import Form from './Components/Form';


export default function AddAddress({ navigation }) {

    return (
        <>
            <TheHeader
                navigation={navigation} title="Confirm Location"
                backIcon={true} backIconColor={WHITE}
                color={WHITE} background={PRIMARY}
                container={Styles.theHeaderContainer}
                showBasketIcon={false}
                showAddAddress={false}
                showStatusBar
            />
            <Form Styles={Styles} navigation={navigation}/>
        </>
    )
}
