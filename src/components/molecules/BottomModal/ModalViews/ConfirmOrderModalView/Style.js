import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import { PRIMARY } from '../../../../../styles/colors';
import { margin, padding } from '../../../../../styles/mixins';
import { EXTRA_SMALL_TEXT, FONT_BOLD, HEADING, LINE_HEIGHT_20, MINNI_TEXT, SMALL_TEXT } from '../../../../../styles/typography';

export default StyleSheet.create({
    container: {
        ...padding(0, 10, 10, 10)
    },
    header: {
        alignItems: 'center',
        ...padding(0, 10, 10, 10)
    },
    headerText: {
        ...EXTRA_SMALL_TEXT,
        textTransform: 'uppercase'
    },
    orderPrice: {
        ...HEADING,
        ...FONT_BOLD
    },
    body: {
        alignItems: 'center'
    },
    confirmOrderText: {
        ...MINNI_TEXT,
        lineHeight: LINE_HEIGHT_20
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...margin(20, 10, 30, 10)
    },
    cancelButton: {
        textTransform: 'uppercase',
        ...SMALL_TEXT
    },
})
