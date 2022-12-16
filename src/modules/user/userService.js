let users = []

const getUserByEmail = (searchEmail) => users.find((object) => object.email === searchEmail)

export const signup = (data) => {
  if (getUserByEmail(data.email)) {
    throw new Error('existent_email')
  }
  users.push(data)
  return true
}