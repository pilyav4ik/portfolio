import Link from "next/link";
import Image from 'next/image'

export default function Logo() {

    return (
        <>  
            <Link href={"/"} className="text-white text-4xl">
                <Image alt="" src="/images/logo.png" width={40} height={40}/>
            </Link>
        </>
    );
}
