import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
// STYLE
import { BLACK, GRAY_DARK, GRAY_LIGHT, GRAY_MEDIUM, GRAY_TEXT, PRIMARY, WHITE } from '../../../styles/colors';
import { EXTRA_SMALL_TEXT, FONT_BOLD, FONT_REGULAR, FONT_SIZE_18, FONT_SIZE_20, MINNI_TEXT, SMALL_TEXT } from '../../../styles/typography';
import { margin, padding, WINDOW_HEIGHT } from '../../../styles/mixins';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
        ...padding(0, 10, 10, 10),
        height: WINDOW_HEIGHT,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    scrollContainer: {
        flex: 1
    },
    header: {
        ...padding(0, 0, 20, 0),
        borderBottomWidth: .5,
        borderBottomColor: GRAY_MEDIUM,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    logoImageBox: {
        height: 120,
        width: 140,
    },
    logoImage: {
        height: '100%',
        width: '100%',
    },
    body: {
        ...padding(20, 10, 0, 10),
        flex: 1,
    },
    welcomeText: {
        ...FONT_REGULAR,
        fontSize: FONT_SIZE_18,
        color: GRAY_TEXT,
    },
    appName: {
        ...FONT_REGULAR,
        fontSize: FONT_SIZE_20,
        textTransform: 'uppercase',
        color: PRIMARY,
        ...FONT_BOLD,
        textShadowColor: PRIMARY,
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        letterSpacing: 2,
        ...margin(10, 0, 0, 50)
    },
    link: {
        flexDirection: 'row',
        ...padding(10, 0, 15, 0),
        alignItems: 'center',
    },
    languageOptionLink: {
        flexDirection: 'row',
        ...padding(10, 0, 15, 18),
        alignItems: 'center',
    },
    disableLink: {
        flexDirection: 'row',
        ...padding(10, 0, 15, 0),
        alignItems: 'center',
        opacity: .6
    },
    linkText: {
        ...SMALL_TEXT,
        color: GRAY_TEXT,
        ...padding(0, 0, 0, 15),
        // ...FONT_SEMI_BOLD,
    },
    languageOptionText:{
        ...SMALL_TEXT,
        color: GRAY_TEXT,
        ...padding(0, 10, 0, 20),
    },
    footer: {
        backgroundColor: WHITE,
        ...padding(10, 10, 0, 10),
        borderTopWidth: .5,
        borderTopColor: GRAY_MEDIUM,
    },
    changeLanguageWrapper: {

    },
    labelWrapper: {
        flexDirection: 'row',
        alignItems:'center',
        ...padding(20, 0, 10, 0),
    },
    changeLanguageLabelText:{
        ...EXTRA_SMALL_TEXT,
        color: BLACK,
        ...padding(0, 10, 0, 0),
        
    }
})