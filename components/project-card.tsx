import { Project } from "@prisma/client";
import Link from "next/link";

export const ProjectCard = ({
    project
}: {
    project: Project
}) => {

    return (
        <div>
            <hr className="my-6 border-neutral-800" />
            <h2 className="font-medium text-xl mb-1 tracking-tighter text-neutral-400">{project.title}</h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {project.technologies.map(technology => (
                    <span key={technology}>{technology}, </span>
                ))}
            </p>
            <p>
                {project.short_description}
            </p>

            <p className="font-medium text-neutral-400 text-sm mt-5 ">
                <Link href={`/projects/${project.slug}`} className="mr-3">
                    View Project <span aria-hidden="true">&rarr;</span>
                </Link>
            </p>
        </div>
    );
};
