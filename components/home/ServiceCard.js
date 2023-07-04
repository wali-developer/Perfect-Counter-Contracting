import React from "react";

const ServiceCard = ({ service, language }) => {
  return (
    <>
      <div className="w-full xl:w-[97%] mx-auto px-5 hover:scale-110 transition-all duration-300 py-10">
        <div className="w-full shadow-[0px_0px_20px_5px_#1A649B14] pb-10 rounded-lg overflow-hidden z-20 sm:mx-auto lg:h-[470px]">
          <img
            src={service?.img}
            alt=""
            className="w-full object-cover object-top h-[200px]"
          />
          <div
            className={`px-6 mt-7 ${language == "en" ? "text-left" : "text-right"
              }`}
          >
            <h5 className="text-lg sm:text-xl font-barlow text-darkBlue font-semibold my-3 text-center">
              {service?.title}
            </h5>
            <p className="text-sm mt-1 leading-relaxed sm:text-[15px] text-darkGray">{service?.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
