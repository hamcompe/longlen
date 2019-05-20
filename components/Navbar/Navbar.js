import { css } from '@emotion/core'
import { MenuButton } from './MenuButton'
import { containerPadding, navbarHeight } from '../pattern'

const containerSize = 1200

function NavbarMenu() {
  return (
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
        <li>
          <MenuButton />
        </li>
      </ul>
    </div>
  )
}

export function Navbar() {
  return (
    <nav
      css={css`
        display: flex;
        align-items: center;
        min-height: ${navbarHeight};
        padding: 0 ${containerPadding};
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
        {/* <NavbarMenu /> */}
      </div>
    </nav>
  )
}
