const { Model } = require("objection");

class Doctor extends Model {
  static get tableName() {
    return "doctor";
  }

  static get jsonSchema() {
    return {
      type: "object",

      properties: {
        name: { type: "string", minLength: 1, maxLength: 255 },
        phone: { type: "bigint", minLength: 10, maxLength: 13 },
        email: { type: "string", minLength: 1, maxLength: 255 },
        department: { type: "string", minLength: 1, maxLength: 255 },
        specialization: { type: "string", minLength: 1, maxLength: 255 },
        startTime: { type: "time", minLength: 1, maxLength: 255 },
        endTime: { type: "time", minLength: 1, maxLength: 255 },
      },
    };
  }
}

module.exports = Doctor;
