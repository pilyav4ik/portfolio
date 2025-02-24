import styles from './style.module.scss'
import InfiniteScrollingText from '../common/infiniteScrollingText/page';

export default async function Home() {

    return (
        <main className={styles.main}>
            <video preload='true' autoPlay no-controls='true' loop playsInline muted>
                <source src="../images/showreel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <InfiniteScrollingText text="Web Development &#9679; Software Testing &#9679; Mobile Development &#9679; " />
        </main>
    )
}