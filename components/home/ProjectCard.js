import React from "react";

const ProjectCard = ({ data }) => {
    return (
        <>
            <div className='w-full xl:w-[90%] px-4 sm:px-0 mx-auto h-[385px] relative project_card overflow-hidden'>
                <div
                    className="w-full h-full"
                >
                    <img src={data?.img} alt='' className='w-full h-full object-cover' />
                    <div className='w-full h-[50px] bg-black/50 text-white font-medium text-lg uppercase flex justify-center items-center absolute bottom-0 project_heading'>{data?.title}</div>
                </div>
                <div className='w-full h-full bg-secondaryRed/50 absolute top-0 flex justify-center items-center translate-y-[50px] transition-all duration-300 opacity-0 showContent'
                >
                    <div className='w-full bg-black/50 py-5 px-4'>
                        <div className=''>
                            <h5 className='text-xl uppercase text-white font-medium'>{data?.title}</h5>
                            <p className='text-[15px] text-white mt-2'>{data?.desc}</p>
                            <p className='text-[15px] text-white mt-2'>{data?.desc1}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ProjectCard;
