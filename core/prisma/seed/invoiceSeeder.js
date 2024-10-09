import prisma from "../../db/prismaInstance.js";

const invoices = [
    {
      id: "INV001",
      user_id: 1,
      issued_by: "John Doe",
      issued_date: new Date("2024-01-15"),
      due_date: new Date("2024-02-15"),
      amount: 1500.00,
      title: "Tuition Fee",
      status: "Unpaid",
    },
    {
      id: "INV002",
      user_id: 2,
      issued_by: "Jane Smith",
      issued_date: new Date("2024-03-10"),
      due_date: new Date("2024-04-10"),
      amount: 2000.00,
      title: "Library Fee",
      status: "Paid",
    },
  ];

async function invoiceSeeder() {
  console.log("invoice Seeding Started...");
  for (const invoice of invoices) {
    await prisma.invoice.create({
      data: {
        ...invoice,
      },
    });
  }
  console.log("invoice Seeding Finished...");
}

export default invoiceSeeder;
