/** @format */

import { StyleSheet } from "react-native"
import { verticalScale, scale } from "react-native-size-matters"
// GLOBAL STYLE
import { padding } from "../../../../../styles/mixins"
import {
  HEADING,
  EXTRA_SMALL_TEXT,
  FONT_REGULAR,
  LINE_HEIGHT_18,
  FONT_SEMI_BOLD,
  FONT_SIZE_14,
  SMALL_TEXT,
  MINNI_TEXT,
  FONT_BOLD,
} from "../../../../../styles/typography"
import {
  GRAY_LIGHT,
  GRAY_DARK,
  PRIMARY,
  BLACK,
  SECONDARY,
  GRAY_TEXT,
} from "../../../../../styles/colors"

export default StyleSheet.create({
  container: {
    ...padding(0, 10, 0, 10),
    height: verticalScale(400),
  },
  header: {
    height: verticalScale(40),
    flexDirection: "row",
    borderBottomColor: GRAY_LIGHT,
    borderBottomWidth: 0.8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleWrapper: {
    height: verticalScale(40),
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  crossIcon: {
    ...padding(5, 15, 0, 0),
  },
  continueShopingBtnWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: verticalScale(40),
  },
  continueShopingIcon: {
    tintColor: SECONDARY,
    ...padding(10, 0, 0, 0),
  },
  continueShopingText: {
    ...MINNI_TEXT,
    color: SECONDARY,
    textTransform: "uppercase",
  },
  heading: {
    ...FONT_REGULAR,
    lineHeight: LINE_HEIGHT_18,
  },
  itemCount: {
    ...EXTRA_SMALL_TEXT,
    color: GRAY_DARK,
  },
  body: {
    height: verticalScale(310),
  },
  footer: {
    height: verticalScale(50),
    flexDirection: "row",
    borderTopColor: GRAY_LIGHT,
    borderTopWidth: 0.8,
    alignItems: "center",
    justifyContent: "space-between",
    ...padding(0, 0, 0, 10),
  },
  priceContainer: {
    flexDirection: "row",
  },
  navigationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  totalPrice: {
    ...SMALL_TEXT,
    ...FONT_SEMI_BOLD,
    textTransform: "uppercase",
    color: BLACK,
  },
  navigationText: {
    ...MINNI_TEXT,
    textTransform: "uppercase",
    color: SECONDARY,
    textDecorationLine:'underline',
    ...FONT_SEMI_BOLD
  },
  forwordArrow: {
    // height: scale(16),
    // width: scale(22),
    // backgroundColor: PRIMARY,
    // ...padding(10, 0, 0, 0),
    tintColor: SECONDARY,
  },
})
