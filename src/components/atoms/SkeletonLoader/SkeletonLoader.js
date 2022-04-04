import React, { useEffect } from 'react'
import { View, Animated, Easing } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
//
import { GRAY_LIGHT, GRAY_MEDIUM } from '../../../styles/colors';
import Styles from './Style';

const AnimatedLG = Animated.createAnimatedComponent(LinearGradient)

export default function SkeletonLoader({ container = {}, width = 120, linearContainer = {} }) {

    const animatedValue = new Animated.Value(0);

    useEffect(() => {
        Animated.loop(
            Animated.timing(animatedValue, {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear.inOut,
                useNativeDriver: true
            })).start()
    })

    const translateX = animatedValue.interpolate({
        inputRange: [.1, .9],
        outputRange: [-width, width]
    })

    return (
        <View style={[Styles.container, container]}>
            <AnimatedLG
                colors={[GRAY_LIGHT, GRAY_MEDIUM, GRAY_MEDIUM, GRAY_LIGHT]}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                style={[Styles.linearContainer, { transform: [{ translateX: translateX }] }, linearContainer]}
            />
        </View >
    )
}
