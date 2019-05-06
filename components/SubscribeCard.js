import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { dynamicMargin } from './dynamicStyles'

const colors = {
  textPrimary: '#1F2528',
  textSecondary: '#8EA2AF',
  textSuperLight: '#7D8E97',
  primary: '#35A4E9',
}

const Input = styled.input`
  background: rgba(0, 69, 112, 0.05);
  border: 0;
  border-radius: 8px;
  padding: 12px 20px;
  font-weight: 500;

  &::placeholder {
    color: ${colors.textSuperLight};
  }
`
const Button = styled.button`
  min-width: 160px;
  border: 1px solid ${colors.primary};
  background: ${colors.primary};
  border-radius: 8px;
  color: #fff;
  text-transform: uppercase;
  padding: 8px 16px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s all ease-in-out;

  &:hover {
    background: #2a81b7;
    border-color: #2a81b7;
  }

  &:active {
    transform: scale(0.97, 0.97);
  }
`
const Stack = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  grid-auto-columns: max-content;
  ${dynamicMargin};
`

const anchorStyle = ({ active }) => css`
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  width: fit-content;

  ${active
    && `
    &::after {
      content: '';
      display: block;
      min-height: 1px;
      margin-top: 4px;
      background: blue;
    }
  `}
`

const stateEnum = {
  tester: 'tester',
  lookingForUser: 'lookingForUser',
}
function SubscribeCard({
  router: {
    query: { role = stateEnum.tester },
  },
}) {
  return (
    <div css={css``}>
      <img
        src="/static/circle.svg"
        alt="background"
        css={css`
          user-select: none;
          position: absolute;
          z-index: -1;
          right: -300px;
          top: -300px;
        `}
      />
      <div
        css={css`
          background: #fff;
          border-radius: 8px;
          padding: 44px;
          box-shadow: 0 30px 50px -30px rgba(0, 0, 0, 0.3);
        `}
      >
        <Stack mb={24}>
          <Link href={{ query: { role: stateEnum.tester } }}>
            <a css={anchorStyle({ active: role === stateEnum.tester })}>I’m a tester</a>
          </Link>
          <Link href={{ query: { role: stateEnum.lookingForUser } }}>
            <a css={anchorStyle({ active: role === stateEnum.lookingForUser })}>
              I’m looking for user to test
            </a>
          </Link>
        </Stack>

        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              alert(`hello ${e.target.email.value}`)
            }}
          >
            <Stack>
              <Input placeholder="email" type="text" id="email" name="email" />
              <Button type="submit">subscribe</Button>
            </Stack>
          </form>
        </div>
      </div>
    </div>
  )
}

export default withRouter(SubscribeCard)
