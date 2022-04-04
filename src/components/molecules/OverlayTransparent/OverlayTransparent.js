import React from 'react';
import { useSelector } from 'react-redux';
import { Keyboard, View, ActivityIndicator } from 'react-native';
//
import Styles from './Style';
import { THIRD } from '../../../styles/colors';

export default function OverlayTransparent() {
    const { loginLoading, signupLoading, updateProfileLoading } = useSelector(state => state.auth),
        { addAddressLoading, updateAddressLoading } = useSelector(state => state.address),
        { fetchHomeCategoriesPending, fetchTop10CategoriesPending } = useSelector(state => state.category),
        { fetchSearchProductsPending, fetchAllProductsPending, fetchCategoryProductsPending } = useSelector(state => state.product),

        { placeOrderLoading } = useSelector(state => state.order);

    // if (loginLoading || signupLoading || updateProfileLoading || addAddressLoading || updateAddressLoading || placeOrderLoading || fetchHomeCategoriesPending || fetchTop10CategoriesPending || fetchSearchProductsPending || fetchAllProductsPending || fetchCategoryProductsPending) Keyboard.dismiss();

    return <></>
    const pageLoader = () => {
        if (fetchHomeCategoriesPending || fetchTop10CategoriesPending || fetchSearchProductsPending || fetchAllProductsPending || fetchCategoryProductsPending) return <ActivityIndicator color={THIRD} size={'large'} />
        else return <></>
    }

    return (
        loginLoading || signupLoading || updateProfileLoading || addAddressLoading || updateAddressLoading || placeOrderLoading || fetchHomeCategoriesPending || fetchTop10CategoriesPending || fetchSearchProductsPending || fetchAllProductsPending || fetchCategoryProductsPending ?
            <View style={Styles.overlay}>{pageLoader()}</View>
            : <></>
    )
}
