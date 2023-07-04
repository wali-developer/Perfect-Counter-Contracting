import Head from "next/head";
import Layout from "../components/Layout";
import Slider from "react-slick";
import { useRouter } from "next/router";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { clientsLogos, projects, services, specializations } from "../utils/data";
import ProjectCard from "../components/home/ProjectCard";
import ServiceCard from "../components/home/ServiceCard";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation("home");
  const language = router.locale;

  const servicesData = services();
  const specializationsData = specializations();
  const projectsData = projects();

  // console.log("t from home", t('service1_title'));

  const sliderData = [
    {
      title: t("slider1_title"),
      desc: t("slider1_desc"),
      className: "slider1",
      img: "/img/construction-bg.jpg",
    },
    {
      title: t("slider2_title"),
      desc: t("slider2_desc"),
      className: "slider2",
      img: "/img/slider1.png",
    },
    {
      title: t("slider3_title"),
      desc: t("slider3_desc"),
      className: "slider5",
      img: "/img/quality.jpg",
    },
    {
      title: t("slider4_title"),
      desc: t("slider4_desc"),
      className: "slider3",
      img: "/img/safety-bg.jpg",
    },

    {
      title: t("slider5_title"),
      desc: t("slider5_desc"),
      className: "slider4",
      img: "/img/technical-bg.jpg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    pauseOnHover: true,
  };

  const rowSliderSettings = {
    // dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    draggable: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // autoplay: true,
    // pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout>
        <section className="w-full h-[333px] sm:h-[555px] bg-transparent">
          <Slider {...settings}>
            {sliderData?.map((item, index) => (
              <div className="relative w-full" key={index + ""}>
                <div
                  className={`w-full h-[333px] sm:h-[555px] flex items-center sliderBg ${item?.className}`}
                >
                  <div
                    className={`w-full sm:w-[500px] h-full pr-8 ml-5 md:pr-0 md:ml-[170px] z-10 translate-y-[40%] sm:translate-y-[35%] ${language == "ar" ? "xl:translate-x-[100%]" : ""
                      }`}
                    key={index + ""}
                  >
                    <h1
                      className={`font-roboto text-[25px] sm:text-[45px] font-bold text-gray-100 leading-[25px] sm:leading-[52px] ${language == "en" ? "text-left" : "text-right"
                        }`}
                    >
                      {item?.title}
                    </h1>
                    <p
                      className={`text-sm sm:text-base mt-3 text-gray-200 ${language == "en" ? "text-left" : "text-right"
                        }`}
                    >
                      {item?.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>

        {/* Introduction */}
        <section className="w-full pt-12 md:pt-28 relative px-5 sm:px-0" dir={language == 'ar' ? "rtl" : "ltr"}>
          <div className="w-full md:w-[90%] sm:mx-auto flex items-start flex-wrap gap-y-10 gap-x-10 xl:gap-x-20 rounded-[10px] py-5 sm:px-5">
            <div className="w-36 h-36 rounded-full bg-secondaryRed/40 blur-2xl absolute top-0 left-1/4 -z-10"></div>
            <div className="w-full lg:flex-1 sm:px-7 z-20">
              <h1
                className={`text-[30px] leading-[35px] sm:text-[40px] font-[600] sm:leading-[40px] font-barlow text-darkBlue ${language == "en" ? "text-left" : "text-right"
                  }`}
              >
                {t('about_us')}
              </h1>
              <hr className={`my-5 w-[100px] h-[5px] bg-secondaryRed-dark`}></hr>
              <h3
                className={`text-[24px] font-[600] font-barlow text-black mb-5 ${language == "en" ? "text-left" : "text-right"
                  }`}
              >
                {t('sub_title')}
              </h3>
              <p
                className={`text-darkBlack text-sm sm:text-base mt-3 ${language == "en" ? "text-left" : "text-right"
                  }`}
              >
                {t("about_paragraph1")}
              </p>
              <p className="text-darkBlack mt-4 text-sm sm:text-base">
                {t("about_paragraph2")}

              </p>
              <hr className="w-full h-[1px] bg-darkGray mt-10 sm:mt-16"></hr>
              <div className="flex gap-x-2 mt-8">
                <img src="/img/call.png" alt="" className="w-[20px]" />
                <p className="text-base text-darkBlack font-medium">Reach Us</p>
              </div>
              <h2 className="text-black text-[25px] sm:text-[32px] font-semibold font-barlow mt-3">
                +966 59 428 6920
              </h2>
            </div>
            <div className="xl:w-1/2 w-full sm:flex-1 relative backgroundArrow  h-auto lg:h-[500px] 2xl:h-auto">
              <img
                src="/img/arrow.png"
                alt=""
                className="hidden sm:block absolute -top-[170px]"
              />
              <img
                src="/img/about.png"
                alt=""
                className="w-full h-full z-30 relative rounded-lg md:mx-0 mx-auto"
              />
              <div
                className="w-[calc(100%-60px)] h-full border-[5px] border-darkYellow rounded-lg absolute -bottom-16 -right-10 z-10 
              rounded-br-[10px] hidden xl:block"
              ></div>
            </div>
          </div>
        </section>

        {/* who we are */}
        <section className="w-full mt-28 xl:mt-52 my-16 relative px-5 sm:px-0" dir={language == 'ar' ? "rtl" : "ltr"}>
          <div className="w-full md:w-[90%] md:mx-auto">
            <div className="w-36 h-36 rounded-full bg-secondaryRed/30 blur-2xl absolute -top-20 right-24 z-10"></div>
            <img
              src="/img/arrow.png"
              alt=""
              className="absolute -top-20 left-0 -z-10"
            />

            <div className=" py-10 rounded-br-5xl mt-20 bg-white flex flex-wrap items-center justify-between xl:flex-nowrap gap-x-8 gap-y-12">
              <div className="w-full lg:w-[45%] relative">
                <img
                  src="/img/specialization.jpeg"
                  alt=""
                  className="z-30 relative w-full md:h-[550px] object-cover"
                />
                <div
                  className="w-[calc(100%-0px)] h-[calc(100%+140px)] border-[5px] border-darkYellow absolute
                 -top-16 -right-10 z-10 hidden xl:block"
                ></div>
              </div>
              <div className="w-full lg:w-[45%] bg-transparent">
                <div className="w-full text-left">
                  <h1
                    className={`text-[30px] leading-[35px] sm:text-[40px] font-[600] sm:leading-[40px] font-barlow text-darkBlue ${language == "en" ? "text-left" : "text-right"
                      }`}
                  >
                    {t("area_of_expertise")}
                  </h1>
                  <hr className="my-5 w-[100px] h-[5px] bg-secondaryRed-dark"></hr>
                  <p className="text-darkGray mt-3 text-sm sm:text-base">
                    {t("expertise_para")}
                  </p>
                </div>
                <div className="w-full flex flex-row flex-wrap gap-7 mt-12">
                  {specializationsData.map((item, index) => (
                    <div
                      className="w-full md:w-[calc(50%-15px)] flex gap-x-3"
                      key={index + ""}
                    >
                      <div className="w-[50px] h-[50px]">
                        <i
                          className={`${item?.icon} text-2xl sm:text-3xl text-secondaryRed-dark`}
                        ></i>
                      </div>
                      <div className="w-full">
                        <h5 className="text-xl font-semibold text-black font-barlow">
                          {item?.title}
                        </h5>
                        <p className="text-sm sm:text-base text-darkGray">{item?.desc}</p>
                      </div>
                    </div>
                  ))}
                  <div
                    className="w-full md:w-[calc(50%-15px)] flex gap-x-3"
                  >
                    <div className="w-[50px] h-[50px]">
                      <i
                        className={`fa-solid fa-plant-wilt text-2xl sm:text-3xl text-secondaryRed-dark`}
                      ></i>
                    </div>
                    <div className="w-full">
                      <h5 className="text-xl font-semibold text-black font-barlow">
                        {t("contracting")}
                      </h5>
                      <div className="mt-3">
                        <div className="flex gap-x-3 items-center mt-[4px]">
                          <span className="w-4 h-[3px] bg-secondaryRed-dark"></span>
                          <p className="text-sm sm:text-base text-darkGray">{t("civil")}</p>
                        </div>
                        <div className="flex gap-x-3 items-center mt-[3px]">
                          <span className="w-4 h-[3px] bg-secondaryRed-dark"></span>
                          <p className="text-sm sm:text-base text-darkGray">{t("electronics")}</p>
                        </div>
                        <div className="flex gap-x-3 items-center mt-[3px]">
                          <span className="w-4 h-[3px] bg-secondaryRed-dark"></span>
                          <p className="text-sm sm:text-base text-darkGray">{t("elecrical")}</p>
                        </div>
                        <div className="flex gap-x-3 items-center mt-[3px]">
                          <span className="w-4 h-[3px] bg-secondaryRed-dark"></span>
                          <p className="text-sm sm:text-base text-darkGray">{t("mechanical")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services / Products */}
        <section className="w-full my-16 mt-28 xl:mt-48 relative px-5 xl:px-0" dir={language == 'ar' ? "rtl" : "ltr"}>
          <div className="w-full xl:w-[90%] md:mx-auto">
            <div className="w-48 h-48 rounded-full bg-secondaryRed/40 blur-2xl absolute top-12 right-0 -z-10"></div>
            <img
              src="/img/arrow2.png"
              alt=""
              className="absolute top-0 left-0 -z-10"
            />
            <div className="w-full">
              <div className="text-center">
                <h1 className="text-base text-center sm:text-[18px] font-semibold text-secondaryRed">
                  {t("product_services")}
                </h1>
                <h1
                  className={`text-[30px] inline-flex justify-center leading-[35px] sm:text-[40px] font-[600] sm:leading-[40px] text-center font-barlow text-darkBlue mt-2 ${language == "en" ? "text-left" : "text-right"
                    }`}
                >
                  {t("what_we_offer")}
                </h1>
                <hr className="my-5 w-[70px] sm:w-[100px] h-[5px] bg-secondaryRed-dark mx-auto"></hr>
              </div>
              <div className="mt-10 z-50 bg-transparent ">
                <Slider {...rowSliderSettings}>
                  {servicesData.map((service, index) => (
                    <ServiceCard
                      service={service}
                      key={index + ""}
                      language={language}
                    />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="w-full py-10 relative bg-light-bg px-5 sm:px-0" id="projects" dir={language == 'ar' ? "rtl" : "ltr"}>
          <div className="w-full md:w-[90%] md:mx-auto">
            <div className="w-full">
              <div className="text-center">
                <h1 className="text-base sm:text-[18px] font-semibold text-secondaryRed">
                  {t("Projects")}
                </h1>
                <h1
                  className={`text-[30px] leading-[35px] sm:text-[40px] font-[600] sm:leading-[40px] text-center font-barlow inline-flex justify-center text-darkBlue mt-2 ${language == "en" ? "text-left" : "text-right"
                    }`}
                >
                  {t("work_we_have_done")}
                </h1>
                <hr className="my-5 w-[70px] sm:w-[100px] h-[5px] bg-secondaryRed-dark mx-auto"></hr>
                <div className="mt-10 z-50 bg-transparent ">
                  <Slider {...rowSliderSettings}>
                    {projectsData?.map((item, index) => (
                      <ProjectCard data={item} key={index + ""} />
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ====== Clients Section Start --> */}
        <section class="pt-14 sm:pt-20 lg:pt-32 " dir={language == 'ar' ? "rtl" : "ltr"}>
          <div class="px-4">
            {/* <!-- Section Title --> */}
            <div
              class="relative mx-auto mb-16 max-w-[680px] text-center"
              data-wow-delay=".2s"
            >
              <h2
                class="mb-5 font-heading text-[38px] font-semibold leading-tight text-black"
              >
                {t('Trusted_by_Clients')}
              </h2>
              <p class="text-base text-black">
                {t("trusted_desc")}
              </p>
            </div>
            <div class="border-b pb-24 border-[#2E333D]">
              <div class="flex flex-wrap" data-wow-delay=".2s">
                <div class="w-full px-4">
                  <div class="flex flex-wrap gap-x-8 gap-y-10 items-center justify-center">
                    {clientsLogos.map((item, index) => (
                      <img
                        key={index + ""}
                        src={item?.img}
                        alt="image"
                        class="h-[100px] w-[130px] last:ml-5 dark:block object-contain"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ====== Clients Section End --> */}

        {/* Get in touch */}
        <section className="w-full mb-16 mt-24 relative px-5 sm:px-0" dir={language == 'ar' ? "rtl" : "ltr"}>
          <div className="w-full md:w-[90%] md:mx-auto">
            <div className="w-48 h-48 rounded-full bg-secondaryRed/40 blur-2xl absolute -bottom-20 -left-10 -z-10"></div>
            <img
              src="/img/arrow2.png"
              alt=""
              className="absolute top-20 right-0 -z-10 -rotate-45"
            />
            <div className="w-full">
              <div className="text-center px-5 md:w-[650px] mx-auto">
                <h1 className="text-base sm:text-[20px] font-semibold text-secondaryRed">
                  {t("reach_us")}
                </h1>
              </div>
              <div className="w-full h-[400px] mt-5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.596849227443!2d46.79361293205429!3d24.828946973709705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3f834774391b3b9!2zMjTCsDQ5JzQ0LjIiTiA0NsKwNDcnMjUuNyJF!5e0!3m2!1sar!2ssa!4v1673680510228!5m2!1sar!2ssa"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="shadow-[3px_3px_18px_#1A649B14] rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

      </Layout>

    </>
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="flex justify-center items-center bg-[#D38312]/80 rounded-full w-[60px] h-[60px] absolute -right-2 top-1/2 translate-y-[-50%] cursor-pointer"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#fff"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="flex justify-center items-center bg-[#D38312]/80 rounded-full w-[60px] h-[60px] absolute -left-2 top-1/2 translate-y-[-50%] z-[99] cursor-pointer"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#fff"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </div>
  );
}
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="flex justify-center items-center border border-white rounded-full w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] absolute right-5 bottom-5 md:right-10 md:top-1/2 md:translate-y-[-50%] cursor-pointer"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#fff"
        className="w-5 h-5 sm:w-6 sm:h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="flex justify-center items-center border border-white rounded-full w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] absolute right-20 sm:right-24 bottom-5 md:left-10 md:top-1/2 md:translate-y-[-50%] z-[99] cursor-pointer"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#fff"
        className="w-5 h-5 sm:w-6 sm:h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </div>
  );
}
