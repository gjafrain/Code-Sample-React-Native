import { StyleSheet } from 'react-native';

import { verticalScale, scale } from 'react-native-size-matters';
import { GRAY_TEXT, PRIMARY } from '../../../../../styles/colors';
// GLOBAL STYLE
import { margin, padding } from '../../../../../styles/mixins';
import { FONT_REGULAR, FONT_SEMI_BOLD, MINNI_TEXT, SMALL_TEXT } from '../../../../../styles/typography';

export default StyleSheet.create({
    container: {
        // ...padding(0, 15, 0, 15),
        height: verticalScale(400),
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        overflow: 'hidden'
    },
    backgroundContainer: {
        flex: 1,
    },
    body: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    animatedBackground: {
        width: "100%"
    },
    logoImageWrapper: {
        height: 120,
        // opacity: .8
    },
    logoImage: {
        height: '100%',
        // width: 140,
        // opacity: .8
    },
    thanksOrderText: {
        ...FONT_REGULAR,
        ...FONT_SEMI_BOLD,
        color: PRIMARY,
        ...margin(20, 0, 5, 0),
        textTransform: 'uppercase'
    },
    orderDetailText: { ...MINNI_TEXT, color: GRAY_TEXT },
    footerAction: { width: "60%", ...margin(20, 0, 0, 0) },
    goHomeButton: { alignItems: "center", ...margin(15, 0, 0, 0) },
    goHomeButtonText: {
        ...MINNI_TEXT,
        color: PRIMARY,
        textTransform: 'uppercase'
    },
    goHomeButtonBorder: {
        height: 2,
        width: 80,
        backgroundColor: PRIMARY,
        ...margin(2, 0, 0, 0)
    }
})
