import { ReactNode } from 'react'

export interface PageProps<T> {
  pageContent: T
  onSearch?: (searchQuery: string) => T[] | T
}

type PropsWithChildren<T> = PropsChilren & T

interface PropsChilren {
  children: ReactNode
}
