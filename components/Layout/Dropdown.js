import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Dropdown = ({ item }) => {
    const [show, setShow] = useState();
    const router = useRouter();
    const [active, setActive] = useState(false);

    return (
        <>
            <div className={`text-darkBlack text-[15px] relative ${router.pathname.includes('services') ? "text-darkYellow font-medium" : 'text-darkBlack font-normal'}`}>
                <div className="flex gap-x-1 items-center cursor-pointer" onClick={() => setShow(!show)}>
                    <p>{item?.name}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <ul className="w-[130px] absolute top-10 -left-5 px-4 py-3 z-50 bg-white transition-all duration-300 ease-in-out shadow-xl lg:shadow-none"
                    style={show ? {
                        height: item?.dropdown?.length * 32 + 12,
                        opacity: 1,
                        visibility: 'visible',
                    } : {
                        height: 0,
                        opacity: 0,
                        visibility: 'hidden',
                    }}
                >
                    {item?.dropdown?.map((item, index) => (
                        <li
                            className="h-[30px] cursor-pointer"
                            key={index}
                            onClick={() => {
                                router.push(`/services/${[item?.slug]}`)
                                setShow(false)
                            }}
                        >
                            <span className={`text-darkBlack text-sm ${`/services/${router?.query?.slug}` == item?.path ? "text-darkYellow font-medium" : 'text-darkBlack font-normal'} `}>{item?.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
};

export default Dropdown;
