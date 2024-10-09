import prisma from "../../db/prismaInstance.js";

const departments = [
    {
      faculty_id: 1,
      name: "Computer Science",
    },
    {
      faculty_id: 2,
      name: "Mathematics",
    },
  ];

async function departmentSeeder() {
  console.log("Department Seeding Started...");
  for (const department of departments) {
    const createdDepartment = await prisma.department.create({
      data: {
        ...department,
      },
    });
  }
  console.log("Department Seeding Finished...");
}

export default departmentSeeder;
