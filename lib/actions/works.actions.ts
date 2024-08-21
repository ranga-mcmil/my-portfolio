"use server"

import { WorkExperience } from "@prisma/client";
import { db } from "../db";

export async function fetchWorks() : Promise<WorkExperience[]> {    
    try {
        const works = await db.workExperience.findMany();
        return works;
    } catch (error:any) {
        throw new Error(error)
    }
}
