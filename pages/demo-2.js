import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Brands2_2 from "@/components/sections/Brands2_2"
import Content1_2 from "@/components/sections/Content1_2"
import Content2_2 from "@/components/sections/Content2_2"
import Content6_1 from "@/components/sections/Content6_1"
import Content7_2 from "@/components/sections/Content7_2"
import Cta1_1 from "@/components/sections/Cta1_1"
import Faqs2_2 from "@/components/sections/Faqs2_2"
import Hero2 from "@/components/sections/Hero2"
import Reviews2_1 from "@/components/sections/Reviews2_1"
import Services1_1 from "@/components/sections/Services1_1"
import Services8_1 from "@/components/sections/Services8_1"
import Statistic2_1 from "@/components/sections/Statistic2_1"
import Video3_2 from "@/components/sections/Video3_2"

export default function Home2() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={4} headerCls="navbar-light">
                <Hero2 />
                <Services1_1 />
                <div className="grey-border">
                    <div className="container"><div className="row"><div className="col b-bottom" /></div></div>
                </div>
                <Content1_2 />
                <Content6_1 />
                <Content7_2 />
                <Content2_2 />
                <Services8_1 />
                <Statistic2_1 />
                <Reviews2_1 />
                <Video3_2 />
                <Brands2_2 />
                <Faqs2_2 />
                <Blog1 />
                <Cta1_1 />
            </Layout>
        </>
    )
}