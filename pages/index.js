import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import {
  Box, Stack, SiteWrapper, SiteContainer,
} from '../components/Box/Box'
import { Typo } from '../components/Typo'
import { Navbar } from '../components/Navbar/Navbar'

const navbarHeight = 100

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
function HeroSection() {
  return (
    <SiteContainer>
      <SiteWrapper>
        <Stack
          css={css`
            height: calc(100vh - ${navbarHeight}px);
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

function SubscribeSection() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        padding: 60px 20px;
        background: #f8f8f8;
      `}
    >
      <Box flex flexDirection="column">
        <Typo
          context="h3"
          css={css`
            margin-bottom: 28px;
          `}
        >
          Sign up the waiting list, find out where to get your perfect match users.
        </Typo>
        <form
          onSubmit={e => e.preventDefault()}
          css={css`
            display: flex;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              margin-right: 1rem;
            `}
          >
            <input
              css={css`
                font-family: 'Source Serif Pro', serif;
                height: 2.625rem;
                padding: 0.25em 1em;
              `}
              placeholder="email"
              type="email"
            />
            <span>we won’t ever spam you</span>
          </div>
          <button
            css={css`
              font-family: 'Source Serif Pro', serif;
              border: none;
              background: #fff;
              border: 2px solid #000;
              height: 100%;
              font-size: 1rem;
              padding: 0.25em 1em;
              height: 2.625em;
            `}
            type="submit"
          >
            I’M IN
          </button>
        </form>
      </Box>
    </div>
  )
}

export default () => (
  <React.Fragment>
    <Navbar />
    <HeroSection />
    <SubscribeSection />
  </React.Fragment>
)
