/** @format */

import React from "react"
import { useDispatch } from "react-redux"
import { View, Text, TouchableOpacity } from "react-native"
// STYLE
import Styles from "./Style"
import { Icon } from "../../../../atoms/Icon"
import { closeBottomModal } from "../../../../../redux/modules/bottomModal/actions"
import { NoDataFound } from "../../../NoDataFound"

export default function LoginAlertModal({ navigation }) {
  const dispatch = useDispatch()

  const handleNavigation = (screen) => {
    dispatch(closeBottomModal())
    navigation.navigate(screen)
  }
  return (
    <View style={Styles.container}>
      <View style={Styles.body}>
        <NoDataFound text={"Hey Guest, Please login to proceed."} />
        {/* <View style={Styles.noDataFround}>
                    <Text style={Styles.noDataFoundText}>Please login to proceed.</Text>
                </View> */}
      </View>
      <View style={[Styles.footer]}>
        <TouchableOpacity onPress={() => handleNavigation("Login")}>
          <View style={Styles.navigationContainer}>
            <Icon name={"RightArrow"} size={"md"} />
            <Text style={Styles.navigationText}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
