import { StyleSheet } from 'react-native';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../styles/mixins';

const styles = StyleSheet.create({
    overlay: {
        zIndex: 999999,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0)',
        height: WINDOW_HEIGHT + 100,
        width: WINDOW_WIDTH,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;