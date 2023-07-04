import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import useTranslation from 'next-translate/useTranslation';

const Layout = ({ children }) => {
    const { t } = useTranslation('layout');
    return (
        <div>
            <Navbar t={t} />
            {children}
            <Footer t={t} />
        </div>
    )
};

export default Layout;
