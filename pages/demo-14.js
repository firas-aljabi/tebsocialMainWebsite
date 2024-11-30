import Layout from "@/components/layout/Layout"
import Brands1_2 from "@/components/sections/Brands1_2"
import Content1_4 from "@/components/sections/Content1_4"
import Content2_13 from "@/components/sections/Content2_13"
import Content3_9 from "@/components/sections/Content3_9"
import Content7_11 from "@/components/sections/Content7_11"
import Content8_5 from "@/components/sections/Content8_5"
import Cta2_5 from "@/components/sections/Cta2_5"
import Faqs2_11 from "@/components/sections/Faqs2_11"
import Hero14 from "@/components/sections/Hero14"
import Pricing1_6 from "@/components/sections/Pricing1_6"
import Reviews3_5 from "@/components/sections/Reviews3_5"
import Services4_5 from "@/components/sections/Services4_5"
import Services8_8 from "@/components/sections/Services8_8"
import Video3_14 from "@/components/sections/Video3_14"

export default function Home14() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={4} headerCls="navbar-light white-scroll">
                <Hero14 />
                <Services4_5 />
                <div className="grey-border"><div className="container"><div className="row"><div className="col b-bottom" /></div></div></div>
                <Content1_4 />
                <Content2_13 />
                <Content7_11 />
                <Pricing1_6 />
                <Content8_5 />
                <Brands1_2 />
                <Content3_9 />
                <Video3_14 />
                <Services8_8 />
                <Reviews3_5 />
                <Faqs2_11 />
                <Cta2_5 />
            </Layout>
        </>
    )
}