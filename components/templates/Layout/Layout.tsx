import { ReactNode } from 'react'
import { Container } from '@nextui-org/react'

interface LayoutComponentProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutComponentProps) => {
  return (
    <Container
      fluid={true}
      responsive={true}
      display={'flex'}
      direction={'column'}
      justify={'flex-start'}
      alignItems={'flex-start'}
      gap={30}
      css={{
        backgroundColor: '$pink100',
        minHeight: '100vh'
      }}
    >
      <Container
        fluid={true}
        responsive={true}
        display={'flex'}
        direction={'column'}
        justify={'flex-start'}
        alignItems={'flex-start'}
        css={{
          backgroundColor: '$blue100',
          minHeight: '100vh'
        }}
      >
        {children}
      </Container>
    </Container>
  )
}

export default Layout
