import { fetchWorks } from "@/lib/actions/works.actions";
import { WorksCard } from "./works-card";

export const WorksList = async () => {
    const works = await fetchWorks()


    return (
        <div>
            {works.map(work => (
                <WorksCard work={work} key={work.id}/>
            ))}
        </div>

    );
};
