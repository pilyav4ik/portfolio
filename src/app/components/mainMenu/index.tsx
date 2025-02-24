import { motion } from 'framer-motion';
import { opacity, slideLeft, mountAnim } from './anim';
import styles from './style.module.scss';
import Link from './link';

const menu = [
  {
    title: "Home",
    url: "/",
    description: "To See Everything",
    images: ['agence1.jpg', 'agence2.jpg']
  },
  {
    title: "Case studies",
    url: "/projects",
    description: "To See Everything",
    images: ['agence1.jpg', 'agence2.jpg']
  },
  {
    title: "About",
    url: "#",
    description: "Who are we",
    images: ['contact2.jpg', 'c2.jpg']
  }
]

export default function index({closeMenu}: any) {

  return (
    <div className={styles.menu + ' bg-white'}>

          <div className={styles.header}>
          <div className='flex justify-end pt-1'>
            <div className='flex content-center justify-center bg-white p-2 text-center text-black rounded-full hover:cursor-pointer' onClick={() => { closeMenu() }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

            </div>
          </div>
          
        </div>

          
        <div className={styles.body}>
          {
            menu.map( (el, index) => {
              return <Link data={el} index={index} key={index}/>
            })
          }
        </div>



    </div>
  )
}