import { Router } from 'express'

import { signup } from './userService' // we make it explict { signup } because there's no export default in the userService file

const router = Router()
router.post('/signup', (request, response) => {
  try {
    const answer = signup(request.body)
    response.send(answer)
  } catch (err) {
    if (err.message === 'existent_email') return response.status(400).send(err.message)
    
    response.status(500).send(err.message)
  }
})

router.post('/login', (request, response) => {
  response.send('LOGIN /')
})

export default router