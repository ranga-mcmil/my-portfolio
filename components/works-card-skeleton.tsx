
export const WorksCardSkeleton = () => {

    return (
        <div className="animate-pulse">
            <hr className="my-6 border-neutral-800" />
            {/* Company Name Skeleton */}
            <div className="bg-neutral-800 h-6 w-1/2 rounded mb-1"></div>
            {/* Job Title and Dates Skeleton */}
            <div className="bg-neutral-800 h-4 w-3/4 rounded"></div>
        </div>
    );
};
