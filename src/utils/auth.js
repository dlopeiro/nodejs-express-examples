import { sign, verify } from 'jsonwebtoken'

const AUTH_SECRET = 'secret'

export const generateAccessToken = (data) => sign(data, AUTH_SECRET)

export const verifyAccessToken = (request, response, next) => {
  try {
    const { authorization } = request.cookies
    if (!authorization) throw new Error('authorization_not_found') // if the constant created and passed on userController is non-existent, throw error

    const user = verify(authorization, AUTH_SECRET)
    request.user = user
    next()
  } catch (err) {
    response.status(401).send()
  }
}