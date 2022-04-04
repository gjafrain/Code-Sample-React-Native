import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { BLACK, GRAY_DARK, GRAY_LIGHT, GRAY_MEDIUM, GRAY_TEXT, PRIMARY, SECONDARY, THIRD, WHITE } from '../../../../../styles/colors';
import { margin, WINDOW_HEIGHT, WINDOW_WIDTH, padding } from '../../../../../styles/mixins';
import { FONT_BOLD, FONT_REGULAR, FONT_SEMI_BOLD, FONT_SIZE_18, SMALL_TEXT, FONT_SIZE_20, MINNI_TEXT } from '../../../../../styles/typography';

export default StyleSheet.create({

    title: {
        ...SMALL_TEXT,
        ...FONT_SEMI_BOLD
    },
    formContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoWrapper: {
        height: verticalScale(70),
        width: scale(90),
        alignSelf: 'center'
    },
    logoImage: {
        height: '100%',
        width: '100%'
    },
    formTitle: {
        textAlign: 'center',
        ...margin(0, 0, 20, 0)
    },
    formWrapper: {
        width: '100%',
        ...padding(0, 30, 0, 30),
    },
    input: {
        ...MINNI_TEXT,
        maxHeight: 100
    },
    btnWrapper: {
        ...margin(30, 0, 20, 0)
    },
    starWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        ...margin(25, 0, 10, 0)
    },
    inActiveStar: {
        tintColor: GRAY_MEDIUM
    },
    activeStar: {
        tintColor: SECONDARY
    },
    contactOption: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    radioButtonWrapper:{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems:'center'
    },
    optionLabel:{
        ...SMALL_TEXT,
        color:BLACK,
        ...padding(0,0,0,10)

    }
})
