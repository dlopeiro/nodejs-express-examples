import { Router } from 'express'

const router = Router()
router.post('/signup', (request, response) => {
  response.send('SIGNUP /')
})

router.post('/login', (request, response) => {
  response.send('LOGIN /')
})

export default router