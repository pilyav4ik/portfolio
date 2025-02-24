import Link from "next/link";
import RoundedButton from "../rounedButton";
import { nexusBold } from "@/app/fonts/fonts";

export default async function VideoContainer(
    { heroTitle, heroMediaUrl, projectRemoteUrl }:
    { heroTitle: string, heroMediaUrl:string, projectRemoteUrl:string }
) {
    return (
        <>
            <div className="min-h-[70%] relative content-center bg-center bg-cover bg-fixed">
                <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
                    <source src={`${heroMediaUrl}`} type="video/mp4" />
                    Your browser doesn't support video format
                </video>
                    <div className="absolute -bottom-10 md:-bottom-20 z-10  ml-5 md:ml-10 ">
                        <Link href={`${projectRemoteUrl || '#'}`} target="_blank" rel="nofollow">
                            <RoundedButton
                                buttonText={"Live site"}
                                backgroundColor="bg-violet-800"
                                backgroundColorHover="bg-emerald-500"
                            />
                        </Link>
                    </div>
            </div>

            <div className="flex justify-center items-center relative -top-[15vw]">
                <div className={nexusBold.className + " text-[20vw] text-black"}>
                    {heroTitle}
                </div>
            </div>
        </>

    );
}
