let posts = []

export const createPost = (data, user) => {
  const post = {
    createdBy: user.email,
    ...data
  }

  posts.push(post)
  return post
}

export const getPosts = (id) => {
  if (id) {
    const post = posts[id]
    if (!post) throw new Error('non_existing_post')
  
    return post
  }
  return posts
}