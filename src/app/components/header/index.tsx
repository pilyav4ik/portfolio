"use client";

import { useState } from "react";
import Burger from "../burger";
import { AnimatePresence } from "framer-motion";
import Stairs from "../stairs";
import ContactsMenu from "../contactsMenu";
import MainMenu from "../mainMenu";
import styles from './style.module.scss';
import MainMenuBurger from '../mainMenuBurger';
import Logo from "../logo";

export function Header() {
    const [contactsMenuIsOpen, setContactsMenuIsOpen] = useState(false);
    const [mainMenuIsOpen, setMainMenuIsOpen] = useState(false);

    return (
        <nav className={`flex items-center justify-between fixed z-20 w-full pt-5 max-md:px-2 px-3 `}>
            
            <Logo/>

            <div className={styles.menuContactsButtons + " text-white"}>
                <div className='flex content-center justify-center items-center'>
                    <Burger openMenu={() => { setContactsMenuIsOpen(true) }} />
                    <AnimatePresence mode="wait">
                        {contactsMenuIsOpen && <>
                            <Stairs />
                            <ContactsMenu closeMenu={() => { setContactsMenuIsOpen(false) }} />
                        </>}
                    </AnimatePresence>

                    <MainMenuBurger openMenu={() => { setMainMenuIsOpen(true) }} />
                    <AnimatePresence mode="wait">
                        {mainMenuIsOpen && <>
                            <Stairs />
                            <MainMenu closeMenu={() => { setMainMenuIsOpen(false) }} />
                        </>}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    );
}
