/** @format */

import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import CheckBox from "@react-native-community/checkbox"
//
import { GRAY_DARK, SECONDARY } from "../../../../../styles/colors"
//
import { setViewType } from "../../../../../redux/modules/bottomModal/actions"
//
import Styles from "./Style"
import CommonStyle from "../../../../../styles/commonStyle"
import { Icon } from "../../../../atoms/Icon"
import { NoDataFound } from "../../../NoDataFound"
import { fetchAddressList } from "../../../../../redux/modules/address/action"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { setValue } from "../../../../../utils/common"
import asyncStoreConst from "../../../../../utils/asyncStoreConst"

export default function AddressListModalView({
  navigation,
  dispatch,
  onClose,
}) {
  const [activeAddressId, setActiveAddressId] = useState(0),
    { addressList, fetchAddressListSuccess } = useSelector(
      (state) => state.address
    )

  useEffect(() => {
    if (!addressList.length) dispatch(fetchAddressList({}))
  }, [])

  useEffect(() => {
    const activeAddress = addressList.find((x) => x.isDefault === true)
    if (activeAddress) setActiveAddressId(activeAddress.id)
    else if (addressList.length) setActiveAddressId(addressList[0].id)
  }, [addressList])

  const handleBackPress = () => dispatch(setViewType("Basket"))

  const handleNavigation = (screen) => {
    onClose()
    navigation.navigate(screen, {
      addressId: activeAddressId,
    })
  }

  const handleAddAddress = () => {
    setValue(asyncStoreConst.PREVIOUS_SCREEN, "ConfirmOrder")
    handleNavigation("AddAddress");
  }

  return (
    <View style={Styles.container}>
      <View style={[Styles.header]}>
        <View style={Styles.backPressNavigationWrapper}>
          <Icon
            container={Styles.crossIconContainer}
            name={"Back"}
            size={"l"}
            onPress={handleBackPress}
          />
          <Text style={Styles.heading}>Addresses</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            handleAddAddress()
          }}
        >
          <View style={Styles.addAddress}>
            <Icon name={"Plus"} size={"xs"} imageStyle={Styles.addIcon} />
            <Text style={Styles.addAddressText}>Add</Text>
          </View>
        </TouchableOpacity>
      </View>
      {fetchAddressListSuccess && !addressList.length ? (
        <NoDataFound
          text={"No address found, click ADD button to add address!"}
        />
      ) : (
        <>
          <View style={Styles.body}>
            <ScrollView nestedScrollEnabled={true}>
              {addressList.map((address, key) => {
                return (
                  <TouchableOpacity
                    key={key}
                    style={Styles.addressWrapper}
                    onPress={() => setActiveAddressId(address.id)}
                  >
                    <View style={Styles.addressDetail}>
                      <Text style={Styles.addressType}>{address.type}</Text>
                      <View style={CommonStyle.fRow}>
                        <Text style={Styles.label}>Home/Flat Number: </Text>
                        <Text style={Styles.value}>{address.houseNumber}</Text>
                      </View>
                      <View style={[CommonStyle.fRow, CommonStyle.flexWrap]}>
                        <Text style={Styles.label}>Land Mark: </Text>
                        <Text style={Styles.value}>{address.landmark}</Text>
                      </View>
                      <View style={[CommonStyle.fRow, CommonStyle.flexWrap]}>
                        <Text style={Styles.label}>Address: </Text>
                        <Text style={Styles.value}>
                          {address.address}, {address.pincode}
                        </Text>
                      </View>
                    </View>
                    <View style={Styles.addressController}>
                      <CheckBox
                        value={activeAddressId === address.id}
                        onValueChange={() => setActiveAddressId(address.id)}
                        tintColors={{ true: SECONDARY, false: GRAY_DARK }}
                      />
                    </View>
                  </TouchableOpacity>
                )
              })}
            </ScrollView>
          </View>
          <View style={[Styles.footer]}>
            <TouchableOpacity onPress={() => handleNavigation("ConfirmOrder")}>
              <View style={Styles.navigationContainer}>
                <Text style={Styles.navigationText}>Confirm Order</Text>
                <Icon
                  name={"Forward"}
                  size={"s"}
                  imageStyle={Styles.forwordArrow}
                />
              </View>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  )
}
