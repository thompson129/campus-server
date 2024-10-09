import prisma from "../../db/prismaInstance.js";

const advisors = [
    {
      emp_id: "EMP001",
      batch_id: 1,
      start_time: new Date("2022-08-01T08:00:00"),
      end_time: new Date("2023-08-01T08:00:00"),
    },
    {
      emp_id: "EMP002",
      batch_id: 2,
      start_time: new Date("2022-09-01T08:00:00"),
      end_time: new Date("2023-09-01T08:00:00"),
    },
  ];

async function advisorSeeder() {
  console.log("Advisor Seeding Started...");
  for (const advisor of advisors) {
    const createdAdvisor = await prisma.advisor.create({
      data: {
        ...advisor,
      },
    });
  }
  console.log("Advisor Seeding Finished...");
}

export default advisorSeeder;
