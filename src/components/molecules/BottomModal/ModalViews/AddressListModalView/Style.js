/** @format */

import { StyleSheet } from "react-native"
import { verticalScale, scale, moderateScale } from "react-native-size-matters"
// GLOBAL STYLE
import { padding, WINDOW_WIDTH } from "../../../../../styles/mixins"
import {
  HEADING,
  FONT_REGULAR,
  FONT_SEMI_BOLD,
  FONT_SIZE_14,
  FONT_BOLD,
  SMALL_TEXT,
  REGULAR_FONT_SIZE,
  FONT_SIZE_18,
  FONT_SIZE_16,
  MINNI_TEXT,
} from "../../../../../styles/typography"
import {
  GRAY_LIGHT,
  PRIMARY,
  BLACK,
  GRAY_DARK,
  GRAY_TEXT,
  SECONDARY,
} from "../../../../../styles/colors"

export default StyleSheet.create({
  container: {
    ...padding(0, 5, 0, 15),
    height: verticalScale(400),
  },
  header: {
    height: verticalScale(40),
    flexDirection: "row",
    borderBottomColor: GRAY_LIGHT,
    borderBottomWidth: 0.8,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  backPressNavigationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    ...padding(5, 0, 0, 0),
  },
  crossIconContainer: {
    ...padding(0, 15, 0, 0),
  },
  heading: {
    ...FONT_REGULAR,
  },
  addAddress: {
    flexDirection: "row",
    ...padding(5, 10, 0, 0),
    justifyContent: "flex-end",
    alignItems: "center",
  },
  addAddressText: {
    ...SMALL_TEXT,
    textTransform: "uppercase",
    // fontSize: FONT_SIZE_14,
    color: SECONDARY,
  },
  addIcon: {
    tintColor: SECONDARY,
  },
  body: {
    height: verticalScale(310),
  },
  addressWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    ...padding(10, 0, 10, 0),
    borderBottomColor: GRAY_DARK,
    borderBottomWidth: 0.5,
    width: WINDOW_WIDTH - moderateScale(20),
  },
  addressDetail: {
    width: "80%",
  },
  addressController: {
    width: "10%",
  },
  addressType: {
    ...FONT_REGULAR,
    ...padding(0, 0, 5, 0),
    color: BLACK,
  },
  label: {
    ...MINNI_TEXT,
    color: GRAY_TEXT,
  },
  value: {
    ...SMALL_TEXT,
    // color: GRAY_TEXT
  },
  regularFont: {
    ...SMALL_TEXT,
    color: GRAY_TEXT,
  },
  footer: {
    height: verticalScale(50),
    flexDirection: "row",
    borderTopColor: GRAY_LIGHT,
    borderTopWidth: 0.8,
    alignItems: "center",
    justifyContent: "flex-end",
    ...padding(0, 0, 0, 10),
  },
  navigationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  navigationText: {
    ...MINNI_TEXT,
    // fontSize: FONT_SIZE_14,
    textTransform: "uppercase",
    color: SECONDARY,
    textDecorationLine:'underline',
    ...FONT_SEMI_BOLD
  },
  forwordArrow: {
    tintColor: SECONDARY,
  },
  rightArrow: {
    height: scale(16),
    width: scale(22),
    backgroundColor: PRIMARY,
    ...padding(10, 0, 0, 0),
  },
  noDataFround: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  noDataFoundText: {
    ...FONT_SEMI_BOLD,
    color: GRAY_DARK,
    fontSize: FONT_SIZE_14,
    textAlign: "center",
  },
})
