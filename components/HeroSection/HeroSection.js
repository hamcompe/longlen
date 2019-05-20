import styled from '@emotion/styled'
import { css } from '@emotion/core'
import {
  Box, Stack, SiteWrapper, SiteContainer,
} from '../Box/Box'
import { Typo } from '../Typo'
import { navbarHeight } from '../pattern'

const ActionContainer = styled(Box)`
  position: relative;
  ::before {
    content: '';
    position: absolute;
    left: -1rem;
    top: 10%;
    width: 4px;
    height: 80%;
    background: blue;
  }
`

function WhoYouAreSelectionSection() {
  return (
    <Box mt="auto">
      <ActionContainer mb={40}>
        <Typo context="h5">Who you are?</Typo>
        <Typo context="h6">Let me help you find what you are looking for.</Typo>
      </ActionContainer>
      <Box grid gap={24}>
        <a href="">I’m UX</a>
        <a href="">I’m just a user</a>
      </Box>
    </Box>
  )
}

const HeroContent = () => (
  <Box
    flex
    flexDirection="column"
    mt={80}
    mb={64}
    css={css`
      max-width: 580px;
    `}
  >
    <Typo context="h1">Find you right user</Typo>
    <Typo context="h2">
      To find user to test, it’ll no longer a big deal. No more pacnic where to find users, no more
      concern if users are not match.
    </Typo>
    <WhoYouAreSelectionSection />
  </Box>
)

export function HeroSection() {
  return (
    <SiteContainer>
      <SiteWrapper>
        <Stack
          css={css`
            height: calc(100vh - ${navbarHeight});
            max-height: 640px;
          `}
        >
          <HeroContent />
          <picture
            css={css`
              margin-left: 20px;
            `}
          >
            <img src="static/hero-img.png" alt="hero" width="100%" />
          </picture>
        </Stack>
      </SiteWrapper>
    </SiteContainer>
  )
}
