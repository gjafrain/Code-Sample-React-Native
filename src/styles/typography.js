import { BLACK, BLACK_TEXT } from './colors';
import { scaleFont } from './mixins';

// FONT FAMILY
export const FONT_FAMILY_LIGHT = 'OpenSans-Light';
export const FONT_FAMILY_LIGHT_ITALIC = 'OpenSans-LightItalic';
export const FONT_FAMILY_REGULAR = 'OpenSans-Regular';
export const FONT_FAMILY_ITALIC = 'OpenSans-Italic';
export const FONT_FAMILY_SEMI_BOLD = 'OpenSans-SemiBold';
export const FONT_FAMILY_SEMI_BOLD_ITALIC = 'OpenSans-SemiBoldItalic';
export const FONT_FAMILY_BOLD = 'OpenSans-Bold';

// FONT WEIGHT
export const FONT_WEIGHT_LIGHT = '300';
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_SEMI_BOLD = '500';
export const FONT_WEIGHT_BOLD = '700';

// FONT SIZE
export const FONT_SIZE_24 = scaleFont(24);
export const FONT_SIZE_20 = scaleFont(20);
export const FONT_SIZE_18 = scaleFont(18);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);
export const FONT_SIZE_10 = scaleFont(10);
export const FONT_SIZE_8 = scaleFont(8);
export const FONT_SIZE_5 = scaleFont(5);
export const REGULAR_FONT_SIZE = {
    fontSize: scaleFont(16),
    lineHeight: scaleFont(20),
    letterSpacing: scaleFont(-.3)
}

// LINE HEIGHT
export const LINE_HEIGHT_26 = scaleFont(26);
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_22 = scaleFont(22);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_18 = scaleFont(18);
export const LINE_HEIGHT_16 = scaleFont(16);
export const LINE_HEIGHT_14 = scaleFont(14);
export const LINE_HEIGHT_12 = scaleFont(12);
export const LINE_HEIGHT_10 = scaleFont(10);
export const LINE_HEIGHT_8 = scaleFont(8);

// FONT STYLE
export const FONT_LIGHT = {
    fontFamily: FONT_FAMILY_LIGHT,
    fontWeight: FONT_WEIGHT_LIGHT,
};

export const FONT_LIGHT_ITALIC = {
    fontFamily: FONT_FAMILY_ITALIC,
    fontWeight: FONT_WEIGHT_LIGHT,
};

export const FONT_REGULAR = {
    fontFamily: FONT_FAMILY_REGULAR,
    fontWeight: FONT_WEIGHT_REGULAR,
    ...REGULAR_FONT_SIZE,
    color: BLACK_TEXT
};

export const FONT_ITALIC = {
    fontFamily: FONT_FAMILY_ITALIC,
    fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_SEMI_BOLD = {
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontWeight: FONT_WEIGHT_SEMI_BOLD,
};

export const FONT_BOLD = {
    fontFamily: FONT_FAMILY_BOLD,
    fontWeight: FONT_WEIGHT_BOLD,
};

export const HEADING = {
    ...FONT_REGULAR,
    fontSize: FONT_SIZE_18,
    lineHeight: LINE_HEIGHT_24,
    fontWeight: FONT_WEIGHT_SEMI_BOLD
}

export const SUB_HEADING = {
    ...FONT_REGULAR,
    fontSize: FONT_SIZE_16,
    lineHeight: LINE_HEIGHT_22,
    fontWeight: FONT_WEIGHT_SEMI_BOLD
}

export const SMALL_TEXT = {
    ...FONT_REGULAR,
    fontSize: FONT_SIZE_14,
    lineHeight: LINE_HEIGHT_18,
    // letterSpacing:.6
}

export const MINNI_TEXT = {
    ...FONT_REGULAR,
    fontSize: FONT_SIZE_12,
    lineHeight: LINE_HEIGHT_16,
}

export const EXTRA_SMALL_TEXT = {
    ...FONT_REGULAR,
    fontSize: FONT_SIZE_10,
    lineHeight: LINE_HEIGHT_14,
}