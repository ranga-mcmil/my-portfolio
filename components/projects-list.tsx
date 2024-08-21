import { fetchFirstFeaturedProject, fetchPublishedProjects } from "@/lib/actions/projects.actions";
import { ProjectCard } from "./project-card";

export const ProjectsList = async () => {
    const featured = await fetchFirstFeaturedProject()
    const allProjects = await fetchPublishedProjects();

    return (
        <>
        {featured && (
            <ProjectCard key={featured.id} project={featured}/>
        )}
        
        {allProjects.map((project) => (
            <ProjectCard key={project.id}  project={project}/>
        ))}
        </>
    );
};
