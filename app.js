const users = [
    {
        id : 1,
        name : 'SangHyun Ahn',
        email : 'ash4921@gamil.com',
        password : 'qwer1234'
    },
    {
        id : 2,
        name : 'Sang',
        email : 'ash41@gamil.com',
        password : 'qwer123456'
    },
    {
        id : 3,
        name : 'Ahn',
        email : 'shan@gamil.com',
        password : 'qwer123411'
    }
]
const posts = [
    {
        id: 1,
        title: "Node.js, server with express.",
        content: "서버를 익스프레스 프레임워크로 실행",
        userId: 1,
    },
    {
        id: 2,
        title: "Node.js.",
        content: "노드제이에스",
        userId: 2,
    },
    {
        id: 3,
        title: "express.",
        content: "익스프레스",
        userId: 3,
    },
]

const http = require('http')
const express = require('express')
const createUser = (req, res) => {
    const user = req.body.data
    console.log(user)

    users.push(
        {
            id : user.id,
            name : user.name,
            email : user.email,
            password : user.password,
        }
    )

    console.log('after', users)
    res.json({message:"userCreated"})
}

const createPost = (req, res) => {
    const post = req.body.data
    console.log(post)

    posts.push(
        {
            id : post.id,
            title : post.title,
            content : post.content,
            userId : post.userId
        }
    )

    console.log('after', posts)

    res.json({message:'postCreated'})
}

const app = express()
app.use(express.json())

app.post('/signup', createUser)
app.post('/post', createPost)

const server = http.createServer(app)

server.listen(8000, () => {
    console.log('run server')
})
