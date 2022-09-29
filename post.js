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

const user = require('./user')

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

module.exports = { createPost, posts}