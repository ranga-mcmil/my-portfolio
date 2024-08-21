
export const ProjectDetailSkeleton = () => {
  return (
    <article className="px-4 mx-auto prose prose-zinc prose-quoteless animate-pulse w-full">
      <section>
        <div className="bg-neutral-800 h-8 w-3/4 rounded mb-8"></div>

        <div className="prose prose-neutral dark:prose-invert">
          <div className="bg-neutral-800 h-4 w-full rounded mb-4"></div>
          <div className="bg-neutral-800 h-4 w-5/6 rounded mb-4"></div>
          <div className="bg-neutral-800 h-4 w-3/4 rounded mb-4"></div>

          <hr className="my-6 border-neutral-800" />

          <div className="bg-neutral-800 h-4 w-1/4 rounded mb-2"></div>
          <div className="bg-neutral-800 h-4 w-1/4 rounded mb-2"></div>
        </div>
      </section>
    </article>
  );
};