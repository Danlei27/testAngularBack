module.exports = app => {
    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.getUsers)

    app.route('/user/:id')
        .get(app.api.user.getUserParam)
        .put(app.api.user.updateUser)
        .delete(app.api.user.remove)
    app.route('/user')
        .get(app.api.user.getUser)
}