import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import Hero15 from "@/components/sections/Hero15";
import Services8_9 from "@/components/sections/Services8_9";
import Content2_14 from "@/components/sections/Content2_14";
import Content7_12 from "@/components/sections/Content7_12";
import Video3_15 from "@/components/sections/Video3_15";
import Content8_6 from "@/components/sections/Content8_6";
import Pricing1_7 from "@/components/sections/Pricing1_7";
import Content1_5 from "@/components/sections/Content1_5";
import Statistic1_10 from "@/components/sections/Statistic1_10";
import Brands1_3 from "@/components/sections/Brands1_3";
import Reviews2_8 from "@/components/sections/Reviews2_8";
import Faqs2_12 from "@/components/sections/Faqs2_12";
import Cta2_6 from "@/components/sections/Cta2_6";
import Blog1 from "@/components/sections/Blog1";
import Contacts1_3 from "@/components/sections/Contacts1_3";

export default function Home() {
    const [language, setLanguage] = useState("en");
useEffect(()=>{
if(localStorage.getItem('lang' )!='ar' &&localStorage.getItem('lang' )!='en'){
    setLanguage('en')
}
else{
    setLanguage(localStorage.getItem('lang'))
}
},[])
    useEffect(() => {
        const WOW = require("wowjs");
        window.wow = new WOW.WOW({
            live: false,
        });
        window.wow.init();
    }, []);

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
        localStorage.setItem('lang',lang)
        console.log(`Language switched to: ${lang}`);
    };

    return (
        <Layout
            headerStyle={1}
            footerStyle={3}
            headerCls="navbar-dark"
            language={language}
            setLanguage={handleLanguageChange}
        >
            <Hero15   language={language}/>
            <Services8_9 language={language}/>
            <Content2_14 language={language}/>
            <Content7_12 language={language} />
           
        
            <Content1_5 language={language}/>
            <Statistic1_10 language={language}/>
          
            <Reviews2_8 language={language}/>
           
            <Cta2_6 language={language}/>
            <Contacts1_3 language={language}/>
        </Layout>
    );
}