import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const MenuLine = styled.span`
  width: 24px;
  height: 2px;
  background: #333;
  margin: 4px 0;
  transition: 0.3s all ease-in-out;
`
const firstLineOpenStyle = ({ isOpen }) => isOpen
  && css`
    transform: translateY(5px) rotate(45deg);
  `
const secondLineOpenStyle = ({ isOpen }) => isOpen
  && css`
    transform: translateY(-5px) rotate(-45deg);
  `
const FirstLine = styled(MenuLine)`
  ${firstLineOpenStyle}
`
const SecondLine = styled(MenuLine)`
  ${secondLineOpenStyle}
`
const Button = styled.button`
  display: flex;
  flex-direction: column;
  transition: 0.3s all ease-in-out;
  background: none;
  border: none;
`

export function MenuButton() {
  const [isOpen, setOpen] = React.useState(false)

  const toggleOpen = () => setOpen(!isOpen)
  return (
    <Button type="button" onClick={toggleOpen} isOpen={isOpen}>
      <FirstLine isOpen={isOpen} />
      <SecondLine isOpen={isOpen} />
    </Button>
  )
}
