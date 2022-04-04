
import { StyleSheet } from 'react-native';
import { verticalScale } from 'react-native-size-matters';
//
import { ALERT, BLACK, GRAY_DARK, GRAY_LIGHT, GRAY_MEDIUM, GRAY_TEXT, PRIMARY, SECONDARY, WHITE } from '../../styles/colors';
import { margin, padding, WINDOW_HEIGHT, WINDOW_WIDTH } from '../../styles/mixins';
import { FONT_LIGHT, FONT_REGULAR, MINNI_TEXT, SMALL_TEXT } from '../../styles/typography';

export default StyleSheet.create({

    theHeaderContainer: {
        justifyContent: 'flex-start',
        backgroundColor: PRIMARY
    },
    addressListLoadingContainer: {
        borderRadius: 15,
        overflow: 'hidden',
        ...margin(10, 10, 10, 10),
        flexDirection: 'row',
        justifyContent: 'center'
    },
    addressListLinearContainer: {
        width: WINDOW_WIDTH - 100,
        height: WINDOW_HEIGHT / 4
    },
    addressWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...padding(15, 0, 15, 15),
        width: WINDOW_WIDTH,
    },
    iconWrapper: {
        width: '10%',
        // backgroundColor:GRAY_LIGHT,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    bookMarkIcon: {
        tintColor: SECONDARY,
    },
    addressDetailWrapper: {
        width: '70%'
    },
    addressType: {
        ...FONT_REGULAR,
        ...padding(0, 0, 5, 0),
        color: BLACK
    },
    label: {
        ...SMALL_TEXT,
        color: GRAY_TEXT,
        ...FONT_LIGHT
    },
    value: {
        ...SMALL_TEXT,
    },
    mapContaier: {
        height: (WINDOW_HEIGHT - verticalScale(70)) / 1.4,
        backgroundColor: GRAY_LIGHT,
        position: 'relative'
    },

    mapWrapperLocation: {
        flexDirection: 'row',
        alignItems: 'center',
        ...margin(20, 0, 20, 0),

    },
    locationInfo: {
        flexDirection: 'column'
    },
    subText: {
        ...MINNI_TEXT,
        color: GRAY_DARK
    },
    saveBtnWrapper: {
        ...margin(20, 10, 20, 10),
    },
    address: {
        flexDirection: 'row'
    },
    changeLocationText: {
        color: PRIMARY
    },
    inlineInputText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    plotNumberInputBox: {
        flex: .35
    },
    landmarkInputBox: {
        flex: .55
    },
    pincodeInputBox: {
        flex: .3
    },
    contactInputBox: {
        flex: .6
    },
    marker: {
        height: 48,
        width: 48,
    },
    notDeliveryAreaMsg: {
        position: 'absolute',
        bottom: 0,
        width: WINDOW_WIDTH,
        backgroundColor: ALERT,
        ...padding(10, 10, 10, 10),
        zIndex: 999,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorText: {

        ...MINNI_TEXT,
        color: WHITE,
    },
    loadingAddress: {

    }
})
