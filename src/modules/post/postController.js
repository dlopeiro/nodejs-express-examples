import { Router } from 'express'

const router = Router()
router.post('/', (request, response) => {
  response.send('CREATE POST /')
})

router.get('/:id?', (request, response) => { // the address '/post/:id?' (compare with '/post/:id') lets the route know the post id is optional
  // list all posts or a specific one
  response.send('GET POST /')
})

export default router