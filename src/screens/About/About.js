/** @format */

import React from "react"
import { Image, ScrollView, Text, View } from "react-native"
//
import { TheContainer } from "../../components/molecules/TheContainer"
import { TheHeader } from "../../components/molecules/TheHeader"
import Logo from "../../assets/images/second-logo.png"
// STYLE
import Styles from "./Style"
import { WHITE } from "../../styles/colors"

export default function About({ navigation }) {
  return (
    <>
      <TheHeader
        title={"About"}
        navigation={navigation}
        backIcon={true}
        backIconColor={WHITE}
        showBasketIcon={false}
        container={Styles.header}
        showStatusBar={true}
      />
      <TheContainer container={Styles.container}>
        <ScrollView>
          <View style={Styles.logoImageBox}>
            <Image source={Logo} style={Styles.logoImage} />
          </View>
          <Text style={Styles.description}>
            With a vision to provide exotic veggies and fruits to each
            household, we strive hard for excellence, making our customers'
            money worth spending, keeping their eating habits in regular cheek.
            Living in an era, where saving time & health is equally important,
            out platform lies in lieu of both.
          </Text>
          <Text style={Styles.description}>
            Following the buyer driven approach, we constantly monitor the shift
            in shift in paradigm of continuously changing lifestyle & eating
            habits. This has not only affect the way we eat, but also the way we
            purchase. Directly collected from farmers, hygiene packing and
            cooking ready veggies at your doorstep with uncompromising quality
            and regular price.
          </Text>
        </ScrollView>
      </TheContainer>
    </>
  )
}
