'use client';
import React from 'react'
import Image from 'next/image';

export default function index({index, title, previewImageURL, services, setModal}:any) {

    return (
        <div className='h-1/2 overflow-hidden m-0 md:m-5 hover:m-8 ease-in-out duration-300 cursor-none rounded-3xl' onMouseEnter={() => { setModal({ active: true, index }) }} onMouseLeave={() => { setModal({ active: false, index }) }}>
            
            <Image 
                    src={previewImageURL}
                    width={1000}
                    height={300}
                    alt="image"
                    className=''
                    />
            <div className='flex items-center pt-5'>
                <h2 className='pr-3 text-xl font-bold'>{title}</h2>
                
            </div>
            </div>
    )
}
