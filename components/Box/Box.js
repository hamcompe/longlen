import styled from '@emotion/styled'
import {
  dynamicMargin, dynamicFlex, dynamicGrid, dynamicPadding, dynamicAlign,
} from './styles'

export const Box = styled.div`
  ${dynamicMargin};
  ${dynamicFlex};
  ${dynamicGrid};
  ${dynamicPadding};
  ${dynamicAlign};
`
export const Stack = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;

  ${dynamicMargin};
  ${dynamicFlex};
  ${dynamicGrid};
  ${dynamicPadding};
`

const containerSize = 1200
const containerPadding = 20

export const SiteContainer = styled.div`
  padding: 0 ${containerPadding}px;
`
export const SiteWrapper = styled.div`
  max-width: ${containerSize}px;
  width: 100%;
  margin: 0 auto;
`
