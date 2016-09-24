import React from "react-native";
import Dimensions from 'Dimensions';

// Precalculate Device Dimensions for better performance
const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

// Calculating ratio from iPhone breakpoints
const ratioX = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1 ;
const ratioY = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1 ;

// We set our base font size value
const base_unit = 14;

// We're simulating EM by changing font size according to Ratio
const unit = base_unit * ratioX;

// We add an em() shortcut function
function em(value) {
  return unit * value;
}

// Then we set our styles with the help of the em() function
export default Style = {
  // GENERAL
  DEVICE_WIDTH: x,
  DEVICE_HEIGHT: y,
  RATIO_X: ratioX,
  RATIO_Y: ratioY,
  UNIT: em(1),
  PADDING: em(1.25),

  // FORM
  FORM_MARGIN_X: em(3),

  // RADIO/CHECKBOX
  MARGIN_RIGHT: em(1.5),
  MARGIN_VERTICAL: em(0.80),

  // BUTTON
  BUTTON_PADDING: em(1),
  BUTTON_WIDTH: em(11.5),
  BUTTON_MARGIN_TOP: em(2),
  BUTTON_MARGIN_BOTTOM: em(4),
  BUTTON_FONT_SIZE: em(1.4),
  RISK_BUTTON_FONT_SIZE: em(1.5),

  // FONT
  FONT_SIZE: em(1),
  FONT_SIZE_SMALLER: em(0.75),
  FONT_SIZE_SMALL: em(0.875),
  FONT_SIZE_TITLE: em(1.25),
};
