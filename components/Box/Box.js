import styled from '@emotion/styled'
import {
  dynamicMargin, dynamicFlex, dynamicGrid, dynamicPadding, dynamicAlign,
} from './styles'
import { containerPadding } from '../pattern'

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

export const SiteContainer = styled.div`
  padding: 0 ${containerPadding};
`
export const SiteWrapper = styled.div`
  max-width: ${containerSize}px;
  width: 100%;
  margin: 0 auto;
`
