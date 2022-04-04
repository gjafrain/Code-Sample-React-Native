import { StyleSheet } from 'react-native';
import { verticalScale, scale } from 'react-native-size-matters';
// GLOBAL STYLE
import { padding } from '../../../../../styles/mixins';
import { FONT_REGULAR, FONT_SEMI_BOLD, FONT_SIZE_14, FONT_SIZE_16 } from '../../../../../styles/typography';
import { GRAY_LIGHT, PRIMARY, GRAY_DARK, GRAY_MEDIUM } from '../../../../../styles/colors';

export default StyleSheet.create({
    container: {
        ...padding(0, 15, 0, 15),
        height: verticalScale(220)
    },
    body: {
        // height: verticalScale(160),
        flex:1
    },
    footer: {
        height: verticalScale(50),
        flexDirection: 'row',
        borderTopColor: GRAY_LIGHT,
        borderTopWidth: .8,
        alignItems: 'center',
        justifyContent: 'flex-end',
        ...padding(0, 10, 0, 10),
    },
    navigationContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    navigationText: {
        ...FONT_REGULAR,
        fontSize: FONT_SIZE_14,
        textTransform: 'uppercase'
    },
    rightArrow: {
        height: scale(16),
        width: scale(22),
        backgroundColor: PRIMARY,
        ...padding(10, 0, 0, 0),
    },
    noDataFround: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    noDataFoundText: {
        ...FONT_SEMI_BOLD,
        color: GRAY_MEDIUM,
        fontSize:FONT_SIZE_16,
        textAlign:'center'
    }
})