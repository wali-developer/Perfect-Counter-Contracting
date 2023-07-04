import Link from "next/link";
import React, { useEffect, useState } from "react";
// import menu from './menu';
import { useRouter } from "next/router";
import Dropdown from "./Dropdown";
import Bar from '../../SVGs/Bar';
import Cross from '../../SVGs/Cross';

const Navbar = ({ t }) => {
    const router = useRouter();
    const language = router.locale
    const [showMenu, setShowMenu] = useState(false);
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 70) {
                    setScroll(true)

                } else {
                    setScroll(false)
                }
            })
        }
    }, []);

    const menu = [
        {
            id: 1,
            name: t('home'),
            path: '/'
        },
        {
            id: 3,
            name: t('services'),
            path: '/services',
            // dropdown: [
            //     {
            //         id: 1,
            //         name: t('construction'),
            //         slug: 'construction',
            //         path: '/services/construction',
            //     },
            //     {
            //         id: 1,
            //         name: t('technical'),
            //         slug: 'technical',
            //         path: '/services/technical',
            //     },
            //     {
            //         id: 1,
            //         name: t('safety'),
            //         slug: 'safety',
            //         path: '/services/safety',
            //     },
            // ]
        },
        {
            id: 4,
            name: t('clients'),
            path: '/partners_customer'
        },
        {
            id: 5,
            name: t('about_us'),
            path: '/about'
        },
        {
            id: 7,
            name: t('contact'),
            path: '/contact'
        },
    ]

    return (
        <>
            <section
                className={`w-full h-[70px] bg-white boxShadow transition-all duration-300 ease-in-out px-5 sm:px-0 ${scroll == true ? 'fixed top-0 inset-x-0 z-[999]' : 'static'}`}
            >
                <div className="w-full sm:w-[90%] h-full sm:mx-auto flex justify-between items-center relative">
                    <div className="w-[80px] md:w-[200px] h-[90px]">
                        <Link href="/">
                            {language == 'en' ? (
                                <img src="/img/logo-en.svg" alt="" className="w-full h-full" />
                            ) : (
                                <img src="/img/logo-ar.svg" alt="" className="w-full h-full" />
                            )}
                        </Link>
                    </div>
                    <div className="flex gap-x-5 items-center">
                        <ul className="list-none hidden lg:block">
                            {menu?.map((item, index) => (
                                <li key={index + ""} className="inline-block mr-8">
                                    {item?.dropdown ? (
                                        <Dropdown item={item} />
                                    ) : (

                                        <Link href={item?.path}>
                                            <span className={`text-darkBlack text-[15px] ${router.pathname == item?.path ? "text-darkYellow font-medium" : 'text-darkBlack font-normal'}`}>{item?.name}</span>
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-x-5 mr-10 lg:mr-0">
                            <Link href={router.pathname} locale="en">
                                <p
                                    className="cursor-pointer font-normal text-darkBlack text-[13px]"
                                    style={router.locale == 'en' ? {
                                        fontWeight: 500, color: '#A83279'
                                    } : {}}
                                >English</p>
                            </Link>
                            <Link href={router.pathname} locale="ar">
                                <p
                                    className="cursor-pointer text-darkBlack text-[13px]"
                                    style={router.locale == 'ar' ? {
                                        fontWeight: 500, color: '#A83279'
                                    } : {}}
                                >Arabic</p>
                            </Link>
                        </div>
                    </div>
                    <button
                        className="block lg:hidden ml-auto absolute top-6 right-0"
                        onClick={() => setShowMenu(true)}
                    >
                        <Bar />
                    </button>
                </div>
            </section>
            {/* Menu for mobile */}
            <div
                className="w-full md:mx-auto flex flex-col bg-white z-[999] py-3 px-5 md:px-10 lg:px-0 fixed top-0 h-screen transition-all duration-300"
                style={showMenu ? {
                    transform: 'translateX(0)',
                } : {
                    transform: 'translateX(-100%)',
                }}
            >
                <div className="w-[80px] md:w-[200px] h-[90px]">
                    <Link href="/">
                        {language == 'en' ? (
                            <img src="/img/logo-en.svg" alt="" className="w-full h-full" />
                        ) : (
                            <img src="/img/logo-ar.svg" alt="" className="w-full h-full" />
                        )}
                    </Link>
                </div>
                <ul className="list-none">
                    {menu?.map((item, index) => (
                        <li key={index + ""} className="block py-2.5">
                            {item?.dropdown ? (
                                <Dropdown item={item} />
                            ) : (

                                <Link href={item?.path}>
                                    <span className={`text-darkBlack text-base ${router.pathname == item?.path ? "text-darkYellow font-medium" : 'text-darkBlack font-normal'}`}>{item?.name}</span>
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
                <button
                    className="block lg:hidden ml-auto absolute top-6 right-5 sm:right-8"
                    onClick={() => setShowMenu(false)}
                >
                    <Cross />
                </button>
            </div>
            <a href="pdf/pcc-profile.pdf" download>
                <button className="fixed bottom-5 right-5 bg-secondaryRed-dark rounded-[30px] text-[15px] px-5 py-3 text-white z-[99]">{t("Company_Profile")}</button>

            </a>
        </>
    )
};

export default Navbar;
