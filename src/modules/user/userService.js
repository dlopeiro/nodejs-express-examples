import { generateAccessToken } from "../../utils/auth"

let users = []

const getUserByEmail = (searchEmail) => users.find((object) => object.email === searchEmail)

export const signup = (data) => {
  if (getUserByEmail(data.email)) {
    throw new Error('existent_email')
  }
  users.push(data)
  return generateAccessToken({ email: data.email })
}

export const login = (data) => {
  const user = getUserByEmail(data.email)
  if (!user) throw new Error('email_not_found')
  if (user.password !== data.password) throw new Error('incorrect_password')

  return generateAccessToken({ email: data.email })
}