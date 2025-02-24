'use client'


import { Controller, useForm } from 'react-hook-form';
import { sendEmail } from './sendEmail';
import styles from './style.module.scss'


export type FormData = {
    name: string;
    phone: string;
};
export default function ContactForm() {
    const { control, register, handleSubmit, reset, formState } = useForm<FormData>();
    const { errors } = formState;


    function onSubmit(data: any) {
        sendEmail(data);
        reset();
    };

    return (
        <>
            <form
                className='flex justify-center w-full'
                onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='block w-full outline-none'
                    type="text"
                    placeholder="Name"
                    {...register('name', {
                        required: { value: true, message: 'Name please' },
                        validate: {},
                        pattern: {
                            value: /^[A-Za-z]{1,10}$/,
                            message: 'Without url please'
                        }
                    })} />


                <input
                    className='block w-full outline-none'
                    type="text"
                    placeholder='phone'
                    {...register('phone', {
                        required: { value: true, message: 'Phone please' },
                        validate: {},
                        pattern: {
                            value: /^(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})$/,
                            message: 'Phone please like "+48885555000"'
                        }
                    })} />

                <button className={styles.svgicon + ' my-2 py-2 px-4 rounded text-gray-300 flex-auto'} type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                </button>

                <div>
                    {errors.phone?.types?.pattern === 'required' && (<p>Phone number only</p>)}
                    {errors.name?.message || errors.phone?.message}

                </div>
            </form>
        </>
    );
};
