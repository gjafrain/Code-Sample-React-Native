import { StyleSheet } from 'react-native';
import { verticalScale } from 'react-native-size-matters';
//
import { ALERT, BLACK, GRAY_DARK, GRAY_LIGHT, GRAY_MEDIUM, GRAY_TEXT, PRIMARY, SECONDARY, WHITE } from '../../../../../styles/colors';
import { margin, padding, WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../../../styles/mixins';
import { FONT_LIGHT, FONT_REGULAR, MINNI_TEXT, SMALL_TEXT } from '../../../../../styles/typography';

export default StyleSheet.create({
    container: {
        // height: WINDOW_HEIGHT
    },
    header: {
        height: verticalScale(40),
        flexDirection: 'row',
        borderBottomColor: GRAY_LIGHT,
        borderBottomWidth: .8,
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    crossIcon: {
        ...padding(5, 15, 0, 0),
    },
    heading: {
        ...FONT_REGULAR,
    },
    addressForm: {
        justifyContent: 'center',
        ...margin(25, 20, 50, 20)
    },
    activeAddressType: {
        backgroundColor: PRIMARY
    },
    addressTypeOptionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        ...margin(25, 10, 40, 0),
    },
    addressTypeOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        ...padding(8, 15, 8, 10),
        backgroundColor: GRAY_LIGHT,
        borderRadius: 50,
        alignItems: 'center'
    },
    addressTypeOptionText: {
        ...MINNI_TEXT
    },
    activeAddressType: {
        backgroundColor: PRIMARY
    },
})