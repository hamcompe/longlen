import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { colors } from './colors'

export const Typo = ({ context, children, ...props }) => {
  const h1 = () => css`
    font-family: 'Source Serif Pro', serif;
    font-size: 3rem;
    color: ${colors.textPrimary};
    font-weight: 400;
    margin: 0;
  `
  const h2 = () => css`
    font-family: 'Source Serif Pro', serif;
    font-size: 1.5rem;
    color: ${colors.textSecondary};
    font-weight: 400;
  `
  const h3 = () => css`
    font-family: 'Source Serif Pro', serif;
    font-size: 1.375rem;
    color: ${colors.textPrimary};
    font-weight: 600;
  `
  const h5 = () => css`
    font-size: 1.125rem;
    font-weight: 600;
  `
  const h6 = () => css`
    font-size: 1.125rem;
    font-weight: 400;
    color: #a1a1a1;
  `

  const contextMap = {
    h1,
    h2,
    h3,
    h5,
    h6,
  }

  const Text = styled[context]`
    margin: 0;
    ${contextMap[context]}
  `
  return <Text {...props}>{children}</Text>
}
