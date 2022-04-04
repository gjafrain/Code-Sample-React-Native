/** @format */

import React, { useRef, useState, useEffect } from "react"
import { useSelector } from "react-redux"
import RNOtpVerify from "react-native-otp-verify"
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator,
  Platform,
} from "react-native"
//
import BgImage from "../../../../../assets/images/otp-bg.png"
//
import Styles from "./Style"
import { Button } from "../../../../atoms/Button"
import { login, sendOtp } from "../../../../../redux/modules/auth/action"
import {
  errorMessage,
  setValue,
  successMessage,
} from "../../../../../utils/common"
import asyncStoreConst from "../../../../../utils/asyncStoreConst"
import { fetchCartById } from "../../../../../redux/modules/cart/action"
import { THIRD } from "../../../../../styles/colors"
import { setViewType } from "../../../../../redux/modules/bottomModal/actions"
import { Icon } from "../../../../atoms/Icon"

export default function VerifyOtp({ navigation, dispatch, params, onClose }) {
  const loginLoading = useSelector((state) => state.auth.loginLoading),
    inputRef1 = useRef(null),
    inputRef2 = useRef(null),
    inputRef3 = useRef(null),
    inputRef4 = useRef(null),
    iosOTPIndexRef = useRef(null),
    [autoHitVerify, autoHitVerifySet] = useState(true),
    [otpArray, setOtpArray] = useState([])

  useEffect(() => {
    if (Platform.OS !== "ios") {
      startListeningForOtp()
      return () => RNOtpVerify.removeListener()
    }
  }, [])

  const startListeningForOtp = () => {
    RNOtpVerify.getOtp()
      .then((p) => RNOtpVerify.addListener(otpHandler))
      .catch((p) => console.log(p))
  }

  const otpHandler = (message) => {
    if (!message || message.includes("Error")) {
    } else {
      let otp = /(\d{4})/g.exec(message)[1]
      otp = otp.split("")

      Keyboard.dismiss()
      setOtpArray(otp)
      autoHitVerify && handleVerifyOtp(otp)
    }
  }

  const onOTPChange = (index, value) => {

    if (isNaN(Number(value))) return;

    const otpArrayCopy = otpArray.concat()
    otpArrayCopy[index] = value
    setOtpArray(otpArrayCopy)

    // Autofocus to next InputText if value is not blank
    if (value !== "") {
      if (index === 0) inputRef2.current.focus()
      else if (index === 1) inputRef3.current.focus()
      else if (index === 2) inputRef4.current.focus()
    }

    if (index === 3 && autoHitVerify) handleVerifyOtp(otpArrayCopy)
  }

  const onOTPKeyPress = (index, { nativeEvent: { key: value } }) => {

    // Autofocus to previous input if the value is blank and existing value is also blank
    if (value === "Backspace") {
      if (index === 0) {
        inputRef1.current.focus()
      } else if (index === 1) {
        inputRef1.current.focus()
      } else if (index === 2) {
        inputRef2.current.focus()
      } else if (index === 3) {
        inputRef3.current.focus()
      }

      const otpArrayCpy = otpArray.concat()
      otpArrayCpy[index] = null
      setOtpArray(otpArrayCpy)
    } else {
      onOTPChange(iosOTPIndexRef.current || 0, value)
      iosOTPIndexRef.current = iosOTPIndexRef.current + 1
    }
  }

  const handleVerifyOtp = async (otp = otpArray) => {

    if (!otp.length) {
      errorMessage("OTP is required!")
      return true
    }

    // Disable auto hit API 
    autoHitVerify && autoHitVerifySet(false)

    Keyboard.dismiss()
    otp = otp.reduce((x, y) => x + y)

    const onSuccess = async ({ data, message }) => {
      // setOtpArray([])
      await setValue(asyncStoreConst.ACCESS_TOKEN, data.token)
      dispatch(fetchCartById({}))
      if (data.name) {
        navigation.navigate("Home")
        successMessage(message)
        setTimeout(() => onClose(), 1000)
      } else dispatch(setViewType({ type: "Signup" }))
    }
    const onFail = ({ message }) => errorMessage(message)
    dispatch(login({ data: { phone: params.phone, otp }, onSuccess, onFail }))
  }

  return (
    <ImageBackground
      source={BgImage}
      barStyle='dark-content'
      style={Styles.modalBgImage}
    >
      <View style={Styles.formContainer}>
        <TouchableOpacity
          style={Styles.header}
          onPress={onClose}
          hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
        >
          <Icon name={"Cross"} size={"s"} />
        </TouchableOpacity>
        <View style={Styles.loginForm}>
          <View>
            <Text style={[Styles.normalText]}>
              Please enter OTP sent to your mobile number
              <Text style={Styles.boldRegularText}> {params?.phone}</Text>
            </Text>
          </View>
          <View style={Styles.verifyOtpTextContainer}>
            {[inputRef1, inputRef2, inputRef3, inputRef4].map((inputRef, i) => {
              return (
                <TextInput
                  key={i}
                  ref={inputRef}
                  style={Styles.otpInputText}
                  onChangeText={(e) => onOTPChange(i, e)}
                  onKeyPress={(e, key) => onOTPKeyPress(i, e, key)}
                  value={otpArray[i]}
                  keyboardType='numeric'
                  textContentType='oneTimeCode'
                  maxLength={1}
                />
              )
            })}
          </View>
          <View style={Styles.button}>
            <Button
              label='Verify otp'
              loader={loginLoading}
              icon={"Tick"}
              iconBefore={false}
              onPress={() => handleVerifyOtp()}
            />
            <ResendOtp dispatch={dispatch} phone={params?.phone} />
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

function ResendOtp({ dispatch, phone = "9991134734" }) {
  const initialCount = 60,
    [enableResentOtp, enableResentOtpSet] = useState(true),
    [countDown, countDownSet] = useState(initialCount),
    timeIntervalRef = useRef(null),
    { sendOtpLoading } = useSelector((state) => state.auth)

  useEffect(() => {
    return () => clearInterval(timeIntervalRef.current)
  }, [])

  // Handle the button press
  const handleSendOtp = async () => {
    const onSuccess = ({ message }) => {
      enableResentOtpSet(false)
      successMessage(message)
      setTimeInterval(initialCount)
    }
    const onFail = ({ message }) => errorMessage(message)
    dispatch(sendOtp({ data: { phone }, onSuccess, onFail }))
  }

  const setTimeInterval = (time) => {
    countDownSet(time)
    timeIntervalRef.current = setInterval(() => {
      countDownSet((preState) => {
        if (preState === 1) {
          enableResentOtpSet(true)
          clearInterval(timeIntervalRef.current)
        }
        return preState - 1
      })
    }, 1000)
  }

  return enableResentOtp ? (
    <TouchableOpacity
      style={Styles.resendOtpWrapper}
      onPress={sendOtpLoading ? () => { } : handleSendOtp}
      hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
    >
      {sendOtpLoading ? (
        <ActivityIndicator color={THIRD} size={"small"} />
      ) : (
        <Text style={Styles.resendOtp}>Resend OTP ?</Text>
      )}
    </TouchableOpacity>
  ) : (
    <View style={Styles.resendOtpWrapper}>
      <Text style={Styles.resendOtpWait}>
        00:{countDown < 10 ? "0" : ""}
        {countDown}
      </Text>
    </View>
  )
}
