import Link from "next/link";
import RoundedButton from "../rounedButton";
import { nexusBold } from "@/app/fonts/fonts";

export default function ImageContainer(
    { title, heroMediaUrl, projectRemoteUrl}:
    { title: string, heroMediaUrl:string, projectRemoteUrl:string }
) {
    const backgroundImageStyle = {
        backgroundImage: `url(${heroMediaUrl})`
      };
    return (
        <>
            <div className={`min-h-[70%] relative content-center bg-center bg-cover bg-fixed`} style={backgroundImageStyle}>
                {projectRemoteUrl ?
                    <div className="absolute -bottom-20 ml-0 z-10 md:ml-10">
                    <Link href={`${projectRemoteUrl}`} target="_blank" rel="nofollow">
                    <RoundedButton
                            buttonText="Live site"
                            backgroundColor="bg-slate-800"
                            backgroundColorHover="bg-slate-500"
                        />
                    </Link>
                    </div>
                    :
                ""} 
            </div>

            <div className="flex justify-center items-center relative -top-[15vw]">
                <div className={nexusBold.className + " text-[20vw] text-black"}>
                    {title}
                </div>
            </div>
        </>
    );
}
