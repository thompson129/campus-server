import prisma from "../../db/prismaInstance.js";

const faculties = [
    {
      name: "Faculty of Science",
    },
    {
      name: "Faculty of Arts",
    },
  ];

async function facultySeeder() {
  console.log("faculty Seeding Started...");
  for (const faculty of facultys) {
    await prisma.faculty.create({
      data: {
        ...faculty,
      },
    });
  }
  console.log("faculty Seeding Finished...");
}

export default facultySeeder;
