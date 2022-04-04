import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters'
// STYLE
import { ALERT, BLACK, PRIMARY, SECONDARY, THIRD, WHITE } from '../../../styles/colors';
import { boxShadow, padding } from '../../../styles/mixins';
import { EXTRA_SMALL_TEXT, FONT_REGULAR, FONT_SEMI_BOLD, MINNI_TEXT, SMALL_TEXT } from '../../../styles/typography';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: verticalScale(50),
        backgroundColor: PRIMARY,
        justifyContent: 'space-between',
        // borderBottomRightRadius:20
    },
    title: {
        ...FONT_REGULAR,
        color: WHITE,
        textTransform: 'uppercase'
    },
    badge: {
        height: scale(14),
        width: scale(14),
        position: 'absolute',
        top: 3,
        right: 3,
        backgroundColor: ALERT,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        ...boxShadow()
    },
    badgeCount: {
        ...EXTRA_SMALL_TEXT,
        color: WHITE,
    },
    addAddress: {
        flexDirection: 'row',
        ...padding(5, 10, 0, 0),
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    deleteAddress: {
        flexDirection: 'row',
        ...padding(0, 10, 0, 0),
        justifyContent: 'flex-end',
        alignItems: 'center',
        // alignSelf:'flex-end',
        flex:1,
    },
    addAddressText: {
        ...MINNI_TEXT,
        textTransform: 'uppercase',
        color:SECONDARY
    },
    addIcon: {
        tintColor: BLACK
    },
})
export default styles;