import { Navigation } from "@/components/nav";
import { WorksList } from "@/components/works-list";
import { WorksListSkeleton } from "@/components/works-list-skeleton";
import { Suspense } from "react";


export default async function AboutPage() {

  return (
    <header className="relative isolate overflow-hidden bg-gradient-to-tl min-h-screen from-black via-zinc-900 to-black">
      <Navigation />

      <div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-32">
        <div className="text-zinc-500  min-h-screen">
          <div className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
            <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
              <article className="px-4 mx-auto prose prose-zinc prose-quoteless">
                <section>
                  <h1 className="font-medium text-2xl mb-8 tracking-tighter text-neutral-400">about me</h1>
                  <div className="prose prose-neutral dark:prose-invert">
                    <p>
                      i’ve spent a couple years mastering technologies like React, Next.js, and TypeScript to build web apps that are as fast as they are good-looking. My experience spans creating full-stack applications where I not only craft engaging user interfaces but also build robust backend systems
                    </p>

                    <Suspense fallback={<WorksListSkeleton />}>
                      <WorksList />
                    </Suspense>
                  </div>
                </section>
              </article>
            </main>
          </div>
        </div>
      </div>
    </header>
  );
}
