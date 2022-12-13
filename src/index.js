import * as express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('GET /')
})

app.post('/', (request, response) => {
  response.status(201).send('POST /')
})

app.put('/', (request, response) => {
  response.status(400).send('PUT /')
})

app.delete('/', (request, response) => {
  response.send('DELETE /')
})

app.patch('/', (request, response) => {
  response.send('PATCH /')
})

app.listen(3000, () => console.log('Online http://localhost:3000'))