import prisma from "../../db/prismaInstance.js";

const rooms = [
    {
      floor_id: 1,
      name: "Room 101",
      capacity: 30,
      location: "First Floor",
    },
    {
      floor_id: 2,
      name: "Room 202",
      capacity: 50,
      location: "Second Floor",
    },
  ];

async function roomSeeder() {
  console.log("room Seeding Started...");
  for (const room of rooms) {
    await prisma.room.create({
      data: {
        ...room,
      },
    });
  }
  console.log("room Seeding Finished...");
}

export default roomSeeder;
