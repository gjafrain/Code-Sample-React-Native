import { StyleSheet } from 'react-native';
import { verticalScale, scale } from 'react-native-size-matters';
// GLOBAL STYLE
import { margin, padding, WINDOW_HEIGHT } from '../../../styles/mixins';
import { FONT_SEMI_BOLD, SMALL_TEXT } from '../../../styles/typography';
import { GRAY_DARK, SECONDARY } from '../../../styles/colors';

export default StyleSheet.create({
    container: {
        ...padding(0, 10, 0, 10),
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flex: 1
        // backgroundColor:SECONDARY
    },
    fullScreen: {
        height: WINDOW_HEIGHT - 100
    },
    imageBox: {
        height: verticalScale(100),
        width: scale(160),
        opacity: .8
    },
    image: {
        height: '100%',
        width: '100%',
    },
    text: {
        ...SMALL_TEXT,
        ...FONT_SEMI_BOLD,
        color: GRAY_DARK,
        textAlign: 'center',
        width: scale(240),
        ...margin(20, 0, 0, 0)
    }
})