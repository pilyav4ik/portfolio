import Link from 'next/link'
import { Header } from './components/header'
 
export default function NotFound() {
    return (<>
        <Header/>
              <div className='flex flex-col items-center justify-center text-center text-6xl text-black pt-[25%]'>
              <h1>Page Not Found</h1>
              <p>Sorry, the page you're looking for doesn't exist.</p>
              <Link href='/' className='rounded-full p-5 mt-10 bg-slate-900 text-white'>Back to Home</Link>
        </div>
    </>)
}