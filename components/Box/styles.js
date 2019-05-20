import { css } from '@emotion/core'
// import colors from './colors'

const colors = {}

const isNumber = x => typeof x === 'number'
const parseUnit = margin => (isNumber(margin) ? `${margin}px` : margin)

export const dynamicMargin = ({
  mt, mr, mb, ml,
}) => css`
  margin-top: ${parseUnit(mt)};
  margin-right: ${parseUnit(mr)};
  margin-bottom: ${parseUnit(mb)};
  margin-left: ${parseUnit(ml)};
`

export const dynamicFlex = ({ flex, flexDirection, justifyContent }) => flex
  && css`
    display: flex;
    justify-content: ${justifyContent};
    flex-direction: ${flexDirection};
  `

export const dynamicGrid = ({
  grid, gap, gridFlow = 'column', columns = 0, rows = 0,
}) => grid
  && css`
    display: grid;
    grid-gap: ${parseUnit(gap)};
    grid-auto-flow: ${gridFlow};
    ${columns
      && `
      grid-template-columns: repeat(${columns}, 1fr);
    `};
    ${rows
      && `
      grid-template-rows: repeat(${rows}, 1fr);
    `};
  `

export const dynamicPadding = ({ padding }) => css`
  padding: ${parseUnit(padding)};
`

export const dynamicAlign = ({ textAlign }) => css`
  text-align: ${textAlign};
`

export const dynamicFontWeight = ({ fontWeight }) => css`
  font-weight: ${fontWeight};
`

const colorTypeMapper = {
  primary: colors.primary,
}
export const dynamicColorType = ({ colorType }) => css`
  color: ${colorTypeMapper[colorType]};
`
