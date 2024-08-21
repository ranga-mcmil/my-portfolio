import { Project } from "@prisma/client";
import Link from "next/link";
import { Skeleton } from "./ui/Skeleton";

export const ProjectCardSkeleton = () => {

    return (
        // <div>
        //     <h2 className="font-medium text-xl mb-1 tracking-tighter text-neutral-400"></h2>
        //     <p className="text-neutral-600 dark:text-neutral-400 text-sm">
               
        //     </p>
        //     <p>
        //         {/* {project.short_description} */}
        //     </p>

        //     <p className="font-medium text-neutral-400 text-sm mt-5 ">
        //         {/* <Link href={`/projects/${project.slug}`} className="mr-3">
        //             View Project <span aria-hidden="true">&rarr;</span>
        //         </Link> */}
        //     </p>
        // </div>
        <Skeleton className="w-[100px] h-[20px] rounded-full" />

    );
};
