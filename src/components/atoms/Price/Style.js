import { StyleSheet } from 'react-native';
// STYLE
import { GRAY_DARK, BLACK, GRAY_TEXT } from '../../../styles/colors';
import { padding } from '../../../styles/mixins';
import { FONT_REGULAR, LINE_HEIGHT_18, SMALL_TEXT, LINE_HEIGHT_10, LINE_HEIGHT_12, FONT_SIZE_12, LINE_HEIGHT_16, MINNI_TEXT, EXTRA_SMALL_TEXT, LINE_HEIGHT_14 } from '../../../styles/typography';

export default StyleSheet.create({
    priceBox: {
        flexDirection: "column",
        ...padding(0, 0, 0, 10)
    },
    newPrice: {
        ...SMALL_TEXT,
        color: BLACK,
    },
    newPriceSup: {
        ...EXTRA_SMALL_TEXT,
        color: BLACK,
    },
    marginToUp:{
        marginTop:-6,
    },
    oldPrice: {
        ...EXTRA_SMALL_TEXT,
        color: GRAY_TEXT,
        textDecorationLine: 'line-through'
    },
    oldPriceSup: {
        ...EXTRA_SMALL_TEXT,
        color: GRAY_TEXT,
        textDecorationLine: 'line-through'
    }
})