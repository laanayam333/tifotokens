import { ReactNode } from 'react'

interface IListProps {
  children: ReactNode
}

export default function List({ children }: IListProps): JSX.Element {
  return <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</ul>
}
