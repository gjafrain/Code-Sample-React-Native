import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
// 
import { GRAY_MEDIUM, SECONDARY } from '../../../styles/colors';
import { Icon } from '../../../components/atoms/Icon';
import { SkeletonLoader } from '../../../components/atoms/SkeletonLoader';


export default function List({ Styles, addressList = [], navigation, loading, handleActiveAddress }) {
    return (
        addressList.map((address, key) => {
            return (
                loading
                    ? <SkeletonLoader key={key} container={Styles.addressListLoadingContainer} linearContainer={Styles.addressListLinearContainer} width={Styles.addressListLinearContainer.width} />
                    : <View style={Styles.addressWrapper} key={key} >
                        <View style={Styles.iconWrapper}>
                            <Icon
                                onPress={() => { handleActiveAddress(address.id) }}
                                size="xxl"
                                name={(address.isDefault || addressList.length == 1) ? "BookmarkFilled" : "Bookmark"}
                                imageStyle={Styles.bookMarkIcon}
                            />
                        </View>
                        <TouchableOpacity style={Styles.addressDetailWrapper} onPress={() => navigation.navigate('EditAddress', { address })}>
                            <Text style={Styles.addressType}>{address.type}</Text>
                            <View style={Styles.fRow}>
                                <Text style={Styles.label}>Home/Flat Number: </Text>
                                <Text style={Styles.value}>{address.houseNumber}</Text>
                            </View>
                            <View style={Styles.fRow}>
                                <Text style={Styles.label}>Landmark: </Text>
                                <Text style={Styles.value}>{address.landmark}</Text>
                            </View>
                            <View style={Styles.fRow}>
                                <Text style={Styles.label}>Address: </Text>
                                <Text style={Styles.value}>{address.address}, {address.pincode}</Text>
                            </View>
                            {/* <View style={Styles.fRow}>
                                <Text style={Styles.label}>Pincode: </Text>
                                <Text style={Styles.value}></Text>
                            </View> */}
                        </TouchableOpacity>
                        <View style={Styles.iconWrapper}>
                            <Icon
                                onPress={() => navigation.navigate('EditAddress', { address })}
                                name="Forward"
                                size="s"
                                imageStyle={{ tintColor: GRAY_MEDIUM }}
                            />
                        </View>
                    </View>
            )
        })
    )
}
