let users = []

const getUserByEmail = (searchEmail) => users.find((object) => object.email === searchEmail)

export const signup = (data) => {
  if (getUserByEmail(data.email)) {
    console.log("this email already exists")
  } else {
    users.push(data)
  }
  return true
}