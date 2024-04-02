import Link from "next/link";
import { Card } from "@/components/card";
import { Navigation } from "@/components/nav";
import { Github, Mail, Linkedin, Phone } from "lucide-react";

const socials = [
  {
    icon: <Mail size={20} />,
    href: "mailto:ranganaimukanhairi1@gmail.com",
    label: "Email",
    handle: "ranganaimukanhairi1@gmail.com",
  },
  {
    icon: <Phone size={20} />,
    href: "mailto:ranganaimukanhairi1@gmail.com",
    label: "Phone",
    handle: "+263 77 496 4536",
  },
  {
    icon: <Linkedin size={20} />,
    href: "mailto:ranganaimukanhairi1@gmail.com",
    label: "LinkedIn",
    handle: "ranganaimukanhairi1@gmail.com",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/ranga-mcmil",
    label: "Github",
    handle: "ranga-mcmil",
  },
];

export default async function ProjectsPage() {

  return (
    <div className="container flex items-center justify-center min-h-screen px-4 mx-auto relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Contact
          </h2>
          <p className="mt-4 text-zinc-400">Heres how you can reach me.</p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          {socials.map((s) => (
            <Card key={s.href}>
              <Link
                href={s.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group "
              >
					
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  {s.icon}
                </span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}

			<Link href={`/`} className="">
              <article className="relative w-full h-0 p-4 md:p-8">
                <p className="mt-4 opacity-0 h-1 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
				  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, debitis. Commodi repudiandae rerum aperiam nostrum facere nihil totam beatae velit.
                </p>
              </article>
            </Link>
            
        </div>

		<div className="hidden w-full h-px md:block bg-zinc-800" />
      </div>
    </div>
  );
}
