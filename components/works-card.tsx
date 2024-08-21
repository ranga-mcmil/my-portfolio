import { WorkExperience } from "@prisma/client";

export const WorksCard = ({
    work
}: {work : WorkExperience}) => {

    return (
        <div key={work.id}>
            <hr className="my-6 border-neutral-800" />
            <h2 className="font-medium text-xl mb-1 tracking-tighter text-neutral-400">{work.companyName}</h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {work.jobTitle}, {work.yearStarted} — {work.yearEnded ? work.yearEnded : "present"}
            </p>
        </div>
    );
};
