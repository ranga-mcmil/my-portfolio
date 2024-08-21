"use server"

import { Project } from "@prisma/client";
import { db } from "../db";

export async function fetchPublishedProjects() : Promise<Project[]> {    
    try {
        const projects = await db.project.findMany({
            where: { 
                published: true,
                featured: false 
            },
        });
        return projects;
    } catch (error:any) {
        throw new Error(error)
    }
}

export async function fetchProjectBySlug(slug: string) : Promise<Project | null> {    
    try {
        const project = await db.project.findUnique({
            where: { slug },
        });
        return project;
    } catch (error:any) {
        throw new Error(error)
    }
}

export async function fetchFirstFeaturedProject() : Promise<Project | null> {    
    try {
        const project = await db.project.findFirst({
            where: { featured: true },
        });
        return project;
    } catch (error:any) {
        throw new Error(error)
    }
}

// export async function fetchSecondFeaturedProject() : Promise<Project | null> {    
//     try {
//         const secondFeaturedProject = await db.project.findMany({
//             where: { featured: true },
//             orderBy: { createdAt: 'asc' }, // Order by a specific field to ensure consistent results
//             skip: 1, // Skip the first record
//             take: 1, // Take the next record (i.e., the second one)
//           });
//           return secondFeaturedProject[0] || null; // Return the first item in the array or null if none
//     } catch (error:any) {
//         throw new Error(error)
//     }
// }


