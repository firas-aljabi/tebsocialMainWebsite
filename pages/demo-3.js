import Layout from "@/components/layout/Layout"
import Content2_3 from "@/components/sections/Content2_3"
import Content3_1 from "@/components/sections/Content3_1"
import Content4_2 from "@/components/sections/Content4_2"
import Content7_3 from "@/components/sections/Content7_3"
import Cta3_1 from "@/components/sections/Cta3_1"
import Faqs1_1 from "@/components/sections/Faqs1_1"
import Hero3 from "@/components/sections/Hero3"
import Reviews1_1 from "@/components/sections/Reviews1_1"
import Services4_1 from "@/components/sections/Services4_1"
import Statistic1_2 from "@/components/sections/Statistic1_2"
import Video3_3 from "@/components/sections/Video3_3"

export default function Home3() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="navbar-dark">
                <Hero3 />
                <Services4_1 />
                <Content3_1 />
                <Content2_3 />
                <Statistic1_2 />
                <Content7_3 />
                <Content4_2 />
                <Reviews1_1 />
                <Video3_3 />
                <Faqs1_1 />
                <Cta3_1 />
            </Layout>
        </>
    )
}