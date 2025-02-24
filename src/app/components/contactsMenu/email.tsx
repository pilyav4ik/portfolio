'use client'

import { useState } from 'react';

export default function Email({ closeMenu }: any) {

    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <>
            <p className="flex items-center -mx-2 py-4 hover:cursor-pointer" onClick={() => copyToClipboard('info@sviplab.eu')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>

                <span className="mx-2 text-white truncate w-72 dark:text-gray-400" itemProp="email">
                    info@sviplab.eu
                </span>
                {isCopied && <span className="text-green-500 ml-1 text-sm">Copied!</span>}
            </p>
        </>
    )
}