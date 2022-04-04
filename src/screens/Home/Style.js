import { StyleSheet } from 'react-native';
// STYLE
import { GRAY_LIGHT, PRIMARY, SECONDARY } from '../../styles/colors';
import { EXTRA_SMALL_TEXT, FONT_REGULAR, FONT_SIZE_12, FONT_SIZE_16, HEADING, REGULAR_FONT_SIZE } from '../../styles/typography';
import { boxShadow, margin, WINDOW_WIDTH,padding } from '../../styles/mixins';


const styles = StyleSheet.create({
    sliderLoadingContainer: {
        borderRadius: 15,
        ...margin(20, 0, 20, 0),
        flexDirection: 'row',
        alignSelf: 'center'
    },
    sliderLinearLoadingContainer: {
        height: 170,
        width: WINDOW_WIDTH - 50
    },
    categoryTitleLinearLoadingContainer: {
        height: REGULAR_FONT_SIZE.lineHeight,
    },
    sliderContainer: {
        height: 200,
        borderWidth: 0
    },
    carouselStyle: {
        paddingVertical: 10,
        height: 30,
    },
    slider: {},
    sliderImage: {
        borderRadius: 20,
        height: 180
    },
    categoryContainer: {
        flexDirection: 'row',
    },
    category: {
        flexDirection: 'column',
        marginRight: 10,
        alignItems: 'center',
        borderRadius: 15,
        marginBottom: 5,
    },
    categoryImageBox: {
        ...boxShadow(GRAY_LIGHT),
        borderWidth: .4,
        borderColor: GRAY_LIGHT,
        height: 120,
        width: 120,
        borderRadius: 15,
    },
    categoryImage: {
        height: '100%',
        width: '100%',
        borderRadius: 15,
    },
    categoryText: {
        ...FONT_REGULAR,
        fontSize: FONT_SIZE_12,
    },
    customSection: {
        borderTopWidth: 0
    },
    categoryTitle: {
        // ...HEADING,
        ...FONT_REGULAR,
        ...padding(0,0,0,10)
    },
    viewAllBtn: {
        ...EXTRA_SMALL_TEXT,
        color: SECONDARY
    },
    viewAllIcon: {
        tintColor: SECONDARY
    }
});

export default styles;