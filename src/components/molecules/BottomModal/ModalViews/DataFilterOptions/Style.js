import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { GRAY_LIGHT, GRAY_MEDIUM, GRAY_TEXT, PRIMARY } from '../../../../../styles/colors';
import { margin, padding } from '../../../../../styles/mixins';
import { EXTRA_SMALL_TEXT, FONT_BOLD, FONT_REGULAR, HEADING, LINE_HEIGHT_20, MINNI_TEXT, SMALL_TEXT } from '../../../../../styles/typography';

export default StyleSheet.create({
    container: {
        ...padding(0, 15, 0, 15),
    },
    header: {
        height: verticalScale(40),
        flexDirection: 'row',
        borderBottomColor: GRAY_LIGHT,
        borderBottomWidth: .8,
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    headerText: {
        ...EXTRA_SMALL_TEXT,
        textTransform: 'uppercase'
    },
    crossIcon: {
        ...padding(5, 30, 0, 0),
    },
    heading: {
        ...HEADING,
    },
    body: {
        ...padding(10, 0, 10, 0)
    },
    section: {
        ...padding(10, 0, 10, 0)
    },
    title: {
        ...FONT_REGULAR
    },
    slider: {
        ...margin(5, 0, 5, 0),
        height: 20
    },
    sliderValue: {
        ...MINNI_TEXT,
        color: GRAY_TEXT
    },
    sliderValueBox: {
        ...MINNI_TEXT,
        // color: GRAY_TEXT,
        backgroundColor: GRAY_MEDIUM,
        ...padding(5, 8, 5, 8),
        borderRadius: 5
    }
})
