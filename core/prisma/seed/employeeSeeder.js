import prisma from "../../db/prismaInstance.js";

const employees = [
    {
      id: "EMP001",
      firstname: "John",
      lastname: "Doe",
      phone: "1234567890",
      address: "123 Main St",
      date_of_birth: new Date("1985-05-15"),
      gender: "Male",
      user_id: 1,
      dept_id: 1,
      position: "Professor",
      job_title: "Senior Lecturer",
      salary: 50000,
      bonus: 5000,
    },
    {
      id: "EMP002",
      firstname: "Jane",
      lastname: "Smith",
      phone: "0987654321",
      address: "456 Elm St",
      date_of_birth: new Date("1990-10-22"),
      gender: "Female",
      user_id: 2,
      dept_id: 2,
      position: "Administrator",
      job_title: "Admin Assistant",
      salary: 35000,
      bonus: 3000,
    },
  ];

async function employeeSeeder() {
  console.log("employee Seeding Started...");
  for (const employee of employees) {
    await prisma.employee.create({
      data: {
        ...employee,
      },
    });
  }
  console.log("employee Seeding Finished...");
}

export default employeeSeeder;
