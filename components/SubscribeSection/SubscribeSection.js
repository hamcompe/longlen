import { css } from '@emotion/core'
import { Box } from '../Box/Box'
import { Typo } from '../Typo'
import { containerPadding } from '../pattern'
import { Button } from '../Button'
import { Input } from '../Input'

export function SubscribeSection({ id }) {
  return (
    <section
      id={id}
      css={css`
        display: flex;
        justify-content: center;
        padding: 60px ${containerPadding};
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
            <Input placeholder="email" type="email" />
            <span>we won’t ever spam you</span>
          </div>
          <Button type="submit">JOIN WAITING LIST</Button>
        </form>
      </Box>
    </section>
  )
}
