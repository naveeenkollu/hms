const { Model } = require("objection");

class Patient extends Model {
  static get tableName() {
    return "patient";
  }

  static get jsonSchema() {
    return {
      type: "object",

      properties: {
        name: { type: "string", minLength: 1, maxLength: 255 },
        phone: { type: "bigint", minLength: 10, maxLength: 13 },
        address: { type: "string", minLength: 1, maxLength: 255 },
        email: { type: "string", minLength: 1, maxLength: 255 },
        age: { type: "integer", minLength: 1, maxLength: 255 },
        occupation: { type: "string", minLength: 1, maxLength: 255 },
        gender: { type: "string"},
        maritial_status: { type: "string"},
        description: { type: "string", minLength: 1, maxLength: 255}
  }

module.exports = Patient;
