import Layout from "@/components/layout/Layout"
import Brands2_1 from "@/components/sections/Brands2_1"
import Content10_1 from "@/components/sections/Content10_1"
import Content1_1 from "@/components/sections/Content1_1"
import Content2_1 from "@/components/sections/Content2_1"
import Content4_1 from "@/components/sections/Content4_1"
import Content7_1 from "@/components/sections/Content7_1"
import Cta2_1 from "@/components/sections/Cta2_1"
import Faqs2_1 from "@/components/sections/Faqs2_1"
import Hero1 from "@/components/sections/Hero1"
import Reviews3_1 from "@/components/sections/Reviews3_1"
import Services7_1 from "@/components/sections/Services7_1"
import Statistic1_1 from "@/components/sections/Statistic1_1"
import Video3_1 from "@/components/sections/Video3_1"

export default function Home1() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="navbar-dark">
                <Hero1 />
                <Content2_1 />
                <Services7_1 />
                <Content7_1 />
                <Statistic1_1 />
                <Content4_1 />
                <Reviews3_1 />
                <Content10_1 />
                <Video3_1 />
                <Brands2_1 />
                <Content1_1 />
                <Faqs2_1 />
                <Cta2_1 />
            </Layout>
        </>
    )
}