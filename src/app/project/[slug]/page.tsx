import AllProjectsLink from "@/app/components/allProjectsLink";
import ProjectHero from "@/app/components/projectHero";
import NotFound from "@/app/not-found";
import type { Metadata, ResolvingMetadata } from 'next'
import { createClient } from "@/app/utils/supabase/server";
import ImageGallery from "@/app/components/projectGallery";

export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
  const supabase = await createClient();

  // Дожидаемся params
  const { slug } = await params;

  if (!slug) {
    return <NotFound />;
  }

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
              title={projectData.headerTitle}
              projectRemoteUrl={projectData.url}
              imageInHero={projectData.imageInHero}
              heroMediaUrl={projectData.heroMediaUrl}
          />
          
          <ImageGallery 
          images={images}  />


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
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const supabase = await createClient();

  const { slug } = await params;

  if (!slug) {
      return {
          title: "Untitled project",
          description: "Simple Description",
      };
  }

  const { data: project } = await supabase.from("projects").select('*').eq('slug', slug);

  if (!project || project.length === 0) {
      return {
          title: "Untitled project",
          description: "Simple Description",
      };
  }

  const projectData = project[0];

  return {
      title: projectData.metaTitle || projectData.headerTitle || "Untitled project",
      description: projectData.metaDescription || "Simple Description",
      openGraph: {
          title: projectData.metaTitle || projectData.headerTitle,
          description: projectData.metaDescription || "Simple Description",
          images: projectData.imageInHero ? [{ url: projectData.imageInHero }] : [],
      },
  };
}
