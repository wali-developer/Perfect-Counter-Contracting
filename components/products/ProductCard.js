import React from "react";

const ProductCard = ({ product }) => {
    return (
        <>
            <div className="w-full sm:w-[47%] md:[31%] xl:w-[23.5%] mx-auto text-center bg-white px-4 py-5 rounded-lg">
                <img src={product?.img} alt="" className="w-[316px] h-[170px] object-cover" />
                <div className="pt-5">
                    <h1 className='text-[20px] font-semibold  text-darkBlue'>{product?.title}</h1>
                    <p className='mt-1 text-sm text-darkGray'>{product?.desc}</p>
                </div>
            </div>
        </>
    )
};

export default ProductCard;
