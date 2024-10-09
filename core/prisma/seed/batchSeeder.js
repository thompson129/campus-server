import prisma from "../../db/prismaInstance.js";

const batches = [
    {
      batch_name: "Batch 2022",
      program_id: 1,
    },
    {
      batch_name: "Batch 2023",
      program_id: 2,
    },
  ];

async function batchSeeder() {
  console.log("Batch Seeding Started...");
  for (const batch of batches) {
    const createdBatch = await prisma.batch.create({
      data: {
        ...batch,
      },
    });
  }
  console.log("Batch Seeding Finished...");
}

export default batchSeeder;
