module.exports = app =>{
    const getUser = (req, res)=>{
        app.db('users')
            .where({id: req.body.id})	
            .then(user => {res.json(user).status(200)})
            .catch(err => res.status(400).json(err))    
    }
    const getUserParam = (req, res)=>{
        app.db('users')
            .where({id: req.params.id})	
            .then(user => {res.json(user).status(200)})
            .catch(err => res.status(400).json(err))    
    }

    const getUsers = (req, res)=>{
        app.db('users')
        .select("*")
        .then(users => {res.json(users).status(200)})
        .catch(err => res.status(400).json(err))
    }

    const save = (req, res) =>{
        app.db('users')
            .insert(req.body)
            .then(() => {res.json(req.body).status(200)})
            .catch(err => res.status(400).json(err))                        
    }

    const remove = (req, res ) => {
        app.db('users')       
            .where({ id: req.params.id})
            .del()
            .then(rowsDeleted =>{
                if (rowsDeleted > 0 ){
                    res.status(204).send()
                }else{
                    const msg = `Não foi encontrado o usuário com id ${req.params.id}`
                    res.status(400).send(msg)
                }
            })
            .catch(err => res.status(400).json(err))
    }
    const updateUser = (req, res)=>{
        app.db('users')
            .where({id: req.params.id})
            .update(req.body)
            .then(user => {res.status(204).send(`Usuário ${user.name} atualizado com sucesso!`)})
            .catch(err => res.status(400).json(err))
    }

    return{ save, remove, updateUser,getUsers, getUser, getUserParam }
}