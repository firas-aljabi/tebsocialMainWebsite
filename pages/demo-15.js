import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Brands1_3 from "@/components/sections/Brands1_3"
import Contacts1_3 from "@/components/sections/Contacts1_3"
import Content1_5 from "@/components/sections/Content1_5"
import Content2_14 from "@/components/sections/Content2_14"
import Content7_12 from "@/components/sections/Content7_12"
import Content8_6 from "@/components/sections/Content8_6"
import Cta2_6 from "@/components/sections/Cta2_6"
import Faqs2_12 from "@/components/sections/Faqs2_12"
import Hero15 from "@/components/sections/Hero15"
import Pricing1_7 from "@/components/sections/Pricing1_7"
import Reviews2_8 from "@/components/sections/Reviews2_8"
import Services8_9 from "@/components/sections/Services8_9"
import Statistic1_10 from "@/components/sections/Statistic1_10"
import Video3_15 from "@/components/sections/Video3_15"

export default function Home15() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="navbar-dark">
                <Hero15 />
                <Services8_9 />
                <Content2_14 />
                <Content7_12 />
                <Video3_15 />
                <Content8_6 />
                <Pricing1_7 />
                <Content1_5 />
                <Statistic1_10 />
                <Brands1_3 />
                <Reviews2_8 />
                <Faqs2_12 />
                <Cta2_6 />
                <Blog1 />
                <Contacts1_3 />
            </Layout>
        </>
    )
}