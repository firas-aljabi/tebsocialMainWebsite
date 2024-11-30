import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import PageHead from './PageHead'
import StickyForm from "./StickyForm"
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Footer3 from "./footer/Footer3"
import Footer4 from "./footer/Footer4"
import Footer5 from "./footer/Footer5"
import Header1 from "./header/Header1"

export default function Layout({ headerStyle, footerStyle, headTitle, noTra, children, headerCls, language, setLanguage }) {
    const [scroll, setScroll] = useState(0);
    const [isMobileMenu, setMobileMenu] = useState(false);
    const handleMobileMenu = () => setMobileMenu(!isMobileMenu);

    useEffect(() => {
        const WOW = require('wowjs');
        window.wow = new WOW.WOW({
            live: false,
        });
        window.wow.init();

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    }, [scroll]);

    return (
        <>
            <PageHead headTitle={headTitle} />
            <div id="page" className="page">
                {!headerStyle && (
                    <Header1
                        scroll={scroll}
                        isMobileMenu={isMobileMenu}
                        handleMobileMenu={handleMobileMenu}
                        headerCls={headerCls}
                        noTra={noTra}
                        language={language}
                        setLanguage={setLanguage}
                    />
                )}
                {headerStyle === 1 ? (
                    <Header1
                        scroll={scroll}
                        isMobileMenu={isMobileMenu}
                        handleMobileMenu={handleMobileMenu}
                        headerCls={headerCls}
                        noTra={noTra}
                        language={language}
                        setLanguage={setLanguage}
                    />
                ) : null}

                <main className="main">{children}</main>

                {!footerStyle && <Footer1 />}
              
                {footerStyle === 3 ? <Footer3 language={language}/> : null}
             

                <BackToTop />
             
            </div>
        </>
    );
}