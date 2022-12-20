import { Router } from 'express'
import { verifyAccessToken} from '../../utils/auth' // importing the middleware to the Controller

import { createPost } from './postService'
import { getPosts } from './postService'

const router = Router()
router.post('/', verifyAccessToken, (request, response) => { // middleware being passed as a parameter
  try {
    const post = createPost(request.body, request.user)
    response.status(200).send(post)
  } catch (err) {
    response.status(500).send(err.message)
  }
})

router.get('/:id?', verifyAccessToken, (request, response) => { // the address '/post/:id?' (compare with '/post/:id') lets the route know the post id is optional
  // list all posts or a specific one
  try{
    const posts = getPosts(request.params.id)
    response.status(200).send(posts)
  } catch (err) {
    if (err.message === "non_existing_post") return response.status(400).send(err.message)
    response.status(500).send(err.message)
  }
})

export default router