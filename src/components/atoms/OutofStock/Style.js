import { StyleSheet } from 'react-native';
import { verticalScale } from 'react-native-size-matters';
// STYLE
import { GRAY_MEDIUM } from '../../../styles/colors';
import { padding } from '../../../styles/mixins';
import { MINNI_TEXT } from '../../../styles/typography';

export default StyleSheet.create({
    outStockBtn: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 5,
        borderWidth: 1.2,
        borderColor: GRAY_MEDIUM,
        borderRadius: 5,
        height: verticalScale(35),
        ...padding(0, 5, 0, 5),
    },
    outStockBtnText: {
        ...MINNI_TEXT,
        color: GRAY_MEDIUM,
    }
})
