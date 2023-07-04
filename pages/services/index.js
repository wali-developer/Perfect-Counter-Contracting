import React from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

const Index = () => {
  const router = useRouter();
  const language = router.locale;
  const { t } = useTranslation("services");

  const servicesArray = [
    {
      title: t("careful_planning​"),
      desc: t('careful_planning_desc​'),
      icon: "fa-solid fa-pen-ruler",
    },
    {
      title: t('timely_completion'),
      desc: "Complete the assignment on time and in accordance with the timetable.",
      icon: "fa-solid fa-clock",
    },
    {
      title: t('perfect_performance​'),
      desc: t("perfect_performance​_desc"),
      icon: "fa-solid fa-circle-check",
    },
    {
      title: t('reasonable_prices'),
      desc: t('reasonable_prices_desc'),
      icon: "fas fa-money-check-alt",
    },
  ];
  const specilaizationArray = [
    {
      title: t('equipments'),
      desc: t('equipments_desc'),
      icon: "fas fa-bus-alt",
    },
    {
      title: t("trading"),
      desc: t("trading_desc"),
      icon: "fa-solid fa-plant-wilt",
    },
    {
      title: ("workforce"),
      desc: t("workforce_desc"),
      icon: "fa-solid fa-users",
    },
  ];

  return (
    <Layout>
      <section className="w-full bg-white" dir={language == 'ar' ? "rtl" : "ltr"}>
        <div className="w-full sm:h-[400px] relative ">
          <img
            src="/img/contact-header.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="w-full h-full bg-[#607799]/90 absolute top-0"></div>
          <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <h1 className="text-white font-barlow text-[40px] sm:text-[70px] font-semibold">
              {t("title")}
            </h1>
          </div>
        </div>
        <div className="w-full md:w-[86%] sm:mx-auto my-12 md:my-24 ">
          <h1
            className={`text-[30px] leading-[35px] sm:text-[40px] font-[600] sm:leading-[40px] font-barlow text-darkBlue mt-2 px-5 sm:px-10 md:px-0 ${language == "en" ? "text-left" : "text-right"
              }`}
          >
            {t("our_services")}
          </h1>
          <div className="px-5 sm:px-10 md:px-0">
            <hr className="my-5 w-[70px] sm:w-[100px] h-[5px] bg-secondaryRed-dark"></hr>
          </div>
          <p className="text-sm sm:text-base text-darkGray w-full lg:w-[80%] leading-relaxed px-5 sm:px-10 md:px-0">
            {t('our_services_desc')}
          </p>
          <div className="mt-16 flex flex-wrap gap-y-6 sm:gap-y-10 gap-x-6 xl:justify-between px-5 sm:px-10 md:px-0">
            {servicesArray.map((item, index) => (
              <div className="w-full md:w-[calc(25%-35px)]" key={index + ""}>
                <div className="w-[50px] h-[50px]">
                  <i
                    className={`${item?.icon} text-2xl sm:text-3xl text-secondaryRed-dark`}
                  ></i>
                </div>
                <div className="w-full">
                  <h5 className="text-lg sm:text-xl font-semibold text-black font-barlow">
                    {item?.title}
                  </h5>
                  <p className="text-sm sm:text-base text-darkGray mt-3">
                    {item?.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 flex flex-wrap xl:flex-nowrap gap-y-10 gap-x-12 px-5 sm:px-10 md:px-0">
            <img
              src="/img/pic1.jpeg"
              alt=""
              className="w-full h-auto xl:w-[48%] sm:h-[400px] object-cover"
            />
            <img
              src="/img/pic2.jpeg"
              alt=""
              className="w-full h-auto xl:w-[48%] sm:h-[400px] object-cover"
            />
          </div>

          {/* Specialization */}
          <div className="mt-20 px-5 sm:px-10 md:px-0">
            <h1
              className={`text-[30px] leading-[35px] sm:text-[40px] font-[600] sm:leading-[40px] font-barlow text-darkBlue mt-2 ${language == "en" ? "text-left" : "text-right"
                }`}
            >
              {t("our_areas_of_expertise")}
            </h1>
            <hr className="my-5 w-[70px] sm:w-[100px] h-[5px] bg-secondaryRed-dark"></hr>
            <p className="text-sm sm:text-base text-darkGray w-full lg:w-[44%] leading-relaxed">
              {t('our_areas_of_expertise_desc')}
            </p>
            <div className="mt-16 flex flex-wrap gap-y-8 gap-x-5 xl:justify-between">
              {specilaizationArray.map((item, index) => (
                <div className="w-full md:w-[calc(33%-35px)]" key={index + ""}>
                  <div className="w-[50px] h-[50px]">
                    <i
                      className={`${item?.icon} text-4xl text-secondaryRed-dark`}
                    ></i>
                  </div>
                  <div className="w-full mt-3">
                    <h5 className="text-xl font-semibold text-black font-barlow">
                      {item?.title}
                    </h5>
                    <p className="text-darkGray mt-2 leading-relaxed">
                      {item?.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <section className="service_background"></section> */}
        <div className="w-full h-auto service_background ">
          <div className=" h-full mt-3 bg-[#607799]/95 py-10 md:py-20">
            <div className="w-full lg:w-[800px] h-full mx-auto px-5 sm:px-10 lg:px-0">
              <h1
                className={`text-[30px] leading-[35px] sm:text-[40px] font-[600] sm:leading-[40px] font-barlow text-white mt-2 `}
              >
                {t('civil_electrical_electronics_mechanical')}
              </h1>
              <p className="text-sm sm:text-base text-white mt-5 leading-relaxed">
                {t('para1')}
              </p>
              <ul className="list-disc mt-4 ml-5">
                <li className="text-white text-sm sm:text-base leading-relaxed border-b mb-3 md:mb-0 pb-2">
                  <strong className="text-base sm:text-lg">{t('civil')} - </strong>
                  {t('civil_desc')}
                </li>
                <li className="text-white text-sm sm:text-base leading-relaxed py-2 border-b">
                  <strong className="text-base sm:text-lg">{t('elecrical')} - </strong>
                  {t('elecrical_desc')}
                </li>

                <li className="text-white text-sm sm:text-base leading-relaxed py-2 border-b">
                  <strong className="text-base sm:text-lg">
                    {t('electronics')} -{" "}
                  </strong>
                  {t("electronics_desc")}
                </li>
                <li className="text-white text-sm sm:text-base leading-relaxed  py-2">
                  <strong className="text-base sm:text-lg">
                    {t('mechanical')} -{" "}
                  </strong>
                  {t('mechanical_desc')}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Elecronics service */}
        {/* Introduction */}
        <section className="w-full my-12 md:my-28 relative sm:pb-12 lg:mb-0">
          <div className="w-full md:w-[90%] sm:mx-auto flex items-center flex-wrap gap-y-10 gap-x-10 xl:gap-x-20 rounded-[10px] py-5 px-5">
            <div className="w-36 h-36 rounded-full bg-secondaryRed/40 blur-2xl absolute top-0 left-1/4 -z-10"></div>
            <div className="w-full md:flex-1 sm:px-7 z-20">
              <h1
                className={`text-[30px] leading-[35px] sm:text-[40px] font-[600] sm:leading-[40px] font-barlow text-darkBlue ${language == "en" ? "text-left" : "text-right"
                  }`}
              >
                {t('Electronics_Expertise_and_Offerings')}
              </h1>
              <hr className="my-5 w-[70px] sm:w-[100px] h-[5px] bg-secondaryRed-dark"></hr>
              <h3
                className={`text-[19px] sm:text-[24px] font-[600] font-barlow text-black mb-5 ${language == "en" ? "text-left" : "text-right"
                  }`}
              >
                {t('bringing_your_dreams')}
              </h3>
              <p
                className={`text-sm sm:text-base text-darkBlack mt-3 ${language == "en" ? "text-left sm:text-justify" : "text-right"
                  }`}
              >
                {t('electronics_expertise_desc1')}
              </p>
              <p className="text-darkBlack mt-4 text-sm sm:text-base">
                {t('electronics_expertise_desc2')}
              </p>
            </div>
            <div className="xl:w-1/2 w-full lg:flex-1 relative backgroundArrow md:h-[600px]">
              <img
                src="/img/arrow.png"
                alt=""
                className="hidden sm:block absolute -top-[170px] object-cover"
              />
              <div className="w-full">
                <img
                  src="/img/electronics-service.jpg"
                  alt=""
                  className="w-full   lg:w-[calc(100%-80px)]  h-full md:h-[350px] mx-auto md:mx-0 z-30 relative object-cover object-left-top"
                />
                <img
                  src="/img/electronics-service1.jpeg"
                  alt=""
                  className="w-full lg:w-[calc(100%-80px)] h-full md:h-[350px] z-30 mx-auto md:ml-auto object-cover lg:absolute left-[15%] top-[45%] mt-7 lg:mt-0 "
                />
              </div>
              {/* <div className="w-[calc(100%-60px)] h-full border-[5px] border-secondaryRed-dark absolute -bottom-10 -right-10 z-10 hidden xl:block"></div> */}
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default Index;
