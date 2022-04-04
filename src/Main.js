/** @format */

import React, { useEffect, useState } from "react"
import messaging from "@react-native-firebase/messaging"
import { useDispatch, useSelector } from "react-redux"
import FlashMessage from "react-native-flash-message"
//
import Navigator from "./navigations"
import { BottomModal } from "./components/molecules/BottomModal"
import {
  getValue,
  setValue,
  getAppVersion,
  getDeviceBrand,
  getDeviceId,
  errorMessage,
} from "./utils/common"
import asynConst from "./utils/asyncStoreConst"
// REDUX
import { createSessionCode, updatDeviceDetail } from "./redux/modules/auth/action"
import { fetchCartById } from "./redux/modules/cart/action"
import { OverlayTransparent } from "./components/molecules/OverlayTransparent"
import LanguageContext, { initialState, language } from "./utils/context"
import commonStyle from "./styles/commonStyle"
import { LanguageOptionModal } from "./components/molecules/LanguageOptionModal"
import { Platform } from "react-native"

export default function Main({ navigation, route }) {
  messaging().setBackgroundMessageHandler((remoteMessage) => { })

  const dispatch = useDispatch(),
    { openModal } = useSelector((state) => state.bottomModal),
    [consts, setConsts] = useState({ ...initialState, type: "en" }),
    [showLanguageModal, showLanguageModalSet] = useState(false)

  useEffect(() => {
    openLanguageOptionModal()

    requestUserPermission()

    messaging().onMessage((remoteMessage) => {
      console.log("onMessage ...")
    })

    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log("onNotificationOpenedApp ...")
    })

    // Function  will trigger, while open app to check if it's open from notification click or not
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage?.notification) {
          if (remoteMessage?.data) {
            if (remoteMessage.data?.screen)
              navigation.navigate(remoteMessage.data.screen, {
                id: remoteMessage.data.id,
              })
          }
        }
      })

    checkPermission()
    getCart()
  }, [])

  async function openLanguageOptionModal() {
    const language = await getValue(asynConst.LANGUAGE)
    if (language) changeLanguage(language)
    else setTimeout(() => showLanguageModalSet(true), 2000)
  }

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission()
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL

    if (enabled) {
      console.log("Authorization status:", authStatus)
    }
  }

  // CHECK APP HAS PERMESSION
  async function checkPermission() {
    const fcmToken = await getValue(asynConst.FCM_TOKEN),
      sessionCode = await getValue(asynConst.SESSION_CODE)
    console.log("fcmToken ...", fcmToken)
    // CHECK if user has session code and fcm token then update Token else get
    if (fcmToken && sessionCode) return updateFcmToken(fcmToken)

    const enabled = await messaging().hasPermission()

    if (enabled) getToken()
    else requestPermission()
  }

  // REQUEST TO ASK USER FOR PERMESSION
  async function requestPermission() {
    const authStatus = await messaging().requestPermission()
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL

    enabled ? getToken() : createSession()
  }

  async function getToken() {
    let fcmToken = ""
    try {
      if (Platform.OS !== "ios") {
        fcmToken = await messaging().getToken()
        console.log("getToken ... fcmToken ...", fcmToken)
        if (fcmToken) await setValue(asynConst.FCM_TOKEN, fcmToken)
      }
    } catch (err) {
      // errorMessage(err.message)
    } finally {
      const sessionCode = await getValue(asynConst.SESSION_CODE)
      createSession(fcmToken, sessionCode)
    }
  }

  const createSession = async (fcmToken = "", sessionCode = "") => {
    console.log("createSession ... fcmToken ...", fcmToken)
    const onSuccess = async ({ data }) => {
      await setValue(asynConst.SESSION_CODE, data.sessionCode)
      getCart()
    }

    const onFail = ({ message }) => errorMessage(message)
    const payload = {
      appVersion: getAppVersion(),
      deviceId: getDeviceId(),
      deviceBrand: getDeviceBrand(),
      deviceType: getDeviceBrand() === "Apple" ? "iOS" : "Android",
      fcmToken,
      sessionCode,
    }
    dispatch(createSessionCode({ data: payload, onSuccess, onFail }))
  }

  const getCart = async () => {
    const sessionCode = await getValue(asynConst.SESSION_CODE)
    if (!sessionCode) return true
    dispatch(fetchCartById({}))
  }

  const updateFcmToken = (fcmToken) => {
    dispatch(updatDeviceDetail({ data: { fcmToken } }))
  }

  const changeLanguage = (lng) => {
    setValue(asynConst.LANGUAGE, lng)
    if (lng === "hn") {
      global.consts = { ...language.Hindi, type: "hn" }
      setConsts(global.consts)
    } else {
      global.consts = { ...language.English, type: "en" }
      setConsts(global.consts)
    }
    showLanguageModal && showLanguageModalSet(false)
  }

  return (
    <LanguageContext.Provider value={{ ...consts, changeLanguage }}>
      {!openModal && (
        <FlashMessage position='bottom' style={commonStyle.flashMessageStyle} />
      )}
      <LanguageOptionModal
        show={showLanguageModal}
        setLanguage={changeLanguage}
      />
      <OverlayTransparent />
      <Navigator />
      <BottomModal navigation={navigation} route={route} />
    </LanguageContext.Provider>
  )
}
