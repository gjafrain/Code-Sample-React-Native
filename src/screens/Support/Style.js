import { StyleSheet } from 'react-native';
import { GRAY_DARK, GRAY_LIGHT } from '../../styles/colors';
import { margin, WINDOW_HEIGHT, WINDOW_WIDTH, padding } from '../../styles/mixins';
import { FONT_SEMI_BOLD, SMALL_TEXT, MINNI_TEXT } from '../../styles/typography';

export default StyleSheet.create({

    header: {
        justifyContent: 'flex-start'
    },

    options: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: WINDOW_WIDTH,
        height: WINDOW_HEIGHT - 50
    },
    option: {
        width: WINDOW_WIDTH - 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        ...padding(20, 10, 20, 10),
        backgroundColor: GRAY_LIGHT,
        ...margin(0, 0, 40, 0),
        borderRadius: 10,
    },
    iconImage: {
        tintColor: GRAY_DARK,
    },
    optionTextWrapper: {
        ...padding(0, 0, 0, 10)
    },
    title: {
        ...SMALL_TEXT,
        ...FONT_SEMI_BOLD
    },
    subText: {
        ...MINNI_TEXT,
        color: GRAY_DARK,
        ...padding(8, 0, 0, 0)
    }
})
