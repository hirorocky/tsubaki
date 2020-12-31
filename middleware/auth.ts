import { Middleware } from '@nuxt/types'
import { auth } from '../plugins/firebase'

const middleware: Middleware = ({ route, redirect }) => {
  auth.onAuthStateChanged((user) => {
    if (!user && route.name !== 'login') redirect('/login')
  })
}
export default middleware
