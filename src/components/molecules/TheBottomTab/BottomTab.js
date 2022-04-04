/** @format */

import React, { useState } from "react"
import {
  View,
  Text,
  TouchableHighlight,
  SafeAreaView,
  Platform,
} from "react-native"
import { useDispatch, useSelector } from "react-redux"
//  STYLE/ICON
import Styles from "./Style"
import { Icon } from "../../atoms/Icon"
import { GRAY_DARK, PRIMARY, WHITE } from "../../../styles/colors"
// REDUX
import { openBottomModal } from "../../../redux/modules/bottomModal/actions"
import { Badge } from "../../atoms/Badge"

export default function BottomTab({ navigation, route }) {
  const dispatch = useDispatch(),
    cartItems = useSelector((state) => state.cart.items),
    user = useSelector((state) => state.auth.user),
    [isIphone] = useState(Platform.OS === "ios")

  const handleNavigation = (screen) => {
    if (screen === "MyAccount" && !user.id)
      dispatch(openBottomModal({ type: "EnterMobile" }))
    else navigation.navigate(screen)
  }

  return (
    <SafeAreaView style={Styles.container}>
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor={WHITE}
        onPress={() => handleNavigation("Home")}
      >
        <View style={Styles.tab}>
          <Icon
            name={route.name === "Home" ? "StoreFilled" : "Store"}
            size={isIphone ? "xxxl" : "xl"}
            imageStyle={{
              tintColor: route.name === "Home" ? PRIMARY : GRAY_DARK,
            }}
          />
          {!isIphone && (
            <Text style={[Styles.label, route.name === "Home" && Styles.active]}>
              Store
            </Text>
          )}
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        activeOpacity={1}
        underlayColor={WHITE}
        onPress={() => handleNavigation("CategoryProducts")}
      >
        <View style={Styles.tab}>
          <Icon
            name={
              route.name === "CategoryProducts" ? "CategoryFilled" : "Category"
            }
            size={isIphone ? "xxxl" : "xl"}
            imageStyle={{
              tintColor:
                route.name === "CategoryProducts" ? PRIMARY : GRAY_DARK,
            }}
          />
          {!isIphone && (
            <Text
              style={[
                Styles.label,
                route.name === "CategoryProducts" && Styles.active,
              ]}
            >
              Categories
            </Text>
          )}
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor={WHITE}
        onPress={() => {
          handleNavigation("MyAccount")
        }}
      >
        <View style={Styles.tab}>
          <Icon
            name={route.name === "MyAccount" ? "UserFilled" : "User"}
            size={isIphone ? "xxxl" : "xl"}
            imageStyle={{
              tintColor: route.name === "MyAccount" ? PRIMARY : GRAY_DARK,
            }}
          />
          {!isIphone && (
            <Text
              style={[
                Styles.label,
                route.name === "MyAccount" && Styles.active,
              ]}
            >
             My Account
            </Text>
          )}
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor={WHITE}
        onPress={() => {
          dispatch(
            openBottomModal({
              type: "Basket",
              data: { showShopingIcon: route.name === "MyAccount" },
            })
          )
        }}
      >
        <View style={Styles.tab}>
          <Icon
            name='BasketBg'
            size={isIphone ? "xxxl" : "xl"}
            imageStyle={{ tintColor: GRAY_DARK }}
          />
          {!isIphone && <Text style={Styles.label}>Basket</Text>}
          <Badge count={cartItems.length} />
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  )
}
