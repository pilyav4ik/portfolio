import Image from "next/image";

const ProjectInfo = ({ project }: any) => {
  if (!project || !project.images || project.images.length === 0) {
    return <div>No images available for this project.</div>;
  }


  return (
    <>
      <div className="pt-24 md:pt-28 lg:pt-36">

        <div className="flex justify-around px-6 md:px-24 lg:px-36 flex-col md:flex-row">
          <div className="md:w-1/3 text-3xl">
            {project.headerTitle}
          </div>
          <div className="text-xl md:pl-40">
            {project.headerDescription}
          </div>
        </div>
        </div>
    </>
  );
};

export default ProjectInfo;
