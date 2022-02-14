exports.up = function (knex) {
  return knex.schema.createTable("patient", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.bigint("phone").notNullable();
    table.string("address").notNullable();
    table.string("email").notNullable();
    table.integer("age").notNullable();
    table.string("occupation").notNullable();
    table.string("gender").notNullable();
    table.string("maritial_status").notNullable();
    table.string("description").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("patient");
};
