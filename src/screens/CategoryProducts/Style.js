import { StyleSheet } from 'react-native';
import { scale, } from 'react-native-size-matters';
// GLOBAL STYLE
import { BLACK, GRAY_DARK, GRAY_LIGHT, GRAY_MEDIUM, PRIMARY, SECONDARY, THIRD, WHITE } from '../../styles/colors';
import { padding, boxShadow, margin } from '../../styles/mixins'
import { FONT_REGULAR, FONT_SIZE_16, SMALL_TEXT } from '../../styles/typography';

export default StyleSheet.create({
    theContainer: {
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0
    },
    skeletonLoadingContainer: {
        ...margin(0, 5, 0, 5),
        borderRadius: 5
    },
    skeletonLinearLoadingContainer: {
        height: scale(50),
        width: 150,
    },
    lisViewContainer: {
        ...padding(0, 0, 0, 10)
    },
    categoriesContainer: {
        backgroundColor: WHITE,
        flexDirection: 'row'
    },
    categorySection: {
        height: scale(50),
        borderRightWidth: 1,
        borderRightColor: GRAY_LIGHT,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: GRAY_LIGHT,
        borderBottomWidth: 3,
    },
    activeCategory: {
        borderBottomColor: PRIMARY,
    },
    categoryLabel: {
        ...FONT_REGULAR,
        color: GRAY_DARK,
        fontSize: FONT_SIZE_16,
        ...padding(0, 15, 0, 15),
    },
    activeCategoryLabel: {
        color: BLACK,
        borderBottomColor: PRIMARY,
    },
    activePurifierLabel: {
        ...FONT_REGULAR,
        color: SECONDARY,
        ...padding(0, 15, 0, 0),
    },
    activePurifierCross: {
        ...FONT_REGULAR,
        color: SECONDARY,
        fontSize: FONT_SIZE_16
    },
    lisContainer: {
        ...padding(0, 10, 0, 10),
        flex: 1
    }
})