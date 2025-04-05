import Projects from "@/app/projects/projects.client";
import AllProjectsLink from "../allProjectsLink";
import prisma from "@/app/lib/db";
import { createClient } from "@/app/utils/supabase/server";


export const revalidate = 1  // revalidate at most every minute


export default async function ProjectsOnHome() {

  const supabase = await createClient();
  const { data: project } = await supabase.from("projects").select('*').order('id', { ascending: false })
  .limit(2);

  {/*
    const project = await prisma.project.findMany({
    take: 2,
    include: {
      services: {
      }
    }
  });
   */}

  return (<>
        <Projects projects={project || []} services={[]} />
        <AllProjectsLink/>
    </>);
}
