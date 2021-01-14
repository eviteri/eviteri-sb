export interface NavLink {
  id: number | string
  href: string
  label: string
}

export type NavigationLinks = Array<NavLink>
