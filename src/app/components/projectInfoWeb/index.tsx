import Image from "next/image";

const ProjectInfo = ({ project }: any) => {
  if (!project || !project.images || project.images.length === 0) {
    return <div>No images available for this project.</div>;
  }

  return (
    <>
      <div className="pt-40">
      
        <div className="grid grid-cols-2 gap-2">
        {project.images.map((image: any) => (
              <Image
                src={image.url}
                alt={image.alt}
                className="dark:hidden h-[312px] md:h-[556px] max-w-full rounded-lg"
                key={image.id}
                width={100}
                height={100}
              />
            ))}

        </div>
          </div>
    </>
  );
};

export default ProjectInfo;
