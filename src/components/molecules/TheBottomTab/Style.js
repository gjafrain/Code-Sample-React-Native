/** @format */

import { Platform, StyleSheet } from "react-native"
import { verticalScale } from "react-native-size-matters"
import {
  GRAY_DARK,
  GRAY_MEDIUM,
  GRAY_TEXT,
  PRIMARY,
  WHITE,
} from "../../../styles/colors"
import { padding, WINDOW_WIDTH } from "../../../styles/mixins"
import { EXTRA_SMALL_TEXT, FONT_SEMI_BOLD } from "../../../styles/typography"

export default StyleSheet.create({
  container: {
    height: verticalScale(Platform.OS === 'ios' ? 70 : 55),
    backgroundColor: WHITE,
    width: WINDOW_WIDTH,
    borderTopWidth: 0.5,
    borderTopColor: GRAY_MEDIUM,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    elevation: 2,
    flexDirection: "row",
    // justifyContent: "space-between",
    justifyContent: "space-around",
    alignItems: "center",
    // ...padding(0, 15, 0, 25),
    marginBottom: -10,
  },
  tab: {
    alignItems: "center",
  },
  label: {
    ...EXTRA_SMALL_TEXT,
    color: GRAY_DARK,
    // ...FONT_SEMI_BOLD,
    letterSpacing: 0.4,
  },
  active: {
    color: PRIMARY,
  },
})
