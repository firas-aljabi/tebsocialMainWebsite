import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Brands2_5 from "@/components/sections/Brands2_5"
import Contacts2_1 from "@/components/sections/Contacts2_1"
import Content2_7 from "@/components/sections/Content2_7"
import Content4_4 from "@/components/sections/Content4_4"
import Content7_7 from "@/components/sections/Content7_7"
import Faqs1_2 from "@/components/sections/Faqs1_2"
import Hero7 from "@/components/sections/Hero7"
import Pricing1_4 from "@/components/sections/Pricing1_4"
import Reviews1_2 from "@/components/sections/Reviews1_2"
import Services5_1 from "@/components/sections/Services5_1"
import Services8_5 from "@/components/sections/Services8_5"
import Statistic1_5 from "@/components/sections/Statistic1_5"
import Video3_7 from "@/components/sections/Video3_7"

export default function Home7() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="navbar-dark white-scroll">
                <Hero7 />
                <Brands2_5 />
                <Content2_7 />
                <Services5_1 />
                <Content7_7 />
                <Statistic1_5 />
                <Content4_4 />
                <Pricing1_4 />
                <Services8_5 />
                <Video3_7 />
                <Reviews1_2 />
                <Faqs1_2 />
                <Blog1 />
                <Contacts2_1 />
            </Layout>
        </>
    )
}