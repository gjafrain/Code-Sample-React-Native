import { StyleSheet } from 'react-native';
import { verticalScale, scale } from 'react-native-size-matters';
// GLOBAL STYLE
import { margin, padding } from '../../styles/mixins';
import { BLACK, GRAY_DARK, GRAY_TEXT, PRIMARY, SECONDARY, WARNING, WHITE } from '../../styles/colors';
import { EXTRA_SMALL_TEXT, FONT_REGULAR, FONT_SEMI_BOLD, FONT_SIZE_14, MINNI_TEXT, LINE_HEIGHT_10, LINE_HEIGHT_12, LINE_HEIGHT_14, REGULAR_FONT_SIZE, SMALL_TEXT, SUB_HEADING, FONT_BOLD } from '../../styles/typography';

export default StyleSheet.create({
    headerContainer: {
        justifyContent: 'flex-start'
    },
    section: {
        ...margin(15, 0, 15, 0)
    },
    orderSummary: {
        ...margin(5, 25, 5, 25),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    orderSummaryLabel: {
        ...SMALL_TEXT,
        color:GRAY_TEXT
    },
    itemCount: {
        ...EXTRA_SMALL_TEXT,
        textTransform: 'uppercase',
        color:GRAY_TEXT
    },
    sectionTitle: {
        ...SUB_HEADING,
        ...padding(10, 10, 10, 15)
    },
    loadingSlotContainer:{
        borderRadius: 20,
        ...margin(0, 10, 0, 0),
        overflow:'hidden'
    },
    linearSlotContainer:{
        height: verticalScale(100),
        width: scale(90),
    },
    slot: {
        height: verticalScale(100),
        width: scale(90),
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: PRIMARY,
        borderRadius: 20,
        ...margin(0, 10, 0, 0),
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        alignItems: 'center'
    },
    scrollFirstItem: {
        ...margin(0, 10, 0, 25)
    },
    slotDay: {
        ...EXTRA_SMALL_TEXT,
        textTransform: 'uppercase'
    },
    textDivide: {
        ...padding(0, 3, 0, 3)
    },
    date: {
        ...REGULAR_FONT_SIZE
    },
    slotTime: {
        ...EXTRA_SMALL_TEXT,
        ...FONT_SEMI_BOLD,
        textTransform: 'uppercase'
    },
    activeSlot: {
        backgroundColor: PRIMARY,
    },
    activeText: {
        color: WHITE,
    },
    inactiveText: {
        color: BLACK,
    },
    deliveryCharge: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...margin(10, 25, 10, 25),
    },
    deliveryChargeHint: {
        ...EXTRA_SMALL_TEXT,
        color: WARNING,
        ...FONT_BOLD,
        letterSpacing: .7,
        ...margin(0, 25, 15, 25),
    },
    appliedCoupon: {
        ...SMALL_TEXT,
        textTransform: 'uppercase'
    },
    orderTotal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...margin(15, 25, 0, 25),
        ...padding(20, 0, 0, 0),
        borderTopColor: GRAY_DARK,
        borderTopWidth: .5
    },
    orderTotalLable: {
        ...SUB_HEADING,
    },
    mode: {
        ...margin(15, 25, 5, 25),
        flexDirection: 'row',
        // justifyContent: 'space-around',
        alignItems: 'center'
    },
    modeLable: {
        ...SMALL_TEXT,
        ...margin(0, 0, 0, 25),
    },
    placeOrderButton: {
        ...margin(25, 15, 50, 15),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: scale(40),
        backgroundColor: PRIMARY,
        borderRadius: 10
    },
    placeOrderButtonText: {
        ...SMALL_TEXT,
        textTransform: 'uppercase',
        color: WHITE
    },
    0: {
        opacity: .7
    }
})
