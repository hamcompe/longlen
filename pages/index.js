import React from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import { keyframes, css } from '@emotion/core'

function Navbar() {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        min-height: 100px;
        background: #fff;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      `}
    >
      Logo
    </div>
  )
}

export default () => {
  return (
    <React.Fragment>
      <Navbar />
      hello
    </React.Fragment>
  )
}
