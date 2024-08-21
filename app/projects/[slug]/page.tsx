import { notFound } from "next/navigation";
import { Header } from "./_components/header";
import { fetchProjectBySlug } from "@/lib/actions/projects.actions";

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

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} />
    </div>
  );
}
