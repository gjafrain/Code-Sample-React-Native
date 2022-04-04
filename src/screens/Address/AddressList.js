import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView, RefreshControl } from 'react-native';
//
import { TheContainer } from '../../components/molecules/TheContainer';
import { TheHeader } from '../../components/molecules/TheHeader';
//
import Styles from './Style';
import CommonStyle from '../../styles/commonStyle';
import { BAR_STYLE_LIGHT, PRIMARY, WHITE } from '../../styles/colors';
import { fetchAddressList, setDefaultAddress, updateAddress } from '../../redux/modules/address/action';
import List from './Components/List';
import { NoDataFound } from '../../components/molecules/NoDataFound';
import { distance, errorMessage, successMessage } from '../../utils/common';


export default function AddressList({ navigation }) {

    const dispatch = useDispatch(),
        { fetchAddressListLoading } = useSelector(state => state.address),
        addressList = useSelector(state => state.address.addressList),
        [refresh, refreshSet] = useState(false);

    useEffect(() => {
        if (refresh) refreshSet(false)
    }, [refresh])

    useEffect(() => {
        console.log('distance ....', distance(29.807421, 77.117867, 30.714666, 76.709984, "K"))
        dispatch(fetchAddressList({}))
    }, [])

    const handleRefresh = () => {
        refreshSet(true);
        dispatch(fetchAddressList({}));
    }

    const handleActiveAddress = (id) => {
        const onSuccess = ({ message }) => successMessage(message)
        const onFail = ({ message }) => errorMessage(message)
        dispatch(setDefaultAddress({ data: { id }, onSuccess, onFail }))
    }

    return (
        <>
            <TheHeader
                navigation={navigation} title='Address'
                backIcon backIconColor={WHITE}
                color={WHITE} background={PRIMARY}
                // container={Styles.theHeaderContainer}
                showBasketIcon={false}
                showAddAddress
                showStatusBar
            />
            <TheContainer statusBarColor={PRIMARY} barStyle={BAR_STYLE_LIGHT}>
                <ScrollView nestedScrollEnabled={true}
                    refreshControl={
                        <RefreshControl
                            refreshing={refresh}
                            onRefresh={handleRefresh}
                        />
                    }>
                    {!fetchAddressListLoading && !addressList.length ?
                        <NoDataFound text={"No Address Found Click '+ Add' to add address!"} fullScreen={true} /> :
                        <List
                            addressList={!fetchAddressListLoading ? addressList : [{}, {}, {}, {}, {}]}
                            navigation={navigation}
                            Styles={{ ...Styles, ...CommonStyle }}
                            loading={fetchAddressListLoading}
                            handleActiveAddress={handleActiveAddress}
                        />
                    }
                </ScrollView>
            </TheContainer>
        </>
    )
}
