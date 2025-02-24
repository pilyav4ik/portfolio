'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

interface Props {
    closeMenu: () => void;
}

interface FormData {
    interestedIn: {
        mobile: boolean;
        web: boolean;
        qa: boolean;
    };
    name: string;
    email: string;
    phone: string;
    message: string;
    files: File[];
}

const initialFormData: FormData = {
    interestedIn: {
        mobile: false,
        web: false,
        qa: false,
    },
    name: '',
    email: '',
    phone: '',
    message: '',
    files: [],
};

const CheckboxField = ({ id, label, checked, onChange }: { id: string, label: string, checked: boolean, onChange: (e: ChangeEvent<HTMLInputElement>) => void }) => (
    <li className='group'>
        <input type="checkbox" id={id} name={id} checked={checked} onChange={onChange} className="hidden peer" />
        <label htmlFor={id} className="inline-flex items-center justify-between w-full p-5 text-white border-2 border-gray-200 rounded-full cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-white peer-checked:bg-white hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-slate-300 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="block">
                <div className="w-full text-lg font-semibold">
                    {checked ? (
                        <CheckedIcon />
                    ) : (
                        <UncheckedIcon />
                    )}
                    <span className='pl-3'>{label}</span>
                </div>
            </div>
        </label>
    </li>
);

const CheckedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline hover:bg-white group-hover:bg-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

const UncheckedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline hover:text-blue-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

const Index = ({ closeMenu }: Props) => {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [fileError, setFileError] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked }:any = e.target;
        if (type === 'checkbox') {
            setFormData(prevState => ({
                ...prevState,
                interestedIn: {
                    ...prevState.interestedIn,
                    [name]: checked,
                },
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files);
            const exeFiles = selectedFiles.filter(file => file.name.endsWith('.exe'));
            const jsFiles = selectedFiles.filter(file => file.name.endsWith('.js*'));
            const tsFiles = selectedFiles.filter(file => file.name.endsWith('.ts*'));

            if (exeFiles.length > 0) {
                setFileError('Uploading .exe files is not allowed.');
                setTimeout(() => setFileError(''), 3000); // Clear error after 3 seconds
            } else if (jsFiles.length > 0) {
                setFileError('Uploading .js files is not allowed.');
                setTimeout(() => setFileError(''), 3000); // Clear error after 3 seconds
            } else if (tsFiles.length > 0) {
                setFileError('Uploading .ts files is not allowed.');
                setTimeout(() => setFileError(''), 3000); // Clear error after 3 seconds
            } else if (formData.files.length + selectedFiles.length > 3) {
                setFileError('You can upload a maximum of 3 files.');
                setTimeout(() => setFileError(''), 3000); // Clear error after 3 seconds
            } else {
                setFileError('');
                setFormData(prevState => ({
                    ...prevState,
                    files: [...prevState.files, ...selectedFiles],
                }));
            }
        }
    };

    const removeFile = (index: number) => {
        setFormData(prevState => ({
            ...prevState,
            files: prevState.files.filter((_, i) => i !== index),
        }));
        setFileError(''); // Clear error message if any
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const files = await Promise.all(
            formData.files.map(file => {
                return new Promise<{ name: string; type: string; path: string }>((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                        resolve({
                            name: file.name,
                            type: file.type,
                            path: reader.result as string,
                        });
                    };
                    reader.onerror = error => reject(error);
                });
            })
        );

        try {
            const response = await fetch('/api/sendemail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    files,
                }),
            });

            if (response.ok) {
                console.log('Email sent');
                setShowSuccess(true);
                setFormData(initialFormData);
                setTimeout(() => setShowSuccess(false), 3000); // Hide success message after 3 seconds
                closeMenu();
            } else {
                console.error('Error sending email');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form className="mx-auto pb-5" onSubmit={handleSubmit}>
            
            <div className="relative z-0 w-full mb-5 group">
                <div className='pb-5 font-bold'>I'm interested in...</div>
                <div className="flex items-center mb-4">
                    <ul className="grid w-full gap-6 md:grid-cols-3">
                        <CheckboxField id="web" label="Web dev" checked={formData.interestedIn.web} onChange={handleChange} />
                        <CheckboxField id="mobile" label="Mobile dev" checked={formData.interestedIn.mobile} onChange={handleChange} />
                        <CheckboxField id="qa" label="QA" checked={formData.interestedIn.qa} onChange={handleChange} />
                    </ul>
                </div>
            </div>

            {['name', 'email', 'phone', 'message'].map(field => (
                <div key={field} className="relative z-0 w-full mb-5 group">
                    {field !== 'message' ? (
                        <input
                            type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                            name={field}
                            id={field}
                            value={(formData as any)[field]}
                            onChange={handleChange}
                            className="block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:border-blue-600 focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required
                        />
                    ) : (
                        <textarea
                            name={field}
                            id={field}
                            value={(formData as any)[field]}
                            onChange={handleChange}
                            className="block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:border-blue-600 focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                        ></textarea>
                    )}
                    <label
                        htmlFor={field}
                        className="peer-focus:font-medium absolute text-md text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        {field.charAt(0).toUpperCase() + field.slice(1).replace('phone', 'Phone (ex. +1234567890)')}
                    </label>
                </div>
            ))}

            <div className="relative z-0 w-full mb-5 group">
                <label className="block mb-2 text-sm font-medium text-white dark:text-white" htmlFor="file_input">Upload files</label>
                <input
                    type="file"
                    id="file_input"
                    multiple
                    onChange={handleFileChange}
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                />
                {fileError && <p className="text-red-600">{fileError}</p>}
                {formData.files.length > 0 && (
                    <ul className="list-disc pl-5 mt-2">
                        {formData.files.map((file, index) => (
                            <li key={index} className="flex justify-between items-center">
                                {file.name}
                                <button type="button" onClick={() => removeFile(index)} className="ml-2 text-red-600">Remove</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">Send</button>

            {showSuccess && (
                <div className='fixed bottom-0 right-0'>
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                    <strong className="font-bold">Success!</strong>
                    <span className="block sm:inline"> Your form has been submitted successfully.</span>
                </div>
                </div>
            )}
        </form>
    );
};

export default Index;
