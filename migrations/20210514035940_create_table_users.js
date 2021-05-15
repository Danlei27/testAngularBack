
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table){
        table.increments('id').primary()
        table.string('name').notNull()
        table.datetime('date')
        table.string('address').notNull()
        table.string('cpf')
        table.string('telephone').notNull()
        table.string('email').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
