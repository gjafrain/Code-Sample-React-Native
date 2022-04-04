import { StyleSheet } from 'react-native';
import { verticalScale } from 'react-native-size-matters';
import { PRIMARY, SECONDARY, WHITE } from '../../../styles/colors';
import { margin, padding, WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../styles/mixins';
import { MINNI_TEXT, SMALL_TEXT } from '../../../styles/typography';

export default StyleSheet.create({
    centeredView: {
        height: WINDOW_HEIGHT,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 22,
        backgroundColor:"#cdcdcd6e"
    },
    modalView: {
        width: WINDOW_WIDTH - 50,
        backgroundColor: WHITE,
        borderRadius: 20,
        shadowColor: "#000",
        overflow: 'hidden',
        // alignItems: "center",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalBackgroundView: {
        width: '100%',
        // padding: 35,
        alignItems: "center",
    },
    headerWrapper: {
        width: '100%',
        height: 30,
    },
    body: {
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    welcomeText: {
        ...SMALL_TEXT,
        ...margin(10, 0, 10, 0)
    },
    logoImageWrapper: {
        height: 100,
        width: 120,
    },
    logoImage: {
        height: '100%',
        width: '100%',
        // width: 140,
        // opacity: .8
    },
    optionHeader: {
        ...margin(10, 0, 30, 0),
    },
    option: {
        height: verticalScale(40),
        ...padding(0, 50, 0, 50),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        ...margin(10, 0, 10, 0),
        backgroundColor: PRIMARY,
        borderRadius: 5,
    },
    engOption: {
        backgroundColor: SECONDARY,
    },
    optionText: {
        ...MINNI_TEXT,
        color: WHITE
    }
})
