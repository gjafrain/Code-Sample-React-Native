import { Alert, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { ALERT, BLACK, GRAY_DARK, GRAY_LIGHT, GRAY_MEDIUM, GRAY_TEXT, PRIMARY, SECONDARY, THIRD, WHITE } from '../../../../../styles/colors';
import { margin, padding, WINDOW_HEIGHT, WINDOW_WIDTH, boxShadow } from '../../../../../styles/mixins';
import { FONT_BOLD, FONT_FAMILY_SEMI_BOLD, FONT_ITALIC, FONT_REGULAR, FONT_SEMI_BOLD, FONT_SIZE_18, FONT_SIZE_20, MINNI_TEXT, REGULAR_FONT_SIZE, SMALL_TEXT } from '../../../../../styles/typography';

export default StyleSheet.create({
    modalBgImage: {
        width: '100%'
    },
    formContainer: {
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        ...margin(20, 0, 20, 0),
    },
    signupFormContainer: {
        ...padding(0, 20, 0, 20),
    },
    loginForm: {
        ...padding(10, 10, 10, 10),
        flexDirection: 'column',
        alignItems: 'center',
    },

    header: {
        position: 'absolute',
        top: -25,
        left: 15,
        backgroundColor: GRAY_LIGHT,
        // ...padding(10, 10, 10, 10),
        borderRadius: 50,
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99
    },
    normalText: {
        ...SMALL_TEXT,
        ...margin(0, 0, 15, 0),
        textAlign: 'center',
        color: '#424242',
        textTransform: 'uppercase',
    },
    boldRegularText: {
        ...SMALL_TEXT,
        ...FONT_BOLD
    },
    textContainer: {
        ...margin(0, 0, 20, 0)
    },
    textError: {
        borderColor: ALERT,
        backgroundColor: '#fd9c8d'
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    phoneExtention: {
        height: verticalScale(45),
        ...FONT_REGULAR,
        borderRadius: 10,
        borderWidth: 1,
        ...padding(5, 5, 5, 10),
        borderRightWidth: 0,
        alignItems: 'center',
        flexDirection: 'row',
        // backgroundColor: GRAY_LIGHT,
        marginRight: -1,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderColor: PRIMARY,
        color: GRAY_DARK
    },
    phoneText: {
        width: WINDOW_WIDTH - 160,
        borderLeftWidth: 0,
        // backgroundColor: GRAY_MEDIUM,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        ...padding(5, 5, 5, 0),
    },
    inputText: {
        ...FONT_REGULAR,
        borderRadius: 10,
        borderWidth: scale(2),
        ...padding(5, 5, 5, 10),
        width: WINDOW_WIDTH - 100,
        height: verticalScale(45),
        backgroundColor: WHITE,
        color: BLACK,
        borderWidth: 1,
        borderColor: PRIMARY
    },
    phoneDigitCountTextContainer: {
        // backgroundColor: PRIMARY,
        position: 'absolute',
        bottom: -20,
        right: 10
    },
    phoneDigitCountTextError: {
        color: ALERT,
        ...FONT_SEMI_BOLD
    },
    phoneDigitCountText: {
        ...MINNI_TEXT,
        color: BLACK
    },
    button: {
        width: WINDOW_WIDTH - 100,
        ...margin(20, 0, 0, 0)
    },
    btnText: {
        ...FONT_REGULAR,
        color: WHITE,
        textTransform: 'uppercase'
    },

    verifyOtpTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: WINDOW_WIDTH - 100
    },
    otpInputText: {
        ...FONT_REGULAR,
        borderRadius: 10,
        height: verticalScale(40),
        width: verticalScale(40),
        backgroundColor: WHITE,
        textAlign: 'center',
        alignSelf: 'center',
        color: BLACK,
        borderWidth: 1,
        borderColor: PRIMARY
    },

    // SIGNUP DESIGN 
    signupImage: {
        flex: 1,
        height: WINDOW_HEIGHT,
        width: WINDOW_WIDTH,
        ...padding(0, 10, 0, 10)
    },
    logout: {
        textTransform: 'uppercase',
        textDecorationLine: 'underline',
        ...SMALL_TEXT
    },
    welcomeContainer: {
        ...margin(90, 20, 0, 20)
    },
    welcomeText: {
        ...FONT_REGULAR,
        fontSize: FONT_SIZE_18,
        color: GRAY_TEXT,
    },
    appName: {
        ...FONT_REGULAR,
        fontSize: FONT_SIZE_20,
        textTransform: 'uppercase',
        color: PRIMARY,
        ...FONT_BOLD,
        textShadowColor: PRIMARY,
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        letterSpacing: 2,
        ...margin(10, 0, 0, 100)
    },
    signupForm: {
        justifyContent: 'center',
        ...margin(90, 10, 50, 10)
    },
    inlineTextGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        ...margin(20, 0, 0, 0)
    },
    inputBox: {
        ...margin(0, 10, 15, 10)
    },
    halfScreenInputText: {
        flex: .45
    },
    signupFooter: {
        ...margin(20, 0, 0, 0)
    },
    resendOtpWrapper: {
        ...margin(15, 0, 0, 0),
        // ...padding(0, 0, 15, 0)
    },
    resendOtp: {
        ...MINNI_TEXT,
        color: PRIMARY,
        textDecorationLine: 'underline',
        textAlign: 'center',
        ...FONT_SEMI_BOLD,
    },
    resendOtpWait: {
        ...MINNI_TEXT,
        color: PRIMARY,
        textAlign: 'center'
    }
})
