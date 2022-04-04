import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
//
import { BLACK, GRAY_DARK, GRAY_LIGHT, GRAY_MEDIUM, PRIMARY, WHITE } from '../../../../../styles/colors';
import { margin, padding, WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../../../styles/mixins';
import { FONT_REGULAR, MINNI_TEXT, SMALL_TEXT } from '../../../../../styles/typography';


export default StyleSheet.create({
    formContainer: {
        height: WINDOW_HEIGHT,
    },
    autoCompleteWrapper: {
        ...margin(0, 20, 0, 20),
        marginTop: -30
    },

    inputSearchContainer: {
        ...padding(0, 10, 0, 10),
        height: verticalScale(45),
        borderColor: GRAY_MEDIUM,
        borderWidth: scale(.8),
        borderRadius: 10,
        position: 'relative',
        flexDirection: 'row'
    },
    inputSearch: {
        ...padding(0, 30, 0, 35),
        height: '100%',
        width: '100%',
        ...SMALL_TEXT,
        color: BLACK,
    },
    backIconContainer: {
        position: 'absolute',
        top: 2,
        height: verticalScale(40),
        backgroundColor: WHITE,
        width: verticalScale(30),
        zIndex: 999,
        left: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    crossIconContainer: {
        position: 'absolute',
        top: 2,
        height: verticalScale(40),
        backgroundColor: WHITE,
        width: verticalScale(30),
        zIndex: 999,
        right: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    currentLocationMarker: {
        flexDirection: 'row',
        alignItems: 'center',
        ...margin(30, 0, 10, 0)
    },
    currentLocationImageStyle: {
        tintColor: PRIMARY
    },
    currentLocationText: {
        ...MINNI_TEXT,
        color: PRIMARY
    },
    locationsListWrapper: {
        borderTopWidth: 1,
        borderTopColor: GRAY_MEDIUM,
    },
    locationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        // ...margin(5, 0, 5, 0),
        ...padding(10, 0, 10, 0),

        borderBottomWidth: 1,
        borderBottomColor: GRAY_MEDIUM,
    },
    locationTextWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    subText: {
        ...MINNI_TEXT,
        color: GRAY_DARK
    },
    deliveryErrorWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1,
        height: WINDOW_HEIGHT
    },
    errorMainText: {
        ...FONT_REGULAR,
        ...margin(0, 0, 30, 0)
    },
    errorSubText: {
        ...MINNI_TEXT,
        color: GRAY_DARK
    }
})