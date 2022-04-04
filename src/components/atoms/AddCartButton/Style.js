import { StyleSheet } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
// STYLES
import { FONT_REGULAR, REGULAR_FONT_SIZE, SMALL_TEXT } from '../../../styles/typography';
import { SECONDARY, THIRD } from '../../../styles/colors';
import { padding } from '../../../styles/mixins';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: moderateScale(5),
        borderWidth: 1.2,
        borderRadius: 10,
        borderColor: SECONDARY,
        height: scale(35),
        ...padding(0, 5, 0, 5)
    },
    imageBox: {
        ...padding(0, 10, 0, 6)
    },
    image: {
        height: scale(10),
        width: scale(10)
    },
    addCartTextBox: {
        ...padding(0, 6, 0, 0)
    },
    addCartText: {
        // ...FONT_REGULAR,
        ...SMALL_TEXT,
        color: SECONDARY,
    }
})