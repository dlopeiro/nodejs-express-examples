import { Router } from 'express'

import { signup } from './userService' // we make it explict { signup } because there's no export default in the userService file

const router = Router()
router.post('/signup', (request, response) => {
  const answer = signup(request.body)
  response.send(answer)
})

router.post('/login', (request, response) => {
  response.send('LOGIN /')
})

export default router