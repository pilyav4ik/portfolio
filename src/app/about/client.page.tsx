'use client'
import styles from './page.module.scss'
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from '../common/mousePosition';

export default function AboutPageClient() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y }:any = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={styles.main}>
      <motion.div 
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
      >
          <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
          We’re visual designers with skills A.I. hasn't replaced (yet). We create bold, high-quality work — but only when the paycheck matches the energy.
          </p>
      </motion.div>

      <div className={styles.body}>
        <p>We're a <span>selectively skilled</span> product design team focused on crafting high-quality, impactful digital experiences that actually matter.</p>
      </div>

    </main>
  )
}