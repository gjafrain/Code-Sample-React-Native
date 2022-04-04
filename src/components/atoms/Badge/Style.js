import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters'
// STYLE
import { ALERT, WHITE } from '../../../styles/colors';
import { boxShadow } from '../../../styles/mixins';
import { EXTRA_SMALL_TEXT } from '../../../styles/typography';

const styles = StyleSheet.create({
    badge: {
        height: scale(18),
        width: scale(18),
        position: 'absolute',
        top: 3,
        right: 3,
        backgroundColor: ALERT,
        borderRadius: 50,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        ...boxShadow(WHITE,)
    },
    badgeCount: {
        ...EXTRA_SMALL_TEXT,
        color: WHITE,
    }
})
export default styles;