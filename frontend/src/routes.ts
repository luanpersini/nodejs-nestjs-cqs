import navigationPath from './common/paths/navigationPath'
import { NotFound } from './components/general/not-found'
import { Route } from './interfaces/route'
import { Homepage } from './pages/homepage/Homepage'

//TODO implement unit test
const mainRoutes: Route[] = [
  {
    path: navigationPath.home,
    title: 'Lu Bank',
    element: Homepage,
    isProtected: false
  }  
]

const notFound: Route[] = [
  {
    path: navigationPath.notFound.item,
    title: 'Not Found',
    element: NotFound,
    isProtected: false
  },
  {
    path: navigationPath.notFound.all,
    title: 'Not Found',
    element: NotFound,
    isProtected: false
  }
]
const routes: Route[] = [
  ...mainRoutes,
  ...notFound
]

export default routes
