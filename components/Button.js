import styled from '@emotion/styled'

export const Button = styled.button`
  border: none;
  background: #fff;
  border: 2px solid #000;
  height: 100%;
  font-size: 1rem;
  padding: 0.25em 1em;
  height: 2.625em;
  cursor: pointer;
  transition: 0.3s color ease, 0.3s background-color ease, 0.3s transform ease;

  :hover {
    background-color: #000;
    color: #fff;
  }
  :active {
    transform: scale(0.95);
  }
`
