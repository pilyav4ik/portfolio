import React from 'react'
import { useEffect, useRef } from 'react';
import styles from './style.module.scss';
import gsap from 'gsap';

type Timeline = {
    current: any | null;
}

export default function index({ children, backgroundColor = "#ff0", ...attributes }: any) {
    const circle = useRef<HTMLDivElement>(null);  // Correct type for circle ref
    let timeoutId: any = null;

    useEffect(() => {
    }, []);

    const manageMouseEnter = () => {
        if (timeoutId) clearTimeout(timeoutId);
    };

    const manageMouseLeave = () => {
        timeoutId = setTimeout(() => {
        }, 300);
    };

    return (
        <div className={styles.roundedButton} style={{ overflow: "hidden" }} onMouseEnter={manageMouseEnter} onMouseLeave={manageMouseLeave} {...attributes}>
            {children}
            <div ref={circle} style={{ backgroundColor }} className={styles.circle}></div>
        </div>
    );
}