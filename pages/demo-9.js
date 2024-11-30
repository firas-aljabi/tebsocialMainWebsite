import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Brands2_6 from "@/components/sections/Brands2_6"
import Contacts2_2 from "@/components/sections/Contacts2_2"
import Content2_9 from "@/components/sections/Content2_9"
import Content4_6 from "@/components/sections/Content4_6"
import Content7_8 from "@/components/sections/Content7_8"
import Content8_3 from "@/components/sections/Content8_3"
import Faqs2_7 from "@/components/sections/Faqs2_7"
import Hero9 from "@/components/sections/Hero9"
import Reviews3_4 from "@/components/sections/Reviews3_4"
import Services7_2 from "@/components/sections/Services7_2"
import Statistic1_7 from "@/components/sections/Statistic1_7"
import Video3_9 from "@/components/sections/Video3_9"

export default function Home9() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={4} headerCls="navbar-dark white-scroll">
                <Hero9 />
                <Content2_9 />
                <Services7_2 />
                <Content7_8 />
                <Statistic1_7 />
                <Content4_6 />
                <Reviews3_4 />
                <Content8_3 />
                <Video3_9 />
                <Brands2_6 />
                <Faqs2_7 />
                <Blog1 />
                <Contacts2_2 />
            </Layout>
        </>
    )
}