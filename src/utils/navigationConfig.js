import { Easing } from 'react-native';

export const openConfig = {
    animation: 'timing',
    config: {
        stiffness: 200,
        damping: 50,
        mass: 3,
        overshootClamping: true,
        restDisplacementTheshold: 0.01,
        restSpeedThreshold: 0.01,
        easing: Easing.linear
    }
}

export const closeConfig = {
    animation: 'timing',
    config: {
        duration: 200,
        easing: Easing.linear
    }
}