/** @format */

import { StyleSheet, Platform } from "react-native"
// STYLE
import {
  FONT_FAMILY_LIGHT,
  LINE_HEIGHT_20,
  SMALL_TEXT,
} from "../../styles/typography"
import { margin, padding } from "../../styles/mixins"
import { scale, verticalScale } from "react-native-size-matters"

const styles = StyleSheet.create({
  header: {
    justifyContent: "flex-start",
  },
  container: {
    flex: 1,
    // ...Platform.select({
    //   ios: {
    //     ...padding(20, 30, 0, 30),
    //   },
    //   android: {
    //     ...padding(20, 20, 0, 20),
    //   },
    // }),
  },
  description: {
    ...SMALL_TEXT,
    fontFamily: FONT_FAMILY_LIGHT,
    letterSpacing: 0.4,
    lineHeight: LINE_HEIGHT_20,
    ...padding(0, 20, 10, 20),
    textAlign: "justify",
  },
  logoImageBox: {
    alignSelf: "center",
    height: verticalScale(120),
    width: scale(140),
  },
  logoImage: {
    height: "100%",
    width: "100%",
  },
})

export default styles
