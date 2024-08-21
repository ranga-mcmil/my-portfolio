
export const ProjectCardSkeleton = () => {

    return (
        <div className="animate-pulse">
            <hr className="my-6 border-neutral-800" />
            <h2 className="font-medium text-xl mb-1 tracking-tighter  bg-neutral-800 h-6 w-1/3 " />
            <p className="text-neutral-600 text-neutral-400 text-sm bg-neutral-800 h-4 w-1/2 my-2" />
            <p className="bg-neutral-800 h-4 w-full my-2" />
        </div>
    );
};
