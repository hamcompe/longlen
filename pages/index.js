import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Box } from '../components/Box/Box'
import { Typo } from '../components/Typo'
import { Navbar } from '../components/Navbar/Navbar'
import { HeroSection } from '../components/HeroSection/HeroSection'
import { SubscribeSection } from '../components/SubscribeSection/SubscribeSection'

export default () => (
  <React.Fragment>
    <Navbar />
    <HeroSection />
    <SubscribeSection />
  </React.Fragment>
)
