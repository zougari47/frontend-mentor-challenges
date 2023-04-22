import type { ReactNode } from 'react'

export interface IDestination {
  name: string
  description: string
  avgDistance: string
  travelTime: string
  children?: ReactNode
  i?: string
}

export interface INavigationButtons {
  destinations: {
    name: string
    description: string
    avgDistance: string
    travelTime: string
  }[]
  currentDestination: string
  setCurrentDestination: (d: string) => void
}

export interface IStatistics {
  label: string
  value: string
}
