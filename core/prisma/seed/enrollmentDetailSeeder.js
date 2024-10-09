import prisma from "../../db/prismaInstance.js";

const enrollmentDetails = [
    {
      head_id: 1,
      student_id: "ST001",
      section_id: 1,
      status: "Active",
      progress: 85.5,
    },
    {
      head_id: 2,
      student_id: "ST002",
      section_id: 2,
      status: "Complete",
      progress: 92.0,
    },
  ];

async function enrollmentDetailSeeder() {
  console.log("enrollmentDetail Seeding Started...");
  for (const enrollmentDetail of enrollmentDetails) {
    await prisma.enrollmentDetail.create({
      data: {
        ...enrollmentDetail,
      },
    });
  }
  console.log("enrollmentDetail Seeding Finished...");
}

export default enrollmentDetailSeeder;
