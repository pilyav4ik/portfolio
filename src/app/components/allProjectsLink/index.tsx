import Link from "next/link";

export default function AllProjectsLink() {
    return (
        <div className='flex justify-center pt-24 pb-5'>
        <Link href={'/projects'} className="group transition ease-in-out delay-350 ">
          <span className="group-hover:mr-2">View all projects</span>
          <span className='group-hover:ml-2 ml-2 text-xl text-white bg-blue-500 rounded-full inline-flex justify-center items-center px-4 py-2'>
            &#10095;
          </span>
        </Link>
      </div>
    )
}