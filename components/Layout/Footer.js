import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Footer = ({ t }) => {
    const router = useRouter();
    const language = router.locale
    return (
        <section className="bg-primary w-full py-16 px-5 md:px-10 lg:px-0">
            <div className="w-full md:w-[90%] md:mx-auto flex flex-wrap gap-y-8 gap-x-20">
                <div className="md:flex-1 w-full sm:1/2">
                    <div className={`w-[120px] h-[100px] ${language == 'en' ? "mr-auto" : "ml-auto"}`}>
                        <Link href="/">
                            <img src="/img/logo-white.svg" alt="" className="w-full h-full" />
                        </Link>
                    </div>
                    <p className={`text-sm text-gray-200 font-light sm:text-[15px] leading-relaxed${language == 'en' ? "text-left" : "text-right"}`}>{t('col1_para')}</p>
                </div>
                <div className="md:flex-1 w-full sm:1/2">
                    <h3 className="text-white font-medium text-[23px] font-barlow">{t("company")}</h3>
                    <ul className="mt-5 footerList">
                        <li className="mb-3 pl-6 relative">
                            <Link href="/" >
                                <span className="text-gray-200 text-sm sm:text-[15px]">{t("who_we_are")}</span>
                            </Link>
                        </li>
                        <li className="mb-3 pl-6 relative">
                            <Link href="/about" target="_blank">
                                <span className="text-gray-200 text-sm sm:text-[15px]">{t("about_us")}</span>
                            </Link>
                        </li>
                        <li className="mb-3 pl-6 relative">
                            <Link href="/services" target="_blank">
                                <span className="text-gray-200 text-sm sm:text-[15px]">{t("services_we_offer")}</span>
                            </Link>
                        </li>
                        <li className="mb-3 pl-6 relative">
                            <Link href="#projects">
                                <span className="text-gray-200 text-sm sm:text-[15px]">{t("what_we_have_done")}e</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="md:flex-1 w-full sm:1/2">
                    <h3 className="text-white text-[23px] font-barlow">{t("our_services")}</h3>
                    <ul className="mt-5 footerList">
                        <li className="mb-3 pl-6 relative">
                            <Link href="/services" target="_blank">
                                <span className="text-gray-200 text-sm sm:text-[15px]">{t("construction")}</span>
                            </Link>
                        </li>
                        <li className="mb-3 pl-6 relative">
                            <Link href="/services" target="_blank">
                                <span className="text-gray-200 text-sm sm:text-[15px]">{t("workforce")}</span>
                            </Link>
                        </li>
                        <li className="mb-3 pl-6 relative">
                            <Link href="/services" target="_blank">
                                <span className="text-gray-200 text-sm sm:text-[15px]">{t("equipment")}</span>
                            </Link>
                        </li>
                        <li className="mb-3 pl-6 relative">
                            <Link href="/services" target="_blank">
                                <span className="text-gray-200 text-sm sm:text-[15px]">{t("electonics")}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="md:flex-1 w-full sm:1/2">
                    <h3 className="text-white font-medium text-[23px] font-barlow">{t("contact")}</h3>
                    <ul className="mt-5">
                        <li className="mb-3 flex gap-x-5 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#D38312" className="w-[18px] h-[18px]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            <div className="">
                                <p className="text-gray-200 text-sm sm:text-[15px]">+966 59 428 6920 </p>
                                <p className="text-gray-200 text-sm sm:text-[15px]">+966 59 079 2026 </p>
                                <p className="text-gray-200 text-sm sm:text-[15px]">+966 55 151 4679 </p>
                            </div>
                            {/* <span className="text-gray-200">+966 59 079 2026</span> */}
                        </li>
                        <li className="mb-3 flex gap-x-5 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#D38312" className="w-[18px] h-[18px]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
                            </svg>

                            <span className="text-gray-200 text-sm sm:text-[15px]">sales@perfectcounter.net</span>
                        </li>
                        <li className="mb-3 flex gap-x-5 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#D38312" className="w-[18px] h-[18px]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <span className="text-gray-200 text-sm sm:text-[15px]">{t("address")}</span>
                        </li>
                        <Link href="/contact" target="_blank">
                            <button className='px-7 py-2 text-sm sm:text-base bg-secondaryRed-dark rounded-full text-white mt-2'>{t("reach_us")}</button>
                        </Link>
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default Footer;
