import { StyleSheet } from 'react-native';
import { verticalScale } from 'react-native-size-matters';
import { GRAY_MEDIUM, PRIMARY, SECONDARY, THIRD, WHITE } from '../../../styles/colors';
import { padding } from '../../../styles/mixins';
import { MINNI_TEXT, SMALL_TEXT } from '../../../styles/typography';

export default StyleSheet.create({
    disabeBtn: {
        backgroundColor: GRAY_MEDIUM,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: PRIMARY,
        borderRadius: 10,
        ...padding(0, 10, 0, 10),
        height: verticalScale(45),
    },
    btnText: {
        ...MINNI_TEXT,
        color: WHITE,
        textTransform: 'uppercase'
    },

    paddingLeft: {
        ...padding(0, 0, 0, 10),
    },
    paddingRight: {
        ...padding(0, 10, 0, 0),
    },
})
