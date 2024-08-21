import { notFound } from "next/navigation";
import { ArrowLeft, Eye, Github, Instagram, Phone, Twitter } from "lucide-react";

import { fetchProjectBySlug } from "@/lib/actions/projects.actions";
import Link from "next/link";
import { Navigation } from "@/components/nav";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const project = await fetchProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const links: { label: string; href: string }[] = [];

  if (project.repository) {
    links.push({
      label: "GitHub",
      href: project.repository,
    });
  }

  if (project.url) {
    links.push({
      label: "Website",
      href: project.url,
    });
  }

  return (
    <div className="bg-zinc-50 min-h-screen">
      <header
        className="relative isolate overflow-hidden bg-gradient-to-tl min-h-screen from-black via-zinc-900 to-black"
      >

        <Navigation />

        {/* <div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
                {project.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                {project.long_description}
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                {links.map((link) => (
                  <Link target="_blank" key={link.label} href={link.href}>
                    {link.label} <span aria-hidden="true">&rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        <div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-32">
          <div className="text-zinc-500  min-h-screen">
            <div className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
              <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
                <article className="px-4 mx-auto prose prose-zinc prose-quoteless">
                  <section>
                    <h1 className="font-medium text-2xl mb-8 tracking-tighter text-neutral-400">{project.title}</h1>
                    <div className="prose prose-neutral dark:prose-invert">
                      <p>
                        i’ve spent a couple years mastering technologies like React, Next.js, and TypeScript to build web apps that are as fast as they are good-looking. My experience spans creating full-stack applications where I not only craft engaging user interfaces but also build robust backend systems
                      </p>

                      <hr className="my-6 border-neutral-800" />
                      {/* <h2 className="font-medium text-xl mb-1 tracking-tighter">Tano Digital Solutions</h2> */}
                      <p className="font-medium text-neutral-400 text-sm">
                      {links.map((link) => (
                        <Link target="_blank" key={link.label} href={link.href} className="mr-3">
                          {link.label} <span aria-hidden="true">&rarr;</span>
                        </Link>
                      ))}
                      </p>
                      
                    </div>



                  </section>

                </article>
              </main>
            </div>


          </div>
        </div>

      </header>
    </div>
  );
}
