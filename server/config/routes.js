const path = require("path")

const users = require("./../controllers/users.js")
const questions = require("./../controllers/questions.js")

module.exports = (app) => {

    app.post("/login", users.login)
    app.get("/all_users", users.index)
    app.get("/logout", users.logout)
    app.get("/logged_user", users.logged_user)
    app.delete("/user/:id", users.deleteUser) // the delete route gets added

    app.get('/questions', questions.index)
    app.post('/question/add', questions.add)
    app.post("/user/:id", users.updateUser)

    app.get("*", (req, res) => {
		res.sendFile(path.resolve("./client/dist/index.html"))
    })
}