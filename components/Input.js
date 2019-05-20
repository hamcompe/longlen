import styled from '@emotion/styled'

export const Input = styled.input`
  height: 2.625rem;
  padding: 0.25em 1em;

  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: 0.2s border-color ease;
  display: block;
  position: relative;
  width: 100%;

  :hover {
    border-color: rgba(0, 0, 0, 0.3);
  }
  :focus {
    outline: none;
    border-color: rgba(0, 0, 0, 0.8);
  }

  ::placeholder {
    color: #aaa;
  }
`
