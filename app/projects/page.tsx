import Link from "next/link";
import { Card } from "@/components/card";
import { Navigation } from "@/components/nav";
import { Article } from "./_components/article";
import { fetchFirstFeaturedProject, fetchPublishedProjects } from "@/lib/actions/projects.actions";
import React from "react";

export default async function ProjectsPage() {
  const featured = await fetchFirstFeaturedProject()
  const allProjects = await fetchPublishedProjects();


  return (
    <div className="container flex items-center justify-center min-h-screen px-4 mx-auto relative pb-16">
      <Navigation />
      {/*       
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          {featured && (
            <Card>
              <Link href={`/projects/${featured?.slug}`} >
                <article className="relative w-full h-full p-4 md:p-8">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">
                      {featured?.createdAt ? (
                        <time dateTime={new Date(featured?.createdAt).toISOString()}>
                          {Intl.DateTimeFormat(undefined, {
                            dateStyle: "medium",
                          }).format(new Date(featured?.createdAt))}
                        </time>
                      ) : (
                        <span>in DEV</span>
                      )}
                    </div>
                  </div>

                  <h2
                    id="featured-post"
                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                  >
                    {featured?.title}
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    {featured?.short_description}
                  </p>
                  <div className="absolute bottom-4 md:bottom-8">
                    <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                      Read more <span aria-hidden="true">&rarr;</span>
                    </p>
                  </div>
                </article>
              </Link>
            </Card>
          )}

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {allProjects.slice(0, 2).map((project) => (
              <Card key={project.slug}>
                <Article project={project} />
              </Card>
            ))}
          </div>
        </div>

        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          {allProjects.slice(2).map(project => (
            <div key={project.slug} className="grid grid-cols-1 gap-4">
              <Card>
                <Article project={project} />
              </Card>
            </div>
          ))}
        </div>
      </div> */}


      <div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-32">
        <div className="text-zinc-500  min-h-screen">
          <div className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
            <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
              <article className="px-4 mx-auto prose prose-zinc prose-quoteless">
                <section>
                  <h1 className="font-medium text-2xl mb-8 tracking-tighter text-neutral-400">projects</h1>
                  <div className="prose prose-neutral dark:prose-invert">
                    <p>
                      Some of the projects are from work and some are on my own time.</p>

                    {featured && (
                      <React.Fragment key={featured.id}>
                        <hr className="my-6 border-neutral-800" />
                        <h2 className="font-medium text-xl mb-1 tracking-tighter text-neutral-400">{featured.title}</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                          {featured.technologies.map(technology => (<>{technology}, </>))}
                        </p>
                        <p>
                          {featured.short_description}
                        </p>

                        <p className="font-medium text-neutral-400 text-sm mt-5 ">
                          <Link href={`/projects/${featured.slug}`} className="mr-3">
                            View Project <span aria-hidden="true">&rarr;</span>
                          </Link>
                        </p>
                      </React.Fragment>
                    )}


                    {allProjects.map((project) => (
                      <React.Fragment key={project.id}>
                        <hr className="my-6 border-neutral-800" />
                        <h2 className="font-medium text-xl mb-1 tracking-tighter text-neutral-400">{project.title}</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                          {project.technologies.map(technology => (<>{technology}, </>))}
                        </p>
                        <p>
                          {project.short_description}
                        </p>

                        <p className="font-medium text-neutral-400 text-sm mt-5 ">
                          <Link href={`/projects/${project.slug}`} className="mr-3">
                            View Project <span aria-hidden="true">&rarr;</span>
                          </Link>
                        </p>
                      </React.Fragment>
                    ))}









                  </div>



                </section>

              </article>
            </main>
          </div>


        </div>
      </div>
    </div>
  );
}
