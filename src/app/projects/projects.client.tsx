'use client';

import { useEffect, useRef, useState } from 'react';
import Project from '../components/project';
import Modal from '../components/modal';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProjectsProps {
  projects: any[];
  services: any;
}

export default function Projects({ projects, services }: ProjectsProps) {
  const [modal, setModal] = useState({ active: false, index: 0 });

  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const scroll = scrollRef.current;

    if (!wrapper || !scroll) return;

    const ctx = gsap.context(() => {
      const totalScroll = scroll.scrollWidth - wrapper.offsetWidth;

      gsap.to(scroll, {
        x: () => `-${totalScroll}px`,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: () => `+=${scroll.scrollWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    <main>
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
      {projects?.length > 0 ? (
  projects.map((project:any, index:any) => (
    <Link href={"project/" + project.slug} key={index} className='cursor-none'>
      <Project
        index={index} 
        previewImageURL={project.previewImageURL}
        title={project.title}
        services={project.services}
        setModal={setModal} />
      
    </Link>
  ))
) : (
  <p>No projects available.</p>
)}


        </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
}
