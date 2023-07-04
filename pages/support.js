import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../components/Layout'

const Support = () => {
    const router = useRouter();
    const { t } = useTranslation('support');
    const language = router.locale;

    const cardsData = [
        {
            title: t('construction_side'),
            description: t('construction_para'),
            imgPath: '/img/icon1.png',
            imgStyle: 'w-[75px] h-[75px]'
        },
        {
            title: t('technical_side'),
            description: t('technical_para'),
            imgPath: '/img/cranicon.png',
            imgStyle: 'w-[80px] h-[67px]'
        },
        {
            title: t('material_supply'),
            description: t('material_para'),
            imgPath: '/img/supportelectronic.png',
            imgStyle: 'w-[72px] h-[67px]'
        }
    ]

    return (
        <>
            <Head>
                <title>{t('title')}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <div className='w-full px-5 lg:px-0'>
                    <div className="w-full relative">
                        <div className='absolute inset-0 bg-[#707070]/5'></div>
                        <div className='w-52 h-52 rounded-full bg-secondaryRed/20 blur-2xl absolute -bottom-20 right-40 -z-10'></div>
                        <div className="w-full mx-auto text-center py-[40px] relative my-[22px]">
                            <h1 className='text-[25px] font-bold text-[#0C2A68]'>{t("customer_support")}</h1>
                        </div>
                    </div>
                    {/* Infocontainer start*/}
                    <div className='min-h-[560px] mb-[250px] container max-w-[1212px] sm:mx-auto px-5 lg:px-0 bg-[#4C5766] rounded-lg relative
                                 flex flex-col items-center pt-[35px]   '
                        style={{
                            'box-shadow': ' 0px 25px 44px #00000029'
                        }}
                    >

                        <h1 className='text-white font-bold text-[28px]'>{t("howcanwehelp")}</h1>
                        <div className='max-w-[812px] '>
                            <p className={`text-left font-light mt-[13px] text-white opacity-75 ${language == 'en' ? "text-left" : "text-right"}`}>{t('intro_para1')}</p>
                            <p className={`text-left font-light mt-2 text-white opacity-75 ${language == 'en' ? "text-left" : "text-right"}`}>{t('intro_para2')}</p>
                            <p className={`text-left font-light mt-2 text-white opacity-75 ${language == 'en' ? "text-left" : "text-right"}`}>{t('intro_para3')}</p>
                            <p className={`text-left font-light mt-2 text-white opacity-75 ${language == 'en' ? "text-left" : "text-right"}`}>{t('intro_para4')}</p>
                        </div>
                        <div className='static my-16 xl:mb-0 xl:absolute lg:h-[280px] left-6 right-6 -bottom-[170px] flex flex-wrap flex-row justify-center gap-8 xl:space-x-[49px]'>
                            {cardsData?.map((item, index) => {
                                return (
                                    <div
                                        key={index + ''}
                                        className='bg-white w-full sm:w-[327px]  border-[#C81BB2]/25 shadow-md 
                                                 rounded-[8px] py-[16px] px-[15px] flex flex-col items-center self-stretch'
                                        style={{
                                            'borderWidth': '0.5px'
                                        }}
                                    >
                                        <div className='h-[77px]'>
                                            <img
                                                src={item?.imgPath}
                                                className={item?.imgStyle}
                                                alt={item?.title}
                                            />
                                        </div>
                                        <h1 className='text-[17px]  font-semibold text-[#0C2A68] mt-[15px]'>{item?.title}</h1>
                                        <div className=' flex-1 block'>
                                            <p className={`text-black/95 text-sm  mt-[3px] ${language == 'en' ? "text-left" : "text-right"}`}>{item?.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {/* Infocontainer end */}

                    {/* Contact start */}
                    <div className='mb-[60px] container max-w-[1212px] mx-auto bg-[#4C5766] rounded-lg relative flex flex-col items-center pt-[38px] pb-[33px] px-5 md:px-0 '
                        style={{
                            'box-shadow': ' 0px 25px 44px #00000029',
                            'border': '0.5px solid #707070'
                        }}
                    >
                        <div className='max-w-[775px]  flex flex-wrap flex-col space-y-[26px] items-center'>
                            <div className='flex flex-wrap gap-y-5 flex-row mx-auto md:space-x-[35px]'>
                                <div className={`w-full md:w-[360px]`}>
                                    <CustomeInput
                                        title={t('name')}
                                        placeholder={t('enter_your_name')}
                                    />
                                </div>
                                <div className='w-full md:w-[360px] '>
                                    <CustomeInput
                                        title={t('email')}
                                        placeholder={t('enter_your_email')}
                                    />
                                </div>
                            </div>
                            <div className='flex flex-wrap gap-y-5 flex-row mx-auto md:space-x-[35px]'>
                                <div className='w-full md:w-[360px]'>
                                    <CustomeInput
                                        title={t('what_would_you_like_to_talk_about')}
                                        placeholder={t('enter_topic_name')}
                                    />
                                </div>
                                <div className='w-full md:w-[360px] '>
                                    <CustomeInput
                                        title={t('organization')}
                                        placeholder={t('enter_organization_name')}
                                    />
                                </div>
                            </div>
                            <div className='flex flex-wrap gap-y-5 flex-row mx-auto md:space-x-[35px]'>
                                <div className='w-full md:w-[360px]'>
                                    <CustomeInput
                                        title={t('phone')}
                                        placeholder={t('enter_your_phone_number')}
                                    />
                                </div>
                                <div className='w-full md:w-[360px] '>
                                    <CustomeInput
                                        title={t('subject')}
                                        placeholder={t('enter_subject')}
                                    />
                                </div>
                            </div>
                            <div className='self-stretch '>

                                <CustomeInput
                                    title={t('message')}
                                    placeholder={t('enter_your_message_here')}
                                    largtext
                                />

                            </div>
                            <div className='w-[159px] h-[54px] bg-[#A83279] cursor-pointer flex items-center justify-center self-start rounded-lg'
                                style={{
                                    'box-shadow': '0px 3px 6px #00000029',
                                    'border': ' 0.5px solid #C81BB2'
                                }}
                            >
                                <h1 className='text-white font-medium text-base'>{t("submit")}</h1>
                            </div>
                        </div>
                    </div>
                    {/* Contact end */}
                </div>
            </Layout>
        </>
    );
}


const CustomeInput = ({ title, placeholder, largtext }) => {
    const router = useRouter();
    const language = router.locale;
    return (
        <div className=' relative w-full'>
            <h1 className={`text-white font-medium text-base ${language == 'en' ? "text-left" : "text-right"}`}>{title}</h1>
            {!largtext ? (<input
                className={`mt-[6px] bg-white w-full  h-[44px] rounded-lg px-[20px] outline-none border-none ${language == 'en' ? "text-left" : "text-right"}`}
                placeholder={placeholder}
            />) : (
                <textarea
                    className={`mt-[6px] bg-white w-full  min-h-[130px] py-[10px] rounded-lg px-[11px] outline-none border-none ${language == 'en' ? "text-left" : "text-right"}`}
                    placeholder={placeholder}
                />
            )}
        </div>
    )
}

export default Support;
