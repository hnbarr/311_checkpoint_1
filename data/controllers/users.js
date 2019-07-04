const users = require('../index')

const listUsers = (req, res) => {
    // users.find({})
    res.json(users)
}

const showUser = (req, res) => {
    // users.findById({})
    const user = users.find(u => u.id == req.params.id)
    res.json(user)
}

const createUser = (req, res) => {
    // users.create({})
    const nextId = users.length + 1
    req.body.id = nextId
    users.push(req.body)
    res.json(users[nextId - 1])
}

const updateUser = (req, res) => {
    // users.updateOne({})
    const user = users.find(u=> u.id == req.params.id)
    Object.assign(user, req.body, {id: user.id})
    res.json(user)
}

const deleteUser = (req, res) => {
    // users.deleteOne({})
    const userIndex = users.indexOf(u=> u.id == req.params.id)
    users.splice(user, 1)
    res.json({
        deletedId: userIndex + 1 
    })
}

module.exports = {
    listUsers,
    showUser,
    createUser,
    updateUser,
    deleteUser
}