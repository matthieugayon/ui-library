import React from 'react'
import { ColorItem, ColorPalette } from '@storybook/addon-docs/blocks'

import { color } from '../_utils/branding'

export default {
  title: 'Design Tokens/Color',
  component: ColorPalette,
}

export const swatches = () => (
  <ColorPalette>
    <ColorItem title="Blue" subtitle={color.blue} colors={[color.blue]} />
    <ColorItem title="DarkBlue" subtitle={color.darkBlue} colors={[color.darkBlue]} />
    <ColorItem title="Green" subtitle={color.green} colors={[color.green]} />
    <ColorItem title="Yellow" subtitle={color.yellow} colors={[color.yellow]} />
    <ColorItem title="Red" subtitle={color.red} colors={[color.red]} />
    <ColorItem title="LightRed" subtitle={color.lightRed} colors={[color.lightRed]} />
    <ColorItem
      title="MidnightGreen"
      subtitle={color.midnightGreen}
      colors={[color.midnightGreen]}
    />
    <ColorItem
      title="MidnightGreenDetail"
      subtitle={color.midnightGreenDetail}
      colors={[color.midnightGreenDetail]}
    />
    <ColorItem
      title="LightMidnightGreen"
      subtitle={color.lightMidnightGreen}
      colors={[color.lightMidnightGreen]}
    />
    <ColorItem title="Grey" subtitle={color.grey} colors={[color.grey]} />
    <ColorItem title="LightGrey" subtitle={color.lightGrey} colors={[color.lightGrey]} />
    <ColorItem title="White" subtitle={color.white} colors={[color.white]} />
  </ColorPalette>
)

// export const withPrimary = () => {
//   const primaries = [
//     color.primary,
//     color.link,
//     color.accent,
//     color.info,
//     color.inputCaret,
//     color.inputBorderFocus,
//   ]
//   return primaries.map(color => (
//     <ColorItem title={`theme.color.name`} subtitle={color} colors={[color]} />
//   ))
// }

// export const withGreyScale = () => {
//   const greys = [
//     color.white,
//     color.disabled,
//     color.divider,
//     color.lightBackground,
//     color.inputBorder,
//     color.inputBackground,
//     color.hover,
//     color.proximityDisabled,
//     color.secondaryActive,
//     color.fadedText,
//     color.border,
//     color.polylineSecondary,
//     color.polylinePrimary,
//     color.inputPlaceholder,
//     color.icon,
//     color.polylineStrokeSecondary,
//   ]

//   return greys.map(grey => <ColorItem title={`theme.color.grey`} subtitle={grey} colors={[grey]} />)
// }