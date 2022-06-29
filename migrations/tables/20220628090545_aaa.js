/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('wishlist', function (table) {
        table.increments('id');
        table.string('product_id').notNullable();
        table.string('user_id').notNullable();
        table.date('created_at').notNullable();
    })
    .then(() =>
            knex("wishlist").insert([
                {product_id: "123acb", user_id: "1", created_at: new Date()},
                {product_id: "345acb", user_id: "1", created_at: new Date()},
                {product_id: "123acb", user_id: "2", created_at: new Date()},
                {product_id: "123acb", user_id: "2", created_at: new Date()},
            ])
        )
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
