import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
// STYLE
import { padding, margin } from '../../../styles/mixins';
import { ALERT, GRAY_DARK, PRIMARY, SUCCESS, WARNING } from '../../../styles/colors';
import { FONT_REGULAR, EXTRA_SMALL_TEXT, FONT_SIZE_14, MINNI_TEXT, SMALL_TEXT } from '../../../styles/typography';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        ...margin(10, 0, 10, 0),
    },
    outofStock: {
        opacity:.7
    },
    updateCartButtonContainer: {
        height: undefined
    },
    topSpace: {
        ...margin(20, 0, 15, 0),
    },
    bottomSpace: {
        ...margin(10, 0, 45, 0),
    },
    textDivide: {
        paddingLeft: 2,
        paddingRight: 2,
        ...FONT_REGULAR,
        fontSize: FONT_SIZE_14
    },
    title: {
        ...SMALL_TEXT,
        // fontSize: FONT_SIZE_14,
        // ...SMALL_TEXT,
        paddingLeft: 10
    },
    itemPrice: {
        ...SMALL_TEXT,
        // paddingLeft: 5
    },
    itemTotalPrice: {
        ...SMALL_TEXT,
        paddingRight: 5
    },
    productImageBox: {
        height: verticalScale(50),
        width: scale(55),
        ...margin(0, 10, 0, 0),
    },
    productImage: {
        height: '100%',
        width: '100%',
        borderRadius: 10,
    },
    cartImageBox: {
        ...padding(10, 10, 0, 10)
    },
    itemCount: {
        ...EXTRA_SMALL_TEXT,
        color: GRAY_DARK,
        paddingLeft: 10
    },
    itemWeight: {
        ...MINNI_TEXT,
        color: GRAY_DARK,
        paddingLeft: 10
    },
    cartPriceStatusWrapper: {
    },
    cartPriceStatusText: {
        ...EXTRA_SMALL_TEXT,
        fontFamily: 'OpenSans-LightItalic',
        ...padding(0, 0, 10, 0)
    },
    incr: {
        color: WARNING,
    },
    decr: {
        color: PRIMARY,
    }
})