import Layout from "@/components/layout/Layout"
import Brands2_3 from "@/components/sections/Brands2_3"
import Content10_2 from "@/components/sections/Content10_2"
import Content2_5 from "@/components/sections/Content2_5"
import Content3_3 from "@/components/sections/Content3_3"
import Content7_5 from "@/components/sections/Content7_5"
import Cta2_3 from "@/components/sections/Cta2_3"
import Faqs2_4 from "@/components/sections/Faqs2_4"
import Hero5 from "@/components/sections/Hero5"
import Pricing1_2 from "@/components/sections/Pricing1_2"
import Reviews2_2 from "@/components/sections/Reviews2_2"
import Services4_2 from "@/components/sections/Services4_2"
import Services8_3 from "@/components/sections/Services8_3"
import Statistic2_2 from "@/components/sections/Statistic2_2"
import Video3_5 from "@/components/sections/Video3_5"

export default function Home5() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="navbar-dark">
                <Hero5 />
                <Brands2_3 />
                <Content2_5 />
                <Content7_5 />
                <Services4_2 />
                <Video3_5 />
                <Content3_3 />
                <Pricing1_2 />
                <Services8_3 />
                <Statistic2_2 />
                <Content10_2 />
                <Reviews2_2 />
                <Faqs2_4 />
                <Cta2_3 />
            </Layout>
        </>
    )
}