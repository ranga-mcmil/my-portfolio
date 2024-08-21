import Link from "next/link";
import { Navigation } from "@/components/nav";
import { fetchFirstFeaturedProject, fetchPublishedProjects } from "@/lib/actions/projects.actions";
import React from "react";
import { ProjectCard } from "@/components/project-card";
import { ProjectCardSkeleton } from "@/components/project-card-skeleton";

export default async function ProjectsPage() {
  const featured = await fetchFirstFeaturedProject()
  const allProjects = await fetchPublishedProjects();

  return (
    <div className="container flex items-center justify-center min-h-screen px-4 mx-auto relative pb-16">
      <Navigation />
      
      <div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-32">
        <div className="text-zinc-500  min-h-screen">
          <div className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
            <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
              <article className="px-4 mx-auto prose prose-zinc prose-quoteless">
                <section>
                  <h1 className="font-medium text-2xl mb-8 tracking-tighter text-neutral-400">projects</h1>
                  <div className="prose prose-neutral dark:prose-invert">
                    <p>Some of the projects are from work and some are on my own time.</p>

                    {featured && (
                      <ProjectCard key={featured.id} project={featured}/>
                    )}
                    <ProjectCardSkeleton />

                    {allProjects.map((project) => (
                      <ProjectCard key={project.id}  project={project}/>
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
