import prisma from "../../db/prismaInstance.js";
import advisorSeeder from "./advisorSeeder.js";
import batchSeeder from "./batchSeeder.js";
import courseSeeder from "./courseSeeder.js";
import departmentSeeder from "./departmentSeeder.js";
import employeeSeeder from "./employeeSeeder.js";
import enrollmentDetailSeeder from "./enrollmentDetailSeeder.js";
import facultySeeder from "./facultySeeder.js";
import gradeSeeder from "./gradeSeeder.js";
import invoiceSeeder from "./invoiceSeeder.js";
import programSeeder from "./programSeeder.js";
import roomSeeder from "./roomSeeder.js";
import sectionSeeder from "./sectionSeeder.js";
import studentSeeder from "./studentSeeder.js";
import userSeeder from "./userSeeder.js";


async function main() {
    try{
        // await advisorSeeder();
        // await batchSeeder();
        // await courseSeeder();
        // await departmentSeeder();
        // await employeeSeeder();
        // await enrollmentDetailSeeder();
        // await facultySeeder();
        await gradeSeeder();
        // await invoiceSeeder();
        // await programSeeder();
        // await roomSeeder();
        // await sectionSeeder();
        // await studentSeeder();
        await userSeeder();
    }catch (e){
        console.error(e);
        process.exit(1);
    }finally{
        await prisma.$disconnect();
    }
}

main();
