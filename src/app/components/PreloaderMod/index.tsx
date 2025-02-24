'use client'

import { useEffect, useState } from "react";
import { AnimatePresence } from 'framer-motion';
import Preloader from "../Preloader";
import Cookies from 'js-cookie';

export default function PreloaderMod() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const preloaderShown = Cookies.get('preloaderShown');

        if (!preloaderShown) {
            const timer = setTimeout(() => {
                setIsLoading(false);
                document.body.style.cursor = 'default';
                window.scrollTo(0, 0);
                Cookies.set('preloaderShown', 'true', { expires: 1 }); // Set cookie for 1 day
            }, 5000);

            return () => clearTimeout(timer);
        } else {
        }
    }, []);

    return (
        <AnimatePresence>
            {isLoading && <Preloader />}
        </AnimatePresence>
    );
}