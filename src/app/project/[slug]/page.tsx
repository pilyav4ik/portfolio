import ProjectHero from "@/app/components/projectHero";
import ProjectInfoWeb from "@/app/components/projectInfoWeb";
import ProjectInfo from "@/app/components/projectInfo";
import prisma from "@/app/lib/db";
import AllProjectsLink from "@/app/components/allProjectsLink";
import NotFound from "@/app/not-found";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from 'next'
import AnimatedImage from "@/app/components/AnimatedImage";

export const revalidate = 360  // revalidate at most every day

export default async function Project({ params }: any) {
    const { slug } = params;

    const project:any = await prisma.project.findFirst({
        where: {
            slug: slug
        },
        include: {
            images: true
        }
    });

    if (!project) {
        return(<NotFound/>);
    }

    // Ensure title is a string
    const projectTitle = project.title || "Untitled";
    const projectLink = project.url;
    const projectMediaSwitcher = project.imageInHero;
    const projectMediaUrl = project.heroMediaUrl;
    const projectImages = project.images;

    return (
        <>
            <ProjectHero hero={projectTitle}
                projectRemoteUrl={projectLink}
                imageInHero={projectMediaSwitcher}
                heroMediaUrl={projectMediaUrl}
            />
            <ProjectInfo project={project} />
            <div className="grid grid-cols-1 gap-10 pt-44 md:grid-cols-2 px-10">
                {project.images.map((image: any, index: any) => (
                    <AnimatedImage key={image.id} src={image.url} alt={image.alt} />
                ))}
            </div>
            <AllProjectsLink />
        </>
    );
}
  
  export async function generateMetadata(
    { params }: any,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const { slug } = params;

    const project:any = await prisma.project.findFirst({
        where: {
            slug: slug
        }
    });
   
    return {
        title: project?.metatitle + " | SVIPLAB Development company",
        description: project?.metadesc || "Trust your project to our app development company.",
        
    }
  }