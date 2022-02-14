import { Knex } from "knex";

exports.seed = (knex: Knex) => seed(knex);

function seed(knex) {
  const doctorData = [
    {
      id: 1,
      name: "Dr. John Doe",
      phone: "0123456789",
      email: "johndoe@test.com",
      department: "Cardiology",
      specialization: "Heart",
      startTime: "09:00:00",
      endTime: "17:00:00",
    },
    {
      id: 2,
      name: "Dr. Jane Doe",
      phone: "0123477889",
      email: "janedoe@test.com",
      department: "Dermatology",
      specialization: "Skin",
      startTime: "09:00:00",
      endTime: "17:00:00",
    },
    {
      id: 3,
      name: "Dr. Nikhil",
      phone: "01326323287",
      email: "nikhildoc@test.com",
      department: "Neurology",
      specialization: "Brain",
      startTime: "09:00:00",
      endTime: "17:00:00",
    },
    {
      id: 4,
      name: "Dr. Satheesh",
      phone: "0125762572",
      email: "satheeshdoc@test.com",
      department: "Orthopedics",
      specialization: "Joints",
      startTime: "09:00:00",
      endTime: "14:00:00",
    },
    {
      id: 5,
      name: "Dr. Suresh",
      phone: "0123464374",
      email: "sureshdoc@test.com",
      specialization: "Opthalmology",
      department: "Opthalmology",
      startTime: "09:00:00",
      endTime: "17:00:00",
    },
    {
      id: 6,
      name: "Dr. Shiva Kishore",
      phone: "01234535373",
      email: "shivakishoredoc@test.com",
      department: "Orthopedics",
      specialization: "Joints",
      startTime: "09:00:00",
      endTime: "17:00:00",
    },
    {
      id: 7,
      name: "Dr. Sumanth",
      phone: "01234535373",
      email: "sumanthdoc@test.com",
      department: "Pathology",
      specialization: "Blood",
      startTime: "09:00:00",
      endTime: "17:00:00",
    },
    {
      id: 8,
      name: "Dr. Satish",
      phone: "01234535373",
      email: "satishdoc@test.com",
      department: "Cardiology",
      specialization: "Heart",
      startTime: "09:00:00",
      endTime: "17:00:00",
    },
    {
      id: 9,
      name: "Dr. Rajasekhar",
      phone: "01234535373",
      email: "rajasekhardoc@test.com",
      department: "Dermatology",
      specialization: "Skin",
      startTime: "09:00:00",
      endTime: "17:00:00",
    },
    {
      id: 10,
      name: "Dr. Rajnikanth",
      phone: "01234535373",
      email: "rajnikanthdoc@test.com",
      department: "Neurology",
      specialization: "Brain",
      startTime: "09:00:00",
      endTime: "17:00:00",
    },
  ];

  return knex("doctors")
    .del()
    .then(() => {
      return knex("doctors").insert(doctorData);
    });
}
