import { WorksCardSkeleton } from "./works-card-skeleton";

export const WorksListSkeleton = async () => {
    return (
        <div>
            <WorksCardSkeleton />
            <WorksCardSkeleton />
            <WorksCardSkeleton />
            <WorksCardSkeleton />
            <WorksCardSkeleton />
        </div>        
    );
};
