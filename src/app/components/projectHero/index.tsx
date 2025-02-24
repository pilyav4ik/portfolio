import ImageContainer from "./image";
import VideoContainer from "./video";


export default function ProjectHero(props: any) {

    return (
        <>
            {props.imageInHero ?
                <ImageContainer
                    title={props.title}
                    heroMediaUrl={props.heroMediaUrl}
                    projectRemoteUrl={props.projectRemoteUrl} />
                :
                <VideoContainer
                    heroTitle={props.title}
                    heroMediaUrl={props.heroMediaUrl}
                    projectRemoteUrl={props.projectRemoteUrl} />
            }

        </>

    );
}