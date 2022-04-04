import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
// STYLES
import { SMALL_TEXT } from '../../../styles/typography';
import { GRAY_LIGHT, SECONDARY, THIRD } from '../../../styles/colors';
import { padding } from '../../../styles/mixins';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: moderateScale(5),
        height: verticalScale(35),
    },
    imageBox: {
        borderWidth: 1.2,
        borderRadius: 5,
        borderColor: SECONDARY,
        ...padding(6, 6, 6, 6)
    },
    image: {
       tintColor:SECONDARY
    },
    cartCount: {
        ...SMALL_TEXT,
        paddingHorizontal: moderateScale(8),
        color: SECONDARY,
    },
    loader: {
        paddingHorizontal: moderateScale(3.5),
    }
})