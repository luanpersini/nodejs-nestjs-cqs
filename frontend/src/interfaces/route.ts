//TODO remove "title" from this type, letting the own page to title itself
export type Route = {
  path: string
  title: string
  isProtected: boolean
  element: any
  customProps?: any
}
