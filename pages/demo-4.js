import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Contacts1_1 from "@/components/sections/Contacts1_1"
import Content2_4 from "@/components/sections/Content2_4"
import Content3_2 from "@/components/sections/Content3_2"
import Content4_3 from "@/components/sections/Content4_3"
import Content7_4 from "@/components/sections/Content7_4"
import Content8_1 from "@/components/sections/Content8_1"
import Cta2_2 from "@/components/sections/Cta2_2"
import Faqs2_3 from "@/components/sections/Faqs2_3"
import Hero4 from "@/components/sections/Hero4"
import Pricing1_1 from "@/components/sections/Pricing1_1"
import Reviews3_2 from "@/components/sections/Reviews3_2"
import Services8_2 from "@/components/sections/Services8_2"
import Statistic1_3 from "@/components/sections/Statistic1_3"
import Video3_4 from "@/components/sections/Video3_4"

export default function Home4() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={4} headerCls="navbar-light">
                <Hero4 />
                <Services8_2 />
                <Content2_4 />
                <Content7_4 />
                <Video3_4 />
                <Content8_1 />
                <Pricing1_1 />
                <Content3_2 />
                <Statistic1_3 />
                <Content4_3 />
                <Reviews3_2 />
                <Faqs2_3 />
                <Cta2_2 />
                <Blog1 />
                <Contacts1_1 />
            </Layout>
        </>
    )
}