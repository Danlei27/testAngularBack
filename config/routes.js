module.exports = app => {
    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.getUsers)

    app.route('/user/:id')
        .put(app.api.user.updateUser)
        .delete(app.api.user.remove)

}