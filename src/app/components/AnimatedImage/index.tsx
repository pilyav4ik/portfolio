'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedImage({ src, alt }: { src: string; alt: string }) {
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            imageRef.current,
            { scale: 1 }, // Начальное состояние (обычный размер)
            {
                scale: 1.3, // Увеличивается в 2 раза
                duration: 2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: '0 bottom',
                    end: 'center center',
                    scrub: true,
                    onLeaveBack: () => gsap.to(imageRef.current, { scale: 1, duration: 1 }), // Возвращение к 1 при скролле вверх
                },
            }
        );
    }, []);

    return (
        <div className='overflow-hidden rounded-[2vw] '>
            <Image
                ref={imageRef}
                src={src}
                alt={alt}
                className='rounded-[2vw] transition-transform duration-500'
                width={1000}
                height={1000}
            />
        </div>
    );
}
