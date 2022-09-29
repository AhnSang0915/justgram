const { posts } = require('./post')
const { users } = require('./user')


const sendPosts = (req, res) => {
    const postWithUserName = posts.map((post) => {
        const user = users.find((user) => post.userId === user.id)

        return {
            postId : post.id,
            postTitle : post.title,
            postContent : post.content,
            userId : user.id,
            userName : user.name,
        }
    })

    res.json({data : postWithUserName}) // response를 안넣어주면 서버에 응답을 봇보내준다 서버가 멈춘거같이 보임
};

module.exports = { sendPosts }