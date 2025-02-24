import Rounded from '../common/RoundedButton';


interface RoundedButtonProps {
    buttonText: string;
    backgroundColor: string;
    backgroundColorHover: string;

}

export default function RoundedButton(props: RoundedButtonProps) {

    return (
        <Rounded className={`flex items-center justify-center w-16 h-16 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full ${props.backgroundColor} hover:${props.backgroundColorHover}`}>
            <p className='text-white text-md md:text-2xl'>
                {props.buttonText}
            </p>
        </Rounded>
    )

}

