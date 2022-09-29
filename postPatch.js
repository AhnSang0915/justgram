const { posts } = require('./post')
const { users } = require('./user')

const editPost = (req, res) => {
    const { id, content } = req.body.data;

    const post = posts.find((post) => post.id === id);
    post.content = content;
    const user = users.find((user) => post.userId === user.id);
    const newPost = {
        postId : post.id,
        postTitle : post.title,
        postContent : post.content,
        userId : user.id,
        userName : user.name,
    }

    res.json({ data : newPost })
}

module.exports = { editPost }