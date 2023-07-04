import React, { useState } from "react";
import Layout from "../components/Layout";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const templateParams = {
  name: "James",
  notes: "Check this out!",
};

const Index = () => {
  const router = useRouter();
  const { t } = useTranslation("contact");
  const language = router.locale;

  const contactsData = [
    {
      title: t("our_location"),
      description: t("address"),
      description2: "",
      description3: "",
      imagePath: "/img/contactslocationicon.png",
      imgStyle: "w-[17px] h-[25px]",
    },
    {
      title: t("phone_number"),
      description: "+966 59 428 6920",
      description2: "+966 59 079 2026",
      description3: "+966 55 151 4679",
      imagePath: "/img/contactsphoneicon.png",
      imgStyle: "w-[23px] h-[24px]",
    },
    {
      title: t("email_address"),
      description: "sales@perfectcounter.net",
      description2: "",
      description3: "",
      imagePath: "/img/contactemailicon.png",
      imgStyle: "w-[20px] h-[15px]",
    },
  ];

  const [emailPayload, setEmailPayload] = useState({
    from_name: "",
    email_address: "",
    mobile_number: "",
    support_message: "",
  });

  const sendEmail = async () => {
    if (
      emailPayload?.from_name == "" ||
      emailPayload?.email_address == "" ||
      emailPayload?.mobile_number == "" ||
      emailPayload?.support_message == ""
    ) {
      Swal.fire("Please fill all fields.");
      return;
    }

    emailjs
      .send(
        "service_l2w3xul",
        "template_yznph0j",
        emailPayload,
        "ITzW50eo8tgpNekcZ"
      )
      .then(
        function (response) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Email has been sent successfully.",
            showConfirmButton: false,
            timer: 5000,
          });
          setEmailPayload({
            from_name: "",
            email_address: "",
            mobile_number: "",
            support_message: "",
          });
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <Layout>
      <section className="w-full px-5 sm:px-0 bg-white">
        <div className="w-full sm:h-[400px] relative">
          <img
            src="/img/contact-header.jpg"
            alt=""
            className="w-full h-full object-cover object-top"
          />
          <div className="w-full h-full bg-[#607799]/90 absolute top-0"></div>
          <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <h1 className="text-white font-barlow text-[40px] sm:text-[70px] font-semibold">
              {t("Contact_Us")}
            </h1>
          </div>
        </div>
      </section>
      <div className="w-full mt-16">
        <div className="w-full relative ">
          <img
            src="/img/arrow2.png"
            alt=""
            className="absolute top-12 right-5 -z-10 -rotate-0"
          />

          {/* White card start */}
          <div className="w-full sm:pl-[20px] lg:pl-[51px] pr-[20px] lg:pr-[50px] pb-[51px] relative  px-5 xl:px-0 pt-8">
            <div className="w-full xl:w-[85%] mx-auto flex gap-y-10 flex-col md:flex-row xl:pl-0">
              {/* Bg */}
              <div className="absolute inset-0"></div>
              {/* Left */}
              <div className="flex-1 z-40 ">
                <div className="max-w-[466px]">
                  <h1
                    className={`text-[40px] font-[600] leading-[40px] font-barlow text-darkBlue ${language == "en" ? "text-left" : "text-right"
                      }`}
                  >
                    {t("get_in_touch_with_us")}
                  </h1>
                  <hr className="my-5 w-[100px] h-[5px] bg-secondaryRed-dark"></hr>
                  <p
                    className={`text-[#000000] text-base leading-relaxed mt-[10px] text-left opacity-95 ${language == "en" ? "text-left" : "text-right"
                      }`}
                  >
                    {t("para")}
                  </p>
                  <div className="mt-[38px] flex flex-col space-y-[26px]">
                    {contactsData?.map((item, index) => {
                      return (
                        <div
                          key={index + ""}
                          className="flex flex-row space-x-[20px]"
                        >
                          <div
                            className="h-[52px] w-[52px] bg-[#0C2A68] rounded-[10px] flex items-center justify-center opacity-70"
                            style={{
                              "box-shadow": "0px 3px 6px #00000029",
                            }}
                          >
                            <img
                              src={item?.imagePath}
                              className={item?.imgStyle}
                              alt=""
                            />
                          </div>
                          <div className="max-w-[176px]">
                            <h5 className="text-to-black font-barlow text-lg font-bold">
                              {item?.title}
                            </h5>
                            <p className="text-[#000000] text-xs text-left opacity-95">
                              {item?.description}
                            </p>
                            <p className="text-[#000000] text-xs text-left opacity-95">
                              {item?.description2}
                            </p>
                            <p className="text-[#000000] text-xs text-left opacity-95">
                              {item?.description3}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* Right */}
              <div className="flex-1 z-40 relative ">
                <div
                  className=" max-w-[566px] bg-[#4f699d] rounded-lg  relative overflow-hidden  "
                  style={{
                    boxShadow: "0px 25px 44px #00000029",
                  }}
                >
                  {/* <div className='bg-[#4f699d] absolute inset-0 '></div> */}
                  <div className="flex flex-col space-y-[15px] px-5 md:px-[52px] py-[22px] ">
                    <CustomeInput
                      title={t("full_name")}
                      placeholder={t("enter_your_name")}
                      callBack={(val) =>
                        setEmailPayload({ ...emailPayload, from_name: val })
                      }
                      value={emailPayload?.from_name}
                    />
                    <CustomeInput
                      title={t("email_address")}
                      placeholder={t("enter_your_email")}
                      callBack={(val) =>
                        setEmailPayload({ ...emailPayload, email_address: val })
                      }
                      value={emailPayload?.email_address}
                    />
                    <CustomeInput
                      title={t("mobile_number")}
                      placeholder={t("enter_mobile_number")}
                      callBack={(val) =>
                        setEmailPayload({ ...emailPayload, mobile_number: val })
                      }
                      value={emailPayload?.mobile_number}
                    />
                    <CustomeInput
                      title={t("support_message")}
                      placeholder={t("enter_your_message")}
                      callBack={(val) =>
                        setEmailPayload({
                          ...emailPayload,
                          support_message: val,
                        })
                      }
                      largtext
                      value={emailPayload?.support_message}
                    />
                    <div
                      className="cursor-pointer bg-white py-2 rounded-full w-[120px] flex items-center justify-center "
                      onClick={() => sendEmail()}
                    >
                      <h1 className="text-[#4f699d] font-medium">
                        {t("send")}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* White card end */}
        </div>
      </div>

      <div className="w-full xl:w-[85%] mx-auto px-5 lg:px-0">
        <div className="w-full h-[500px] mt-10 mb-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.596849227443!2d46.79361293205429!3d24.828946973709705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3f834774391b3b9!2zMjTCsDQ5JzQ0LjIiTiA0NsKwNDcnMjUuNyJF!5e0!3m2!1sar!2ssa!4v1673680510228!5m2!1sar!2ssa"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="shadow-[3px_3px_18px_#1A649B14]"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

const CustomeInput = ({ title, placeholder, callBack, largtext, value }) => {
  return (
    <div className=" relative">
      <h1 className="text-white font-normal text-base">{title}</h1>
      {!largtext ? (
        <input
          className="mt-[6px] bg-white w-full max-w-[452px] h-[50px] rounded-lg px-[20px] outline-none border-none"
          placeholder={placeholder}
          onChange={(e) => callBack(e.target.value)}
          value={value}
        />
      ) : (
        <textarea
          className="mt-[6px] bg-white w-full max-w-[452px] min-h-[130px] py-[10px] rounded-lg px-[20px] outline-none border-none"
          placeholder={placeholder}
          onChange={(e) => callBack(e.target.value)}
          value={value}
        />
      )}
    </div>
  );
};

export default Index;
