import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
// STYLE
import { padding, margin, WINDOW_WIDTH } from '../../../styles/mixins';
import { SECONDARY, GRAY_DARK, BLACK } from '../../../styles/colors';
import { FONT_REGULAR, SMALL_TEXT, FONT_SIZE_14, MINNI_TEXT, EXTRA_SMALL_TEXT, LINE_HEIGHT_12 } from '../../../styles/typography';

export default StyleSheet.create({

    skeletonLoadingContainer: {
        ...margin(5, 0, 5, 0),
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    loadingLinearContainer: {
        height: 130,
        width: WINDOW_WIDTH - 50,
    },
    container: {
        flexDirection: 'column',
        borderColor: SECONDARY,
        // minHeight: scale(130),
        ...margin(10, 5, 10, 5),
    },
    startingSpace: {
        ...margin(30, 5, 10, 5),
    },
    titleContainer: {
        // ...margin(5, 5, 5, 5)
    },
    textDivide: {
        paddingLeft: 2,
        paddingRight: 2,
        ...FONT_REGULAR,
        fontSize: FONT_SIZE_14
    },
    title: {
        // ...FONT_REGULAR,
        ...SMALL_TEXT,
        color: BLACK,
        ...padding(0, 0, 0, 3)
    },
    descreption: {
        ...EXTRA_SMALL_TEXT,
        color: GRAY_DARK,
        ...padding(0, 0, 0, 3),
        letterSpacing: .3,
        // lineHeight: LINE_HEIGHT_12,
    },
    productImageBox: {
        height: scale(80),
        width: scale(90),
        ...margin(5, 10, 0, 0),
    },
    productImage: {
        height: '100%',
        width: '100%',
        borderRadius: 10

    },
    qty: {
        ...padding(0, 0, 0, 10),
        // ...SMALL_TEXT,
        ...MINNI_TEXT,
        color: GRAY_DARK
    },
    cartImageBox: {
        // ...padding(10, 10, 10, 10)
    }
})