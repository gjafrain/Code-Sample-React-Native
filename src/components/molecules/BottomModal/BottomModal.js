import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ActionSheet from "react-native-actions-sheet";
import FlashMessage from "react-native-flash-message";
// STYLES
import { WHITE } from '../../../styles/colors';
import commonStyle from '../../../styles/commonStyle';
// REDUX ACTIONS
import { closeBottomModal } from '../../../redux/modules/bottomModal/actions';
// CHILD 
import { BasketModalView } from './ModalViews/BasketModalView';
import { AddressListModalView } from './ModalViews/AddressListModalView';
import { ConfirmOrderModalView } from './ModalViews/ConfirmOrderModalView';
import { LoginAlertModal } from './ModalViews/LoginAlertModal';
import { DataFilterOptions } from './ModalViews/DataFilterOptions';
import { ThanksOrderModalView } from './ModalViews/ThanksOrderModalView';
import { EnterMobile, Signup, VerifyOtp } from './ModalViews/AuthModalsView';
import { SupportFormModalView } from './ModalViews/SupportFormModalView';
import { GooglePlacesAutocomplete } from "./ModalViews/GooglePlacesAutocomplete";
import { AddressFormModalView } from "./ModalViews/AddressFormModalView";


export default function BottomModal({ navigation, route }) {

    const actionSheetRef = useRef(),
        dispatch = useDispatch(),
        { viewType, callBack, data, openModal } = useSelector(state => state.bottomModal);

    useEffect(() => {
        actionSheetRef.current?.setModalVisible(openModal);
        actionSheetRef.current?.handleChildScrollEnd(); // Enable child SCROLLING
    }, [openModal])

    const _renderView = (type) => {
        switch (type) {
            case 'Basket':
                return <BasketModalView dispatch={dispatch} onClose={onClose} navigation={navigation} route={route} data={data} />
            case 'Address':
                return <AddressListModalView dispatch={dispatch} navigation={navigation} onClose={onClose} />
            case 'ConfirmOrder':
                return <ConfirmOrderModalView dispatch={dispatch} callBack={callBack} data={data} onClose={onClose} />
            case 'Login':
                return <LoginAlertModal navigation={navigation} />
            case 'Filter':
                return <DataFilterOptions navigation={navigation} callBack={callBack} data={data} />
            case 'ThanksOrder':
                return <ThanksOrderModalView navigation={navigation} data={data} onClose={onClose} dispatch={dispatch} />
            case 'EnterMobile':
                return <EnterMobile navigation={navigation} data={data} onClose={onClose} dispatch={dispatch} />
            case 'VerifyOtp':
                return <VerifyOtp navigation={navigation} params={data} onClose={onClose} dispatch={dispatch} />
            case 'Signup':
                return <Signup navigation={navigation} params={data} onClose={onClose} dispatch={dispatch} />
            case 'SupportFormModalView':
                return <SupportFormModalView navigation={navigation} params={data} callBack={callBack} onClose={onClose} dispatch={dispatch} />
            case 'GooglePlacesAutocomplete':
                return <GooglePlacesAutocomplete navigation={navigation} params={data} onClose={onClose} dispatch={dispatch} />
            case 'AddressFormModalView':
                return <AddressFormModalView navigation={navigation} params={data} onClose={onClose} dispatch={dispatch} />
            default:
                return <BasketModalView dispatch={dispatch} onClose={onClose} navigation={navigation} route={route} data={data} />
        }
    }

    const onClose = () => { viewType !== 'ThanksOrder' && dispatch(closeBottomModal()) }

    return (
        <ActionSheet
            ref={actionSheetRef}
            gestureEnabled={true}
            indicatorColor={WHITE}
            onClose={onClose}
            closeOnTouchBackdrop={(viewType !== 'ThanksOrder' && viewType !== 'VerifyOtp' && viewType !== 'Signup' && viewType !== "GooglePlacesAutocomplete" && viewType !=="AddressFormModalView")}
            bottomOffset={10}
            closeOnPressBack={false}
            containerStyle={
                {
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    overflow: 'hidden'
                }
            }
        >
            <>
                <FlashMessage position="top" style={commonStyle.flashMessageStyle} />
                {openModal ? _renderView(viewType) : <></>}
            </>
        </ActionSheet>
    )
}
