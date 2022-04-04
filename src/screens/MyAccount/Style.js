import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
//
import { GRAY_LIGHT, GRAY_MEDIUM } from '../../styles/colors';
import { margin, padding } from '../../styles/mixins';
import { FONT_REGULAR } from '../../styles/typography';

export default StyleSheet.create({
    theHeaderContainer: {
        justifyContent: 'flex-start'
    },
    container: {
        flex: 1,
        ...margin(50, 40, 0, 40)
    },
    section: {
        borderBottomColor: GRAY_MEDIUM,
        borderBottomWidth: .5,
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...margin(25, 0, 25, 0)
    },
    navRightWidghit: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    navText: {
        ...padding(0, 0, 0, 30),
        ...FONT_REGULAR,
    },
    rightIcon: {
        alignSelf: 'center'
    },


    // ******** PROFILE STYLE

    theProfileContainer: {
        justifyContent: 'space-evenly'
    },
    theProfileHeaderContainer: {
        justifyContent: 'flex-start'
    },
    profileForm: {
        justifyContent: 'center',
        ...padding(0, 20, 0, 20)
    },
    inlineInputText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfInputText: {
        flex: .45
    },
    profileFooter: {
        ...padding(60, 20, 50, 20)
    },
    logoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        // backgroundColor:GRAY_LIGHT,
        // opacity:.5,
    },
    logoImageBox: {
        height: verticalScale(120),
        width: scale(140),
    },
    logoImage: {
        height: '100%',
        width: '100%',
    },
})
