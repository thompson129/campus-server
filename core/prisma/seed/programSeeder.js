import prisma from "../../db/prismaInstance.js";

const programs = [
    {
      dept_id: 1,
      faculty_id: 1,
      name: "Bachelor of Science in Computer Science",
      price: 30000,
      degree_level: "Bachelor_Degree",
      duration: 4,
      prefix: "CS",
      no_of_course: 40,
    },
    {
      dept_id: 2,
      faculty_id: 2,
      name: "Bachelor of Arts in History",
      price: 25000,
      degree_level: "Bachelor_Degree",
      duration: 4,
      prefix: "HIS",
      no_of_course: 30,
    },
  ];

async function programSeeder() {
  console.log("program Seeding Started...");
  for (const program of programs) {
    await prisma.program.create({
      data: {
        ...program,
      },
    });
  }
  console.log("program Seeding Finished...");
}

export default programSeeder;
