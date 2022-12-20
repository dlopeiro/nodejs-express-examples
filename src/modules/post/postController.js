import { Router } from 'express'
import { verifyAccessToken} from '../../utils/auth' // importing the middleware to the Controller

const router = Router()
router.post('/', verifyAccessToken, (request, response) => { // middleware being passed as a parameter
  response.send('CREATE POST /')
})

router.get('/:id?', verifyAccessToken, (request, response) => { // the address '/post/:id?' (compare with '/post/:id') lets the route know the post id is optional
  // list all posts or a specific one
  response.send('GET POST /')
})

export default router