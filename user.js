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

module.exports = { createUser, users}