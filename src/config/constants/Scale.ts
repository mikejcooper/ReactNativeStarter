import { Dimensions, Platform } from 'react-native'
import { Header } from 'react-navigation-stack'

/*  
  This file contains the scaling function for resizing across multiple screens.
  Source: https://blog.solutotlv.com/size-matters/
*/

// Guideline sizes are based on standard ~5" screen mobile device
const { width: rawWidth, height: rawHeight } = Dimensions.get('window')

const width = Math.min(rawWidth, rawHeight)
const height = Math.max(rawWidth, rawHeight)

const guidelineBaseWidth = 350
const guidelineBaseHeight = 680
const headerHeight = null // Header.layout.height

// Scale based on width
const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size

// Scale based on height
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size

/*
  Enables control the resize factor (default is 0.5).
  If normal scale will increase your size by +2X, moderateScale will only increase it by +X.
  Or if the resize factor is 0.25, instead of increasing by +2X it will increase by +0.5X.
*/
const moderateScale = (size: number, factor: number = 0.5) => size + (horizontalScale(size) - size) * factor

// Scale for text based on moderateScale 0.4
const textScale = (size: number) => moderateScale(size, 0.4)

function getNavBarHeight() {
  if (Platform.OS == 'ios') {
    let d = Dimensions.get('window')
    const { height, width } = d

    if (height === 812 || width === 812) return 88
    // iPhone X navbar height (regular title);
    else return 64 // iPhone navbar height;
  } else return 54 //android portrait navbar height;
}

const ScreenHeight = verticalScale(680)
const ScreenWidth = horizontalScale(350)

const Scale = {
  hs: horizontalScale,
  vs: verticalScale,
  ms: moderateScale,
  ts: textScale,
  headerHeight,
  ScreenHeight,
  ScreenWidth,
}

export default Scale
