/** @format */

import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
// STYLES
import Styles from "./Style"
//
import {
  closeBottomModal,
  setViewType,
} from "../../../../../redux/modules/bottomModal/actions"
// COMPOENETS
import { Icon } from "../../../../atoms/Icon"
import { BasketItem } from "../../../../atoms/BasketItem"
import { Price } from "../../../../atoms/Price"
import { NoDataFound } from "../../../NoDataFound"
import { useEffect } from "react"
import { fetchCartById } from "../../../../../redux/modules/cart/action"

export default function BasketModalView({
  onClose,
  dispatch,
  navigation,
  data = {},
}) {
  const cartItems = useSelector((state) => state.cart.items),
    cartTotal = useSelector((state) => state.cart.cart.total),
    user = useSelector((state) => state.auth.user)

  useEffect(() => {
    dispatch(fetchCartById({}))
  }, [])

  const renderToAddress = () =>
    dispatch(setViewType({ type: user.id ? "Address" : "EnterMobile" }))

  const goBack = () => {
    onClose()
    navigation.navigate("Home")
  }

  return (
    <View style={Styles.container}>
      <View style={[Styles.header]}>
        <View style={Styles.titleWrapper}>
          <View style={Styles.crossIcon}>
            <Icon name={"Cross"} size={"md"} onPress={onClose} />
          </View>
          <View>
            <Text style={Styles.heading}>My Basket</Text>
            <Text style={Styles.itemCount}>{cartItems.length} ITEMS</Text>
          </View>
        </View>
        {data.showShopingIcon && (
          <TouchableOpacity
            style={Styles.continueShopingBtnWrapper}
            onPress={goBack}
          >
            <View>
              <Text style={Styles.continueShopingText}>Shopping</Text>
            </View>
            <Icon
              name={"Right"}
              size={"s"}
              imageStyle={Styles.continueShopingIcon}
            />
          </TouchableOpacity>
        )}
      </View>
      {cartItems.length ? (
        <>
          <View style={Styles.body}>
            <ScrollView nestedScrollEnabled={true}>
              {cartItems.map((item, index) => {
                return (
                  <BasketItem
                    cartItem={item}
                    index={index}
                    key={index}
                    lastIndex={cartItems.length === index + 1}
                  />
                )
              })}
            </ScrollView>
          </View>
          <View style={[Styles.footer]}>
            <View style={Styles.priceContainer}>
              <Text style={Styles.totalPrice}>Total: </Text>
              <Text style={Styles.totalPrice}>
                <Price price={cartTotal} isSplit={false} />
              </Text>
            </View>
            <TouchableOpacity
              onPress={renderToAddress}
              style={Styles.navigationContainer}
            >
              <Text style={Styles.navigationText}>Select Address</Text>
              <Icon
                name={"Forward"}
                size={"s"}
                imageStyle={Styles.forwordArrow}
              />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <NoDataFound text={"Ohh, your basket is empty!"} />
      )}
    </View>
  )
}
