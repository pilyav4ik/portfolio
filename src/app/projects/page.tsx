import { Header } from "../components/header";
import Projects from "./projects.client";
import prisma from "@/app/lib/db";

export const revalidate = 360  // revalidate at most every day

export default async function ProjectsServer() {
  const project = await prisma.project.findMany({
    include: {
      services: {
      }
    }
  });

  return (<>
    <Header />
    
   <Projects projects={project} />
  </>);
}
