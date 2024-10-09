import prisma from "../../db/prismaInstance.js";

const grades = [
  {
    grade_letter: "A",
    grade_point: 4.0,
  },
  {
    grade_letter: "B+",
    grade_point: 3.5,
  },
  {
    grade_letter: "B",
    grade_point: 3,
  },
  {
    grade_letter: "C+",
    grade_point: 2.5,
  },
  {
    grade_letter: "C",
    grade_point: 2,
  },
  {
    grade_letter: "D+",
    grade_point: 1.5,
  },
  {
    grade_letter: "D",
    grade_point: 1,
  },
  {
    grade_letter: "F",
    grade_point: 0,
  },
  {
    grade_letter: "S",
    grade_point: 0,
  },
  {
    grade_letter: "U",
    grade_point: 0,
  },
  {
    grade_letter: "W",
    grade_point: 0,
  },
  {
    grade_letter: "Fa",
    grade_point: 0,
  },
];

async function gradeSeeder() {
  console.log("Grade Seeding Started...");
  for (const grade of grades) {
    const createdGrade = await prisma.grade.create({
      data: {
        ...grade,
      },
    });
  }
  console.log("Grade Seeding Finished...");
}

export default gradeSeeder;
