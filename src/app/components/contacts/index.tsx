'use client'

import styles from './style.module.scss';
import { useRef, useState } from 'react';
import { useScroll, motion, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Rounded from '../common/RoundedButton';
import Stairs from '../stairs';
import ContactsMenu from '../contactsMenu';

export default function Contacts({ openMenu }: any) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });
    const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const y = useTransform(scrollYProgress, [0, 1], [0, 0]);
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

    const currentYear = new Date().getFullYear();
    const [contactsMenuIsOpen, setContactsMenuIsOpen] = useState(false);

    function openContactMenu() {
        setContactsMenuIsOpen(true);
    }

    return (
        <>
            <AnimatePresence mode="wait">
                {contactsMenuIsOpen && (
                    <>
                        <Stairs background={'black'} stairsColor={'black'} />
                        <ContactsMenu closeMenu={() => { setContactsMenuIsOpen(false) }} />
                    </>
                )}
            </AnimatePresence>

            <motion.div style={{ y }} ref={container} className={styles.contact + " min-h-screen flex max-md:hidden"} id={'contacts'} >
                <div className={styles.body}>
                    <div className={styles.title}>
                        <span>
                            <h2>Let's work together</h2>
                            <br /><br /><br /><br /><br /><br /><br />
                        </span>
                        <motion.div style={{ x }} className={styles.buttonContainer}>
                            <div id='contbut'>
                                
                                <Rounded backgroundColor={"#FFFF00"} className={styles.button} onClick={openContactMenu}>
                                    <p>Get in touch</p>
                                </Rounded>
                            </div>
                        </motion.div>
                    </div>
                    <div className={styles.nav}>
                        <a href="tel:+48505862433">
                            <Rounded>
                                <p>+48 505 86 24 33</p>
                            </Rounded>
                        </a>
                        <a href="https://wa.me/48505862433" target='_blank'>
                            <Rounded>
                                <p>WhatsApp</p>
                            </Rounded>
                        </a>
                        <a href="mailto:info@sviplab.eu" target='_blank'>
                        <Rounded>
                            <p>info@sviplab.eu</p>
                            </Rounded>
                        </a>
                    </div>
                    <div className={styles.info}>
                        <div>
                            <span>
                                <h3></h3>
                                <p>{currentYear} © Sviplab</p>
                            </span>
                            <span>
                                <h3></h3>
                                <p></p>
                            </span>
                        </div>
                        <div>
                            <span>
                                <h3>socials</h3>
                                <p>Awwwards</p>
                            </span>
                            <p>Instagram</p>
                            <p>Dribbble</p>
                            <p>Linkedin</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
