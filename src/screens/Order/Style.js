
import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
//
import { ALERT, BLACK, GRAY_DARK, GRAY_LIGHT, GRAY_TEXT, LINK_COLOR, PRIMARY, SUCCESS, THIRD, WHITE } from '../../styles/colors';
import { margin, padding, WINDOW_HEIGHT, WINDOW_WIDTH } from '../../styles/mixins';
import { EXTRA_SMALL_TEXT, FONT_BOLD, FONT_SEMI_BOLD, LINE_HEIGHT_10, LINE_HEIGHT_14, LINE_HEIGHT_16, MINNI_TEXT, REGULAR_FONT_SIZE, SMALL_TEXT } from '../../styles/typography';


export default StyleSheet.create({

    header: {
        justifyContent: 'flex-start'
    },
    orderListLoadingContainer: {
        borderRadius: 15,
        overflow: 'hidden',
        ...margin(5, 10, 5, 10),
        flexDirection: 'row',
        justifyContent: 'center'
    },
    orderListLinearContainer: {
        width: WINDOW_WIDTH - 100,
        height: 120
    },
    ordersContainer: {
        ...padding(20, 0, 0, 0)
    },
    order: {
        ...padding(20, 20, 20, 20)
    },
    orderId: {
        flexDirection: 'row'
    },
    orderIdText: {
        ...SMALL_TEXT,
        ...FONT_SEMI_BOLD,
        color: THIRD
    },
    ordersDate: {
        ...EXTRA_SMALL_TEXT,
        color: GRAY_TEXT
    },
    paymentStatus: {
        ...FONT_SEMI_BOLD,
        ...MINNI_TEXT,
        color: GRAY_DARK,
        textTransform: 'capitalize'
    },
    forwordIcon: {
        tintColor: GRAY_LIGHT,
    },
    ordersInfo: {
        ...padding(20, 0, 0, 0),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ordersPrice: {
        ...MINNI_TEXT,
        ...FONT_SEMI_BOLD,
        color: GRAY_TEXT
    },
    orderStatus: {
        ...MINNI_TEXT,
        ...FONT_SEMI_BOLD,
        color: THIRD,
        textTransform: 'uppercase'
    },
    orderStatusSection: {
        backgroundColor: GRAY_LIGHT,
        ...padding(15, 15, 15, 15)
    },
    status: {
        ...padding(0, 0, 0, 0)
    },
    stausIconBox: {
        height: 20,
        width: 20,
        borderRadius: 50,
        backgroundColor: PRIMARY,
        alignItems: 'center',
        justifyContent: 'center'
    },
    stausIconBoxInactive: {
        backgroundColor: GRAY_DARK,
    },
    tickIcon: {
        tintColor: WHITE
    },
    orderStatusDate: {
        ...padding(6, 0, 0, 10),
        ...EXTRA_SMALL_TEXT,
        lineHeight: LINE_HEIGHT_10
    },
    orderStatusLabel: {
        ...MINNI_TEXT,
        ...FONT_SEMI_BOLD,
        ...padding(0, 0, 0, 10),
        lineHeight: LINE_HEIGHT_16
    },
    bottomActiveLine: {
        height: verticalScale(20),
        width: scale(2),
        backgroundColor: PRIMARY,
        borderRadius: 20,
        ...margin(5, 0, 5, 10)
    },
    bottomInactiveLine: {
        backgroundColor: GRAY_DARK,
    },
    section: {
        ...padding(10, 20, 10, 20)
    },
    title: {
        ...SMALL_TEXT,
        ...FONT_SEMI_BOLD,
        textTransform: 'uppercase',
    },
    subTitle: {
        ...MINNI_TEXT,
        textTransform: 'uppercase',
        color: BLACK
    },
    orderList: {
        ...padding(10, 0, 5, 0)
    },
    orderDetailSection: {
        ...padding(5, 0, 0, 0)
    },
    lightTextColor: {
        color: GRAY_TEXT
    },
    itemLabel: {
        ...EXTRA_SMALL_TEXT,
    },
    qty: {
        ...MINNI_TEXT,
    },
    itemPrice: {
        ...MINNI_TEXT,
        // ...FONT_SEMI_BOLD
    },
    subSection: {
        borderColor: GRAY_LIGHT,
        borderTopWidth: .5,
        borderBottomWidth: .5,
        ...margin(15, 0, 15, 0),
        ...padding(10, 0, 10, 0)
    },
    totalItemLabel: {
        ...MINNI_TEXT,
        // ...FONT_SEMI_BOLD,
        color: BLACK
    },
    totalItemPrice: {
        ...MINNI_TEXT,
        // ...FONT_SEMI_BOLD
    },
    paddingTop5: {
        ...padding(5, 0, 0, 0)
    },
    grandTotalSection: {
        ...margin(15, 0, 0, 0),
    },
    grandTotalLabel: {
        ...MINNI_TEXT,
        ...FONT_SEMI_BOLD,
        color: BLACK
    },
    grandTotalPrice: {
        ...MINNI_TEXT,
        ...FONT_SEMI_BOLD,
    },
    paymentDetail: {
        ...padding(15, 0, 15, 0),
        borderBottomColor: GRAY_LIGHT,
        borderBottomWidth: .5,
    },
    patmentTitleSection: {
        ...margin(0, 0, 10, 0)
    },
    patmentTitle: {
        ...MINNI_TEXT,
        color: BLACK
    },
    patmentValueLabel: {
        ...MINNI_TEXT,
    },
    addressDetailSection: {
        ...margin(15, 0, 15, 0),
    },
    addressLabel: {
        ...MINNI_TEXT,
    },
    deliverySlotTitle: {
        ...MINNI_TEXT,
        color: BLACK,
        ...margin(0, 0, 5, 0),
    },
    deliverySlotValue: {
        ...MINNI_TEXT,
        paddingBottom: 100
    },
    orderStatus_1: {
        color: THIRD,
    },
    orderStatus_2: {
        color: THIRD,
    },
    orderStatus_2: {
        color: LINK_COLOR,
    },
    orderStatus_3: {
        color: LINK_COLOR,
    },
    orderStatus_4: {
        color: ALERT,
    },
    orderStatus_5: {
        color: THIRD,
    },
    orderStatus_6: {
        color: PRIMARY,
    },
    paymentStatus_true: {
        color: PRIMARY,
    },
    paymentStatus_false: {
        color: ALERT,
    },
})
