import Layout from "@/components/layout/Layout"
import Content1_3 from "@/components/sections/Content1_3"
import Content2_12 from "@/components/sections/Content2_12"
import Content4_9 from "@/components/sections/Content4_9"
import Cta3_3 from "@/components/sections/Cta3_3"
import Faqs2_10 from "@/components/sections/Faqs2_10"
import Hero13 from "@/components/sections/Hero13"
import Newsletter1 from "@/components/sections/Newsletter1"
import Reviews2_7 from "@/components/sections/Reviews2_7"
import Services5_2 from "@/components/sections/Services5_2"
import Video3_13 from "@/components/sections/Video3_13"

export default function Home13() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={4} headerCls="navbar-light white-scroll">
                <Hero13 />
                <Content1_3 />
                <Content4_9 />
                <Video3_13 />
                <Content2_12 />
                <Services5_2 />
                <Faqs2_10 />
                <Cta3_3 />
                <Reviews2_7 />
                <Newsletter1 />
            </Layout>
        </>
    )
}