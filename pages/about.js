import React from "react";
import Layout from "../components/Layout";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { constructionServices } from "../utils/data";
import Link from "next/link";

const About = () => {
  const { t } = useTranslation("about");
  const router = useRouter();
  const language = router.locale;

  const servicesData = [
    {
      id: "1",
      title: t("Mission"),
      desc: t('mission_desc'),
      img: "/img/ser1.jpeg",
    },
    {
      id: "2",
      title: t("Vision"),
      desc: t("vision_desc"),
      img: "/img/ser3.jpeg",
    },
    {
      id: "3",
      title: t("Values"),
      desc: t('values_desc'),
      img: "/img/ser2.jpeg",
    },
  ];

  return (
    <Layout>
      <section className="w-full bg-white" dir={language == 'ar' ? "rtl" : "ltr"}>
        <div className="w-full sm:h-[400px] relative">
          <img
            src="/img/contact-header.jpg"
            alt=""
            className="w-full h-full object-cover object-bottom"
          />
          <div className="w-full h-full bg-[#607799]/90 absolute top-0"></div>
          <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <h1 className="text-white font-barlow text-[40px] sm:text-[70px] font-semibold">
              {t("about_us")}
            </h1>
          </div>
        </div>
        <section className="w-full mt-20 xl:mt-20 my-5 sm:my-16 relative">
          <div className="w-full md:w-[90%] md:mx-auto px-5 md:px-10 lg:px-0">
            <div className="w-36 h-36 rounded-full bg-secondaryRed/30 blur-2xl absolute -top-20 right-24 z-10"></div>
            <img
              src="/img/arrow.png"
              alt=""
              className="absolute -top-20 left-0 -z-10"
            />

            <div className=" sm:py-10 rounded-br-5xl mt-20 bg-white flex flex-wrap items-center justify-between xl:flex-nowrap gap-x-8 gap-y-12">
              <div className="w-full lg:w-[45%] relative">
                <img
                  src="/img/about-us.jpeg"
                  alt=""
                  className="z-30 relative w-full md:h-[550px] object-cover"
                />
                <div
                  className="w-[calc(100%-0px)] h-full border-[5px] border-darkYellow absolute
                                    -bottom-16 -right-10 z-10 rounded-br-[10px] hidden xl:block"
                ></div>
              </div>
              <div className="w-full lg:w-[45%] bg-transparent">
                <div className="w-full text-left">
                  <h1
                    className={`text-[30px] sm:text-[40px] font-[600] sm:leading-[40px] font-barlow text-darkBlue ${language == "en" ? "text-left" : "text-right"
                      }`}
                  >
                    {t('What_We_Do')}
                  </h1>
                  <hr className="my-5 w-[70px] sm:w-[100px] h-[5px] bg-secondaryRed-dark"></hr>
                  <p className="text-sm sm:text-base text-darkGray mt-3 leading-loose">
                    <strong>{t('Perfect_Counter_Contracting')}</strong> {t('what_we_do')}
                  </p>
                  <ul className="flex flex-wrap gap-y-2 gap-x-8 md:gap-x-16 mt-8 about_list">
                    <li className="sm:w-[240px] relative flex gap-x-5 items-center">
                      <div className="w-[14px] h-[14px] rounded-full bg-secondaryRed-dark border"></div>
                      <span className="text-darkGray leading-relaxed text-sm sm:text-base">
                        {t("Professional_Specialist")}
                      </span>
                    </li>
                    <li className="w-[230px] relative flex gap-x-5 items-center">
                      <div className="w-[14px] h-[14px] rounded-full bg-secondaryRed-dark border"></div>
                      <span className="text-darkGray leading-relaxed text-sm sm:text-base">
                        {t("Brilliant_Ideas")}
                      </span>
                    </li>
                    <li className="text-darkGray leading-relaxed"></li>
                  </ul>
                  <ul className="flex flex-wrap gap-y-2 gap-x-8 md:gap-x-16 mt-3 about_list">
                    <li className="w-[240px] relative flex gap-x-5 items-center">
                      <div className="w-[14px] h-[14px] rounded-full bg-secondaryRed-dark border"></div>
                      <span className="text-darkGray leading-relaxed text-sm sm:text-base">
                        {t('Precise_Builders')}
                      </span>
                    </li>
                    <li className="w-[230px] relative flex gap-x-5 items-center">
                      <div className="w-[14px] h-[14px] rounded-full bg-secondaryRed-dark border"></div>
                      <span className="text-darkGray leading-relaxed text-sm sm:text-base">
                        {t('24/7_Assiatance')}
                      </span>
                    </li>
                    <li className="text-darkGray leading-relaxed"></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Working together */}
        <section className="w-full mt-16 xl:mt-32 py-8 sm:py-16 my-16 relative px-5 md:px-10 lg:px-0 bg-[#F4F8FD]">
          <div className="w-full md:w-[90%] md:mx-auto">
            <div className="w-full lg:w-[50%]">
              <h1
                className={`text-[30px] sm:text-[40px] font-[600] sm:leading-[40px] font-barlow text-darkBlue ${language == "en" ? "text-left" : "text-right"
                  }`}
              >
                {t('Working_Together')}
              </h1>
              <hr className="my-5 w-[70px] sm:w-[100px] h-[5px] bg-secondaryRed-dark"></hr>
              <p className="text-darkGray mt-3 leading-loose text-sm sm:text-base">
                {t('working_together_desc')}
              </p>
            </div>
          </div>
        </section>

        {/* Our mission vision value */}
        <section className="w-full mt-0 xl:mt-20 py-0 my-8 sm:my-16 relative px-5 md:px-10 lg:px-0">
          <div className="w-full md:w-[90%] md:mx-auto">
            <div className="w-full">
              <h1
                className={`text-[30px] sm:text-[40px] font-[600] sm:leading-[40px] font-barlow text-darkBlue ${language == "en" ? "text-left" : "text-right"
                  }`}
              >
                {t('Our_Mission_Vision_Values')}
              </h1>
              <hr className="my-5 w-[70px] sm:w-[100px] h-[5px] bg-secondaryRed-dark"></hr>
              {/* services */}
              <div className="mt-8 w-full flex flex-wrap justify-center sm:justify-start xl:justify-between  gap-y-7 sm:gap-y-10">
                {servicesData?.map((service, index) => (
                  <div
                    className="w-full md:w-[45%] xl:w-[31%] text-center bg-white rounded-lg shadow-[3px_3px_30px_lightgray] overflow-hidden mx-auto xl:mx-0"
                    key={index + ""}
                  >
                    <img
                      src={service?.img}
                      alt=""
                      className="w-full h-[220px] object-cover"
                    />
                    <div className="px-4 py-5 pb-10">
                      <h1 className={`text-[20px] font-semibold text-darkBlue ${language == 'ar' ? "text-right" : "text-left"}`}>
                        {service?.title}
                      </h1>
                      <p className="mt-1 text-[15px] text-darkGray text-left text-sm sm:text-base">
                        {service?.desc}
                      </p>
                      <div
                        className={`flex ${language == "en" ? "justify-start" : "justify-end"
                          }`}
                      >
                        <Link href="/about">
                          <button className="px-5 py-2 text-sm bg-secondaryRed-dark rounded-full text-white mt-7">
                            {t("read_more")}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default About;
