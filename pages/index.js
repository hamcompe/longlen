import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import SubscribeCard from '../components/SubscribeCard'

const containerSize = 1200
const containerPadding = 20
const colors = {
  textPrimary: '#1F2528',
  textSecondary: '#8EA2AF',
  textSuperLight: '#7D8E97',
  primary: '#35A4E9',
}

function HeroSection() {
  return (
    <div
      css={css`
        padding: 0 ${containerPadding}px;
      `}
    >
      <div
        css={css`
          max-width: ${containerSize}px;
          width: 100%;
          margin: 0 auto;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            padding-top: 80px;
            flex-wrap: wrap;
          `}
        >
          <div
            css={css`
              max-width: 580px;
            `}
          >
            <h1
              css={css`
                font-family: 'Source Serif Pro', serif;
                font-size: 48px;
                color: ${colors.textPrimary};
                font-weight: 400;
                margin: 0;
              `}
            >
              Build confidently
            </h1>
            <h2
              css={css`
                font-family: 'Source Serif Pro', serif;
                font-size: 24px;
                color: ${colors.textSecondary};
                font-weight: 400;
              `}
            >
              We connect people to test product, so we can enjoy the right product.
            </h2>
          </div>
          <SubscribeCard />
        </div>
      </div>
    </div>
  )
}

function Navbar() {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        min-height: 100px;
        padding: 0 ${containerPadding}px;
      `}
    >
      <div
        css={css`
          display: flex;
          max-width: ${containerSize}px;
          width: 100%;
          margin: 0 auto;
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <img src="/static/longlen.svg" alt="longlen-logo" />
        </div>
        <div
          css={css`
            margin-left: auto;
          `}
        >
          <ul
            css={css`
              list-style-type: none;
              display: flex;
              align-items: center;
              li {
                margin-left: 10px;
              }
            `}
          >
            <li>
              <div
                css={css`
                  font-weight: 600;
                  padding: 4px 16px;
                  background: hsla(0, 0%, 5%, 0.1);
                  border-radius: 22px;
                  cursor: pointer;
                `}
              >
                contact
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default props => (
  <div css={css``}>
    <Navbar />
    <HeroSection {...props} />
  </div>
)
