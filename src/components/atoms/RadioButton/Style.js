import { StyleSheet } from 'react-native';
// 
import { GRAY_DARK, GRAY_LIGHT, GRAY_MEDIUM, PRIMARY, SECONDARY, THIRD, WHITE } from '../../../styles/colors';
import { padding } from '../../../styles/mixins';


export default StyleSheet.create({
    outer: {
        borderColor: PRIMARY,
        borderWidth: 2,
        height: 20,
        width: 20,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    outerTrue: {
        borderColor: PRIMARY,
    },
    outerFalse: {
        borderColor: GRAY_MEDIUM,
    },
    inner: {
        height: 10,
        width: 10,
        borderRadius: 50
    },
    true: {
        backgroundColor: PRIMARY,
    },
    false: {
        backgroundColor: GRAY_MEDIUM,
    }
})
