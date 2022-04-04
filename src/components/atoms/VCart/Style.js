import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
// STYLE
import { boxShadow, padding, margin } from '../../../styles/mixins';
import { SECONDARY, WHITE, GRAY_DARK, BLACK, GRAY_LIGHT, GRAY_MEDIUM, ALERT } from '../../../styles/colors';
import { FONT_REGULAR, FONT_SIZE_10, FONT_SIZE_12, FONT_SIZE_14, LINE_HEIGHT_14, LINE_HEIGHT_16, MINNI_TEXT, REGULAR_FONT_SIZE, SMALL_TEXT } from '../../../styles/typography';

export default StyleSheet.create({
    loadingContainer: {
        borderRadius: 10,
        ...margin(5, 5, 5, 5),
    },
    loadingLinearContainer: {
        height: 235,
        width: 175,
    },
    container: {
        flexDirection: 'column',
        ...boxShadow(GRAY_LIGHT),
        borderColor: GRAY_LIGHT,
        borderWidth: .4,
        borderRadius: 10,
        height: 235,
        width: 175,
        backgroundColor: WHITE,
        ...margin(5, 5, 5, 5),
        position: 'relative',
    },
    imageBoxWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    productImageBox: {
        borderBottomWidth: .4,
        borderBottomColor: GRAY_LIGHT,
        height: 120,
        width: 130,
        marginBottom: 5,
    },
    productImage: {
        height: '100%',
        // width: '100%',
        borderRadius: 10,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
    },
    outofStockContainer: {
        position: 'absolute',
        borderColor: GRAY_DARK
    },
    outofStockText: {
        color: GRAY_DARK
    },
    productInfo: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
        ...padding(0, 0, 6, 0),
    },
    title: {
        ...padding(0, 10, 0, 10),
        ...SMALL_TEXT,
        color: BLACK,
    },
    qty: {
        ...padding(0, 10, 0, 10),
        ...MINNI_TEXT,
        color: GRAY_DARK
    },
    cartImageBox: {
        // ...padding(0, 5, 0, 0)
    },
    startingSpace: {
        marginLeft: 15
    },
    lastSpace: {
        marginRight: 30
    },
})