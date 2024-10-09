import prisma from "../../db/prismaInstance.js";

const courses = [
    {
      code: "CS101",
      semester_id: 1,
      program_id: 1,
      name: "Introduction to Computer Science",
      description: "Basic concepts of programming.",
      credits: 3,
      type: "General_Core",
    },
    {
      code: "MATH301",
      semester_id: 2,
      program_id: 1,
      name: "Advanced Mathematics",
      description: "Advanced calculus and linear algebra.",
      credits: 4,
      type: "Specific",
    },
  ];

async function courseSeeder() {
  console.log("Course Seeding Started...");
  for (const course of courses) {
    const createdCourse = await prisma.course.create({
      data: {
        ...course,
      },
    });
  }
  console.log("Course Seeding Finished...");
}

export default courseSeeder;
