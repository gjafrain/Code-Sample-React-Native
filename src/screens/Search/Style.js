import { StyleSheet } from 'react-native';
import { verticalScale, scale } from 'react-native-size-matters';
import { BLACK, GRAY_MEDIUM, PRIMARY, SECONDARY, WHITE } from '../../styles/colors';
import { boxShadow, margin, padding, WINDOW_HEIGHT, WINDOW_WIDTH } from '../../styles/mixins';
import { FONT_REGULAR, FONT_SIZE_16, MINNI_TEXT, SMALL_TEXT } from '../../styles/typography';

export default StyleSheet.create({
    theContainer: {
        // ...padding(0, 10, 0, 10),
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    header: {
        height: verticalScale(50),
        backgroundColor: WHITE,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputSearchContainer: {
        ...padding(0, 10, 0, 10),
        height: verticalScale(35),
        borderColor: GRAY_MEDIUM,
        borderWidth: scale(.8),
        borderRadius: 10,

    },
    inputSearch: {
        ...margin(0, 0, 0, 0),
        ...padding(0, 10, 0, 0),
        height: '100%',
        width: WINDOW_WIDTH - scale(100),
        ...SMALL_TEXT,
        color: BLACK,
    },
    listContainer: {
        ...padding(0, 10, 0, 10)
    },
    basketIcon: {
        tintColor: PRIMARY
    },
    backIcon: {
        tintColor: PRIMARY
    },
    ///
    purifyContainer: {
        backgroundColor: WHITE,
        height: scale(40),
        flexDirection: 'row',
        alignItems: 'center',
        ...boxShadow(),
        borderTopColor: GRAY_MEDIUM,
        borderTopWidth: .4
    },
    purifySection: {
        ...padding(10),
        borderRightWidth: .5,
        borderRightColor: GRAY_MEDIUM,
        justifyContent: 'center',
        flexDirection: 'row',
        width: scale(120)
    },
    purifyLabel: {
        ...SMALL_TEXT,
    },
    activePurifierContainer: {
        backgroundColor: WHITE,
        height: scale(35),
        flexDirection: 'row',
        alignItems: 'center',
        ...boxShadow(),
        ...padding(0, 0, 0, 10),
        borderTopColor: GRAY_MEDIUM,
        borderTopWidth: .4
    },
    activePurifierSection: {
        height: scale(25),
        ...margin(0, 15, 0, 0),
        ...padding(0, 10, 0, 10),
        borderRadius: 20,
        borderWidth: 1,
        borderColor: SECONDARY,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    activePurifierLabel: {
        ...MINNI_TEXT,
        color: SECONDARY,
        ...padding(0, 15, 0, 0),
    },
    activePurifierCross: {
        ...FONT_REGULAR,
        color: SECONDARY,
        fontSize: FONT_SIZE_16
    },
    vCartContainer: {
        ...margin(15, 5, 0, 5),
    }
})
