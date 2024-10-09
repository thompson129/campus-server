import prisma from "../../db/prismaInstance.js";

const students = [
    {
      id: "ST001",
      firstname: "Alice",
      lastname: "Brown",
      phone: "5551234567",
      address: "789 Oak St",
      date_of_birth: new Date("2000-02-15"),
      gender: "Female",
      user_id: 3,
      program_id: 1,
      gpax: 3.5,
    },
    {
      id: "ST002",
      firstname: "Bob",
      lastname: "Green",
      phone: "5557654321",
      address: "123 Pine St",
      date_of_birth: new Date("1999-07-30"),
      gender: "Male",
      user_id: 4,
      program_id: 2,
      gpax: 3.7,
    },
  ];

async function studentSeeder() {
  console.log("student Seeding Started...");
  for (const student of students) {
    await prisma.student.create({
      data: {
        ...student,
      },
    });
  }
  console.log("student Seeding Finished...");
}

export default studentSeeder;
