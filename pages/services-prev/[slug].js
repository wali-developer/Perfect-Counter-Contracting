import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from '../../components/Layout';
import { constructionServices, technicalServices, safetyServices } from "../../utils/data";

const Index = () => {
    const router = useRouter();
    const [servicesData, setSericesData] = useState([]);

    const constructionServicesData = constructionServices();
    const technicalServicesData = technicalServices();
    const safetyServicesData = safetyServices();

    useEffect(() => {
        if (router.query?.slug !== '') {
            router.query?.slug == 'construction' ?
                setSericesData(constructionServicesData) : router.query?.slug == 'technical' ?
                    setSericesData(technicalServicesData) :
                    setSericesData(safetyServicesData)
        }
    }, [router])

    return (
        <Layout>
            <section className="w-full pb-16 px-5 sm:px-0">
                <div className="w-full relative">
                    <div className='w-52 h-52 rounded-full bg-secondaryRed/30 blur-2xl absolute -bottom-20 right-40 -z-10'></div>
                    <img src='/img/arrow2.png' alt='' className='absolute top-12 right-10 -z-10 -rotate-0' />
                    <div className="w-full md:w-[800px] mx-auto text-center pt-10 pb-5 relative">

                        <h1 className='text-xl sm:text-[25px] font-bold  text-darkBlue '>{servicesData?.title}</h1>
                        <p className='mt-3 text-sm sm:text-base text-darkBlack'>{servicesData?.desc}</p>
                    </div>
                </div>

                {/* services */}
                <div className="mt-8 w-full md:w-[90%] mx-auto flex flex-wrap justify-center xl:justify-between  gap-y-6">
                    {servicesData?.data?.map((service, index) => (
                        <div className="w-full md:w-[45%] xl:w-[31%] text-center bg-white rounded-lg shadow-[3px_3px_30px_lightgray] overflow-hidden mx-auto xl:mx-0" key={index + ""}>
                            <img src={service?.img} alt="" className="w-full h-[220px] object-cover" />
                            <div className="px-4 py-5">
                                <h1 className='text-[20px] font-semibold text-left text-darkBlue'>{service?.title}</h1>
                                <p className='mt-1 text-[15px] text-darkGray text-left'>{service?.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    )
};

export default Index;
