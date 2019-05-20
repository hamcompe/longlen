import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { colors } from './pattern'

const SansTypeface = css`
  font-family: system-ui, /* macOS 10.11-10.12 */ -apple-system, /* Windows 6+ */ Segoe UI,
    /* Android 4+ */ Roboto, /* Ubuntu 10.10+ */ Ubuntu, /* Gnome 3+ */ Cantarell,
    /* KDE Plasma 5+ */ Noto Sans, /* fallback */ sans-serif, /* macOS emoji */ 'Apple Color Emoji',
    /* Windows emoji */ 'Segoe UI Emoji', /* Windows emoji */ 'Segoe UI Symbol',
    /* Linux emoji */ 'Noto Color Emoji';
`
const SerifTypeface = css`
  font-family: 'Source Serif Pro', serif;
`

const h1 = () => css`
  ${SerifTypeface};
  font-size: 3rem;
  line-height: 1.1;
  margin-bottom: 0.5em;
  color: ${colors.textPrimary};
  font-weight: 400;
`
const h2 = () => css`
  ${SerifTypeface};
  font-size: 1.5rem;
  line-height: 1.4;
  margin-bottom: 1.5em;
  color: ${colors.textSecondary};
  font-weight: 400;
`
const h3 = () => css`
  ${SerifTypeface};
  font-size: 1.375rem;
  color: ${colors.textPrimary};
  font-weight: 600;
`
const h5 = () => css`
  ${SansTypeface};
  font-size: 1.125rem;
  font-weight: 600;
`
const h6 = () => css`
  ${SansTypeface};
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

export const Typo = ({ context, children, ...props }) => {
  const Text = styled[context]`
    margin: 0;
    ${contextMap[context]}
  `
  return <Text {...props}>{children}</Text>
}
