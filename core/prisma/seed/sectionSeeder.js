import prisma from "../../db/prismaInstance.js";

const sections = [
    {
      course_code: "CS101",
      name: "Section 1",
      room_id: 1,
      day: "Monday",
      start_time: new Date("2024-08-01T09:00:00"),
      end_time: new Date("2024-08-01T11:00:00"),
    },
    {
      course_code: "MATH301",
      name: "Section 2",
      room_id: 2,
      day: "Wednesday",
      start_time: new Date("2024-08-02T13:00:00"),
      end_time: new Date("2024-08-02T15:00:00"),
    },
  ];

async function sectionSeeder() {
  console.log("section Seeding Started...");
  for (const section of sections) {
    await prisma.section.create({
      data: {
        ...section,
      },
    });
  }
  console.log("section Seeding Finished...");
}

export default sectionSeeder;
