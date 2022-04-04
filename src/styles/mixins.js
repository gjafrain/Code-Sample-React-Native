import { Dimensions, PixelRatio } from 'react-native';
import { scale, moderateScale } from 'react-native-size-matters';
// COLORS
import { GRAY_MEDIUM } from './colors';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const guidelineBaseWidth = 375;

export const scaleSize = size => (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = size => scale(size)
// export const scaleFont = size => size * PixelRatio.getFontScale();

function dimensions(top, right = top, bottom = top, left = right, property) {
    let styles = {};
    styles[`${property}Top`] = moderateScale(top);
    styles[`${property}Right`] = moderateScale(right);
    styles[`${property}Bottom`] = moderateScale(bottom);
    styles[`${property}Left`] = moderateScale(left);
    return styles;
}

export function margin(top, right, bottom, left) {
    return dimensions(top, right, bottom, left, 'margin');
}

export function padding(top, right, bottom, left) {
    return dimensions(top, right, bottom, left, 'padding');
}

export function boxShadow(
    color = GRAY_MEDIUM,
    offset = { height: 1, width: 1 },
    radius = 8, opacity = 0.2
) {
    return {
        shadowColor: color,
        shadowOffset: offset,
        shadowOpacity: opacity,
        shadowRadius: radius,
        elevation: radius,
    };
}

export function wp(percentage) {
    const value = (percentage * WINDOW_WIDTH) / 100;
    return Math.round(value);
}

const slideWidth = wp(80);
const itemHorizontalMargin = wp(2);

export const sliderWidth = WINDOW_WIDTH;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

export {
    WINDOW_HEIGHT,WINDOW_WIDTH
}