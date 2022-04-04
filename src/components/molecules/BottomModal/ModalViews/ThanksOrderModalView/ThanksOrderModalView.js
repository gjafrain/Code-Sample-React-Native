import React, { useState, useEffect } from "react"
import { View, Text, Image, ImageBackground, TouchableOpacity } from "react-native"
// 
import ThanksBack from '../../../../../assets/images/thanks-back.png';
import Background from '../../../../../assets/images/background.gif';
import Thankyou from '../../../../../assets/images/second-logo.png';
// import Thankyou from '../../../../../assets/images/thankyou.gif';
import Styles from './Style';
import { Button } from "../../../../atoms/Button";
import { closeBottomModal } from "../../../../../redux/modules/bottomModal/actions";

export default function ThanksOrderModalView({ navigation, data, dispatch }) {

    const [showGif, setShowGif] = useState(true)

    useEffect(() => {
        const timeId = setTimeout(() => {
            setShowGif(false)
        }, 4000);
        return (() => {
            clearTimeout(timeId)
        })
    }, [])

    const handleNavigation = (screen) => {
        dispatch(closeBottomModal())
        navigation.navigate(screen, { id: data.id });
    }

    return (
        <View style={Styles.container}>
            <ImageBackground
                style={Styles.backgroundContainer}
                source={ThanksBack}
            >
                <View style={Styles.body}>
                    <ImageBackground
                        style={Styles.animatedBackground}
                        source={showGif ? Background : ''}
                    >
                        <View style={{ alignItems: "center" }}>
                            <View style={Styles.logoImageWrapper}>
                                <Image
                                    style={Styles.logoImage}
                                    source={Thankyou}
                                />
                            </View>
                            <Text style={Styles.thanksOrderText}>
                                Thanks for your order
                            </Text>
                            <Text style={Styles.orderDetailText}>
                                Your order has been submitted with order #000{data.id}
                            </Text>
                            <View style={Styles.footerAction}>
                                <Button label={"Track Order"} showIcon={false} style={'contentCenter'} onPress={() => handleNavigation('OrderDetail')} />
                                <TouchableOpacity style={Styles.goHomeButton} onPress={() => handleNavigation('Home')}>
                                    <Text style={Styles.goHomeButtonText}>Continue Browsing</Text>
                                    <View style={Styles.goHomeButtonBorder} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </ImageBackground>
        </View>
    )
}
