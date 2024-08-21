import { Navigation } from "@/components/nav";
import { fetchWorks } from "@/lib/actions/works.actions";
import { db } from "@/lib/db";


export default async function AboutPage() {
  const works = await fetchWorks()

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

                    {works.map(work => (
                      <div key={work.id}>
                        <hr className="my-6 border-neutral-800" />
                        <h2 className="font-medium text-xl mb-1 tracking-tighter text-neutral-400">{work.companyName}</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                          {work.jobTitle}, {work.yearStarted} — {work.yearEnded ? work.yearEnded : "present"}
                        </p>
                      </div>
                    ))}
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
