import Link from "next/link";
import RoundedButton from "../../components/rounedButton";
import { nexusBold } from "@/app/fonts/fonts";

export default async function VideoContainer(
    { heroTitle, heroMediaUrl, projectRemoteUrl }:
        { heroTitle: string, heroMediaUrl: string, projectRemoteUrl: string }
) {
    return (
        <>
            <div className="min-h-[70%] relative content-center bg-center bg-cover bg-fixed">
                <div className="flex justify-center items-center relative z-10">
                    <div className={nexusBold.className + " text-[40vw] md:text-[20vw] text-white "}>
                        {heroTitle}
                    </div>
                </div>
                <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
                    <source src={`${heroMediaUrl}`} type="video/mp4" />
                    Your browser doesn't support video format
                </video>
            </div>
            <div className="-mt-5">
                <Link 
    href={`${projectRemoteUrl || '#'}`} 
    target="_blank" 
    rel="nofollow" 
    className="relative text-white text-md md:text-xl 
    bg-stone-700 rounded-full px-5 py-2 
    ml-5 md:ml-10 font-sans lowercase 
    transform transition-transform duration-300 ease-in-out scale-95 hover:scale-120">
    Launch website
</Link>
                
            </div>
        </>

    );
}
