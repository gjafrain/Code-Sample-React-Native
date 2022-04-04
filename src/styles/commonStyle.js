import { StyleSheet } from 'react-native';
import { margin } from './mixins';

export default StyleSheet.create({
    fRow: {
        flexDirection: "row"
    },
    fColumn: {
        flexDirection: 'column'
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    contentCenter: {
        justifyContent: 'center'
    },
    alignCenter: {
        alignItems: 'center'
    },
    flex1: {
        flex: 1
    },
    textCaplital: {
        textTransform: 'uppercase'
    },
    flexWrap: {
        flexWrap: 'wrap'
    },
    flashMessageStyle: {
        borderRadius: 10,
        ...margin(10, 10, 0, 10)
    }
});