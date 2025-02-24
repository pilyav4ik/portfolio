
export default function ({ openMenu }: any) {

    return (
        <>
            <button id='fixedElement' onClick={() => { openMenu() }} type="button" className="bg-white rounded-full uppercase text-black focus:outline-none font-medium text-sm px-2.5 py-2.5 text-center ml-2 hover:bg-slate-900 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>
            </button>
        </>
    )
}