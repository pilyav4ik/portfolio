'use client'

import React, { useEffect, useRef } from 'react';
import styles from './style.module.scss';
import gsap from 'gsap';
import Magnetic from '../magnetic';


export default function index({ children, backgroundColor, backgroundColorHover, onClickAction, ...attributes }: any) {
    const circle = useRef(null);
    let timeline: any = useRef(null); // Use gsap.core.Timeline type

    let timeoutId: any = null;

    useEffect(() => {
        timeline.current = gsap.timeline({ paused: true });
        timeline.current
            .to(circle.current, { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" }, "enter")
            .to(circle.current, { top: "-150%", width: "125%", duration: 0.25 }, "exit");
    }, []);

    const manageMouseEnter = () => {
        if (timeoutId) clearTimeout(timeoutId);
        timeline!.current.tweenFromTo('enter', 'exit'); // Use non-null assertion operator (!) here
    };

    const manageMouseLeave = () => {
        timeoutId = setTimeout(() => {
            timeline!.current.play(); // Use non-null assertion operator (!) here
        }, 300);
    };

    return (
        <Magnetic>
            <div className={styles.roundedButton + " "} style={{ overflow: "hidden" }}
                onMouseEnter={manageMouseEnter}
                onMouseLeave={manageMouseLeave}
                onClick={onClickAction}
                {...attributes}>
                {children}
            </div>
        </Magnetic>
    );
}
