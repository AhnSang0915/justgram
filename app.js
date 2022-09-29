const http = require('http')

const express = require('express')

const { createUser } = require('./user')
const { createPost } = require('./post')
const { sendPosts } = require('./posts')
const { editPost } = require('./postPatch')

const app = express()
app.use(express.json())

app.post('/signup', createUser)
app.post('/post', createPost)
app.get('/posts', sendPosts)
app.patch('/post', editPost)

const server = http.createServer(app)

server.listen(8000, () => {
    console.log('run server')
})
