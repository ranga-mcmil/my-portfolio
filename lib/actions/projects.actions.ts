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