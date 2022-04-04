import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
// STYLES
import { padding } from '../../../styles/mixins';

export default StyleSheet.create({
    container: {
        ...padding(0, 10, 0, 10)
    },
    mini: {
        height: scale(8),
        width: scale(8)
    },
    xs: {
        height: scale(10),
        width: scale(10)
    },
    s: {
        height: scale(12),
        width: scale(12)
    },
    md: {
        height: scale(16),
        width: scale(16)
    },
    l: {
        height: scale(18),
        width: scale(18)
    },
    xl: {
        height: scale(20),
        width: scale(20)
    },
    xxl: {
        height: scale(22),
        width: scale(22)
    },
    xxxl: {
        height: scale(24),
        width: scale(24)
    },
    xxxxl: {
        height: scale(28),
        width: scale(28)
    },
    xxxxll: {
        height: scale(32),
        width: scale(32)
    },
    trandform180: {
        transform: [{ rotate: '180deg' }]
    },
})
