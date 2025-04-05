import Rounded from '../common/RoundedButton';


interface RoundedButtonProps {
    buttonText: string;
    backgroundColor: string;
    backgroundColorHover: string;

}

export default function RoundedButton(props: RoundedButtonProps) {

    return (
        <Rounded className={`flex items-center justify-center w-auto rounded-full px-5 inset-top-5 ${props.backgroundColor} hover:${props.backgroundColorHover}`}>
            <p className='text-white text-md md:text-2xl'>
                {props.buttonText}
            </p>
        </Rounded>
    )

}

