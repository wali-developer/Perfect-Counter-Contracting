import React from "react";
import Layout from '../components/Layout';
import ProductCard from "../components/products/ProductCard";
import { products } from "../utils/data";
import useTranslation from 'next-translate/useTranslation';

const Product = () => {
    const { t } = useTranslation('product');

    return (
        <Layout>
            <section className="w-full bg-[#E9ECE8]/50 pb-16">
                <div className="w-full relative px-5 md:px-0">
                    <div className='w-52 h-52 rounded-full bg-secondaryRed/30 blur-2xl absolute -bottom-20 right-40 -z-10'></div>
                    <img src='/img/arrow2.png' alt='' className='absolute top-12 right-10 -z-10 -rotate-0' />
                    <div className="w-full md:w-[700px] mx-auto text-center pt-10 pb-5 relative">

                        <h1 className='text-xl sm:text-[25px] font-bold  text-darkBlue'>{t('our_products')}</h1>
                        <p className='mt-3 text-sm sm:text-base text-darkBlack'>{t('desc')}</p>
                    </div>
                </div>

                {/* products */}
                <div className="mt-12 w-full md:w-[90%] mx-auto flex flex-wrap gap-y-6 px-5 sm:px-0">
                    {products.map((prod, index) => (
                        <ProductCard key={index + ""} product={prod} />
                    ))}
                </div>
            </section>
        </Layout>
    )
};

export default Product;
