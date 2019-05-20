import styled from '@emotion/styled'
import { css } from '@emotion/core'
import {
  Box, Stack, SiteWrapper, SiteContainer,
} from '../Box/Box'
import { Typo } from '../Typo'

const ActionContainer = styled(Box)`
  position: relative;
  ::before {
    content: '';
    position: absolute;
    left: -1rem;
    top: 10%;
    width: 4px;
    height: 80%;
    background: #0070ff;
  }
`

const LinkStyle = css`
  display: flex;
  width: fit-content;
  font-size: 1rem;
  color: #666;
  text-decoration: none;
`
function WhoYouAreSelectionSection() {
  return (
    <Box mt="auto">
      <ActionContainer mt={20} mb={40}>
        <Typo context="h5">Who you are?</Typo>
        <Typo context="h6">Let me help you find what you are looking for.</Typo>
      </ActionContainer>
      <Box grid gap={24}>
        <Box>
          <a css={LinkStyle} href="#ux-subscribe">
            <img
              src="static/arrow-down.svg"
              alt="arrow-down"
              css={css`
                margin-right: 20px;
              `}
            />
            <div>
              I’m a UX research
              <br />
              I’m looking for user
            </div>
          </a>
        </Box>
        <Box>
          <a css={LinkStyle} href="#user-subscribe">
            <img
              src="static/arrow-right.svg"
              alt="arrow-right"
              css={css`
                margin-right: 20px;
              `}
            />
            <div>
              I’m just a user <br /> I wanna do a test during my free-time.
            </div>
          </a>
        </Box>
      </Box>
    </Box>
  )
}

const HeroImage = styled.img`
  user-drag: none;
  user-select: none;
`

const HeroContent = () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      margin-top: 80px;
      margin-bottom: 64px;

      @media screen and (max-width: 960px) {
        margin-top: 40px;
        margin-top: 32px;
      }
    `}
  >
    <Typo context="h1">Find you right user</Typo>
    <Typo context="h2">
      To find user to test, it’ll no longer a big deal. No more pacnic where to find users, no more
      concern if users are not match.
    </Typo>
    <picture
      css={css`
        margin: 0 auto;
        @media screen and (min-width: 960px) {
          display: none;
        }
      `}
    >
      <HeroImage src="static/hero-img.png" alt="hero" width="100%" />
    </picture>
    <WhoYouAreSelectionSection />
  </div>
)

export function HeroSection() {
  return (
    <SiteContainer>
      <SiteWrapper>
        <Stack>
          <HeroContent />
          <picture
            css={css`
              max-width: 580px;
              width: 100%;
              margin-left: 30px;
              @media screen and (max-width: 960px) {
                display: none;
              }
            `}
          >
            <HeroImage src="static/hero-img.png" alt="hero" width="100%" />
          </picture>
        </Stack>
      </SiteWrapper>
    </SiteContainer>
  )
}
