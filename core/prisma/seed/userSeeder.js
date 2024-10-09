import prisma from "../../db/prismaInstance.js";
import bcrypt from "bcrypt";

const users = [
  {
    campus_email: "admin@school.edu",
    personal_email: "admin@personal.com",
    password: "password12345",
    role: "Management",
    is_activated: false,
  },
  {
    campus_email: "thawzin@school.edu",
    personal_email: "thawzin@personal.com",
    password: "password12345",
    role: "Student",
    is_activated: false,
  },
  {
    campus_email: "philix@school.edu",
    personal_email: "philix@personal.com",
    password: "password12345",
    role: "Student",
    is_activated: false,
  },
  {
    campus_email: "emma@school.edu",
    personal_email: "emma@personal.com",
    password: "password12345",
    role: "Student",
    is_activated: false,
  },
];

async function userSeeder() {
  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const createdUser = await prisma.user.create({
      data: {
        ...user,
        password: hashedPassword,
      },
    });
    console.log(`Created user with id: ${createdUser.id}`);
  }
}

export default userSeeder;
