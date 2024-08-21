
import { Navigation } from "@/components/nav";
import { ProjectsDetail } from "@/components/project-detail";
import { ProjectDetailSkeleton } from "@/components/project-detail-skeleton";
import { Suspense } from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;

  return (
    <div className="bg-zinc-50 min-h-screen">
      <header
        className="relative isolate overflow-hidden bg-gradient-to-tl min-h-screen from-black via-zinc-900 to-black"
      >

        <Navigation />

        <div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-32">
          <div className="text-zinc-500  min-h-screen">
            <div className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
              <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
                <Suspense fallback={<ProjectDetailSkeleton />}>
                  <ProjectsDetail slug={slug} />
                </Suspense>
              </main>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
