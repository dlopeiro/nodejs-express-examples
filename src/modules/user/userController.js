import { Router } from 'express'

import { signup, login } from './userService' // we make it explict { signup } because there's no export default in the userService file

const AUTH_COOKIE_NAME = 'authorization'

const router = Router()
router.post('/signup', (request, response) => {
  try {
    const token = signup(request.body)
    response.cookie(AUTH_COOKIE_NAME, token).status(201).send()
  } catch (err) {
    if (err.message === 'existent_email') return response.status(400).send(err.message)
    
    response.status(500).send(err.message)
  }
})

router.post('/login', (request, response) => {
  try{
    const token = login(request.body)
    response.cookie(AUTH_COOKIE_NAME, token).status(200).send()
  } catch (err) {
    if (err.message === 'email_not_found' || err.message === 'incorrect_password')
      return response.status(400).send(err.message)
    
    response.status(500).send()
  }
})

export default router