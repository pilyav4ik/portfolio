import ProjectHero from "@/app/components/projectHero";
import ProjectInfoWeb from "@/app/components/projectInfoWeb";
import ProjectInfo from "@/app/components/projectInfo";
import prisma from "@/app/lib/db";
import AllProjectsLink from "@/app/components/allProjectsLink";
import NotFound from "@/app/not-found";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from 'next'
import AnimatedImage from "@/app/components/AnimatedImage";
import { createClient } from "@/app/utils/supabase/server";

export const revalidate = 360  // revalidate at most every day

export default async function Project({ params }: any) {
const supabase = await createClient();
const { slug } = params;

const { data: project } = await supabase.from("projects").select('*').eq('slug', slug);

if (!project || project.length === 0) {
    return <NotFound />;
}

const projectData = project[0]; 
const images = typeof projectData.images === "string" ? JSON.parse(projectData.images) : projectData.images;
const technologies = projectData.technologies || [];

return (
    <>
        <ProjectHero 
            hero={projectData.headerTitle}
            projectRemoteUrl={projectData.url}
            imageInHero={projectData.imageInHero}
            heroMediaUrl={projectData.heroMediaUrl}
        />

<div className="image-gallery pt-36">
  {Array.isArray(images) && images.length > 0 ? (
    images.map((img: { url: string; text: string }, index: number) => (
      img.url && (
        <div key={index} className="w-full flex flex-col sm:flex-row">
          <div className="p-2 md:p-5 w-full sm:w-1/2">
            <Image
              src={img.url}
              alt={`Project image ${index + 1}`}
              width={1000}
              height={400}
              className="rounded-3xl w-full"
            />
          </div>
          <div
            className={`p-2 md:p-5 w-full sm:w-1/2 ${
              index % 2 === 0 ? "flex items-end sm:order-first" : "sm:order-last"
            }`}
          >
            {img.text}
          </div>
        </div>
      )
    ))
  ) : (
    <p>No images available</p>
  )}
</div>



{technologies.length > 0 && (
        <div className="flex justify-end items-center p-5">
          <h2 className="font-bold pr-7">Technologies:</h2>
          <div className="flex">
            {technologies.map((tech: string, index: number) => (
              <span key={index} className="flex-1 px-2 first:pl-0 last:pr-0">{tech}</span>
            ))}
          </div>
        </div>
      )}

            
        <AllProjectsLink />
    </>
);
}
  
export async function generateMetadata(
    { params }: any,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    const supabase = await createClient();
    const { slug } = params;
    const { data: project } = await supabase.from("projects").select('*').eq('slug', slug);
  
    if (!project || project.length === 0) {
      return {
        title: "Проект не найден",
        description: "Такого проекта не существует",
      };
    }
  
    const projectData = project[0];
  
    return {
      title: projectData.metaTitle || projectData.headerTitle || "Проект",
      description: projectData.metaDescription || "Описание недоступно",
      openGraph: {
        title: projectData.metaTitle || projectData.headerTitle,
        description: projectData.metaDescription || "Описание недоступно",
        images: projectData.imageInHero ? [{ url: projectData.imageInHero }] : [],
      },
    };
  }
  