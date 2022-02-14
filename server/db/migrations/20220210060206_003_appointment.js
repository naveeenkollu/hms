exports.up = function (knex) {
  return knex.schema.createTable("appointment", (table) => {
    table.increments("id").primary();
    table.date("date").notNullable();
    table.time("startTime").notNullable();
    table.time("endTime").notNullable();
    table.string("doctorName").notNullable();
    table.string("patientName").notNullable();
    table.string("status").notNullable();
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable("appointment");
};
