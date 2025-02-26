'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectImage({ index, title, previewImageURL, services, setModal }: any) {
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.to(imageRef.current, {
            scale: 1.3, // Увеличение на 100% (в 2 раза)
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: imageRef.current,
                start: 'top bottom',
                end: 'center center',
                scrub: true,
            },
        });
    }, []);

    return (
        <div
            className='m-0 md:m-5 hover:m-8 ease-in-out duration-300 cursor-none'
            onMouseEnter={() => setModal({ active: true, index })}
            onMouseLeave={() => setModal({ active: false, index })}
        >
            <div className='overflow-hidden'>
                <Image
                    ref={imageRef}
                    src={`/images/${previewImageURL}.webp`}
                    width={1000}
                    height={0}
                    alt="image"
                    className='rounded-3xl transition-transform duration-500'
                />
            </div>
            <div className='flex items-center pt-5'>
                <h2 className='pr-3 text-xl font-bold'>{title}</h2>
            </div>
        </div>
    );
}
