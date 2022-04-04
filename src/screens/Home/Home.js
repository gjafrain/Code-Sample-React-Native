/** @format */

import React, { useEffect, useRef, useState, useContext } from "react"
import { useDispatch } from "react-redux"
import { ScrollView, RefreshControl, SafeAreaView } from "react-native"
// CHILD
import Slider from "./Components/Slider"
import Categories from "./Components/Categories"
import Top10Categories from "./Components/Top10Categories"
import ShopAllProducts from "./Components/ShopAllProducts"
// COMPONENTS
import { TheContainer } from "../../components/molecules/TheContainer"
import { TheHeader } from "../../components/molecules/TheHeader"
import { TheBottomTab } from "../../components/molecules/TheBottomTab"
// STYLE
import Styles from "./Style"
import languageContext from "../../utils/context"
import { BAR_STYLE_LIGHT } from "../../styles/colors"

export default function Home({ navigation, route }) {
    const dispatch = useDispatch(),
        [refresh, refreshSet] = useState(false)

    const consts = useContext(languageContext)

    const handleRefresh = () => refreshSet(true);

    return (
        <>
            <TheHeader
                title={"Store"}
                navigation={navigation}
                showSideBarIcon={true}
                showBasketIcon={false}
                showSerachIcon={true}
                navigation={navigation}
                showStatusBar={true}
                barStyle={BAR_STYLE_LIGHT}
            />
            <TheContainer showStatusBar={false}>
                <ScrollView
                    refreshControl={
                        <RefreshControl refreshing={refresh} onRefresh={handleRefresh} />
                    }
                >
                    <Slider Styles={Styles} />
                    <Categories
                        Styles={Styles}
                        dispatch={dispatch}
                        navigation={navigation}
                        refresh={refresh}
                    />
                    <Top10Categories
                        Styles={Styles}
                        dispatch={dispatch}
                        navigation={navigation}
                        refresh={refresh}
                    />
                    {/* <ShopAllProducts Styles={Styles} dispatch={dispatch} refresh={refresh} /> */}
                </ScrollView>
            </TheContainer>
            <TheBottomTab navigation={navigation} route={route} />
        </>
    )
}
