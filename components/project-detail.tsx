import { notFound } from "next/navigation";
import Link from "next/link";
import { fetchProjectBySlug } from "@/lib/actions/projects.actions";

export const ProjectsDetail = async ({
    slug
}: { slug: string }) => {
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
        <article className="px-4 mx-auto prose prose-zinc prose-quoteless">
            <section>
                <h1 className="font-medium text-2xl mb-8 tracking-tighter text-neutral-400">{project.title}</h1>
                <div className="prose prose-neutral dark:prose-invert">
                    <p>
                        {project.long_description}
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
    );
};
