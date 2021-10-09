import { ReactNode } from 'react'
import Header from '@/components/Navigation/Header'

type Props = {
  children?: ReactNode
}

export default function Layout({ children }: Props): JSX.Element {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
        {/* <div className="max-w-5xl mx-auto">{children}</div> */}
      </main>
    </div>
  )
}
