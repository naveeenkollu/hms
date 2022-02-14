exports.up = function (knex) {
  return knex.schema.createTable("doctor", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.bigint("phone").notNullable();
    table.string("email").notNullable();
    table.string("department").notNullable();
    table.string("specialization").notNullable();
    table.time("startTime").notNullable();
    table.time("endTime").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("doctor");
};
