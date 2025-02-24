'use client'

import { useEffect, useState } from 'react';
import styles from './style.module.scss';

export default function ({ openMenu }: any) {


    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Change the element ID based on your actual HTML structure
            const targetElement = document.getElementById('projects');
            const fixedElement = document.getElementById('fixedElement');

            if (targetElement && fixedElement) {
                const targetElementRect = targetElement.getBoundingClientRect();
                const fixedElementRect = fixedElement.getBoundingClientRect();

                // Check if the target element is in the viewport
                const isTargetVisible =
                    targetElementRect.top <= fixedElementRect.bottom &&
                    targetElementRect.bottom >= fixedElementRect.top;

                setIsScrolled(isTargetVisible);
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array to


    return (
        <>
                    <button onClick={() => { openMenu() }}  type="button" className="uppercase text-white bg-slate-900 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            contact us
        </button>
        </>
    )
}