import React from "react";
import Layout from '../components/Layout'
import { customers, partners } from "../utils/data";
import useTranslation from 'next-translate/useTranslation';
import Head from "next/head";

const PartnersAndCustomer = () => {
    const { t } = useTranslation('partners_customers');
    return (
        <>
            <Head>
                <title>{t('title')}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                {/* Partners */}
                {/* <section className="bg-white my-10 w-full px-4 sm:px-0">
                    <div className="w-full relative bg-primary px-3 md:px-0">
                        <div className='w-52 h-52 rounded-full bg-secondaryRed/30 blur-2xl absolute -bottom-20 right-40 -z-10'></div>
                        <div className="w-full md:w-[900px] mx-auto text-center py-7 relative">
                            <h1 className='text-xl sm:text-[25px] font-bold text-white'>{t("partnership")}</h1>
                            <p className='mt-2 text-sm sm:text-base text-white'>{t('partnership_para')}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[90%] mx-auto">
                        <div className="my-12 flex flex-wrap gap-5 xl:gap-10 justify-center">
                            {partners?.map((item, index) => (
                                <div
                                    className="px-4 py-5 shadow-[3px_3px_30px_lightgray] text-center w-full sm:w-[47%] lg:w-[30%] rounded-lg hover:scale-110 transition-all duration-300"
                                    key={index + ""}
                                >
                                    <img src={item?.img} alt="" className="mx-auto w-[75px] h-[75px]" />
                                    <h6 className="font-semibold font-roboto text-darkBlue text-lg mt-3">{item?.title}</h6>
                                    <p className="text-sm text-darkBlack mt-1 pb-5">Lorem ipsum dolor sit amet, consetetur adips cing elitr, sed diam nonumy eirmod tempor invid unt ut.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}

                <div className="w-full sm:h-[400px] relative ">
                    <img
                        src="/img/contact-header.jpg"
                        alt=""
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="w-full h-full bg-[#607799]/90 absolute top-0"></div>
                    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                        <h1 className="text-white font-barlow text-[40px] sm:text-[70px] font-semibold">
                            {t("our_clients")}
                        </h1>
                    </div>
                </div>

                {/* Customers */}
                <section className="bg-white mb-10 mt-10 w-full px-5 sm:px-0">

                    <div className="w-full md:w-[86%] sm:mx-auto my-12 md:my-24 ">
                        <h1
                            className={`text-[30px] leading-[35px] sm:text-[40px] font-[600] sm:leading-[40px] font-barlow text-darkBlue mt-2 px-5 sm:px-10 md:px-0`}
                        >
                            {t("Customers")}
                        </h1>
                        <div className="px-5 sm:px-10 md:px-0">
                            <hr className="my-5 w-[70px] sm:w-[100px] h-[5px] bg-secondaryRed-dark"></hr>
                        </div>
                        <p className="text-sm sm:text-base text-darkGray w-full lg:w-[80%] leading-relaxed px-5 sm:px-10 md:px-0">
                            {t('customers_para')}
                        </p>
                    </div>
                    <div className="w-full md:w-[90%] mx-auto">
                        <div className="my-12 flex flex-wrap gap-5 xl:gap-10 justify-center">
                            {customers?.map((item, index) => (
                                <div
                                    className="relative w-[45%] sm:w-[30%] lg:w-[20%] h-[210px] hover:scale-110 transition-all duration-300"
                                    key={index + ""}
                                >
                                    <div
                                        className="px-4 py-5 shadow-[3px_3px_30px_lightgray] text-center w-full h-full rounded-lg z-50 bg-white"
                                        key={index + ""}
                                    >
                                        <img src={item?.img} alt="" className="mx-auto h-[100px] w-[170px] object-contain" />
                                        <h6 className="font-semibold font-roboto text-darkBlue text-lg mt-3">{item?.title}</h6>
                                    </div>
                                    <div className="w-full h-full bg-darkYellow absolute -top-2 -right-2 rounded-lg -z-50"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
};

export default PartnersAndCustomer;
