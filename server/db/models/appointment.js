const { Model } = require("objection");

class Appointment extends Model {
  static get tableName() {
    return "appointment";
  }

  static get jsonSchema() {
    type: "object",

    properties: {
      date: { type: Date},
      doctorName: { type: 'string', minLength: 1, maxLength: 255},
      patientName: { type: 'string', minLength: 1, maxLength: 255},
      status: { type: 'string'}
    }
  }
}

module.exports = Appointment;
