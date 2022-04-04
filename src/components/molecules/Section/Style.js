import { StyleSheet } from 'react-native';
// COLORS
import * as colors from '../../../styles/colors';
import { padding, margin } from '../../../styles/mixins'

const styles = StyleSheet.create({
    section: {
        borderBottomWidth: .4,
        borderTopWidth: .4,
        borderColor: colors.GRAY_LIGHT,
        ...padding(10, 0, 10, 0),
        ...margin(10, 0, 10, 0),
    }
})
export default styles;