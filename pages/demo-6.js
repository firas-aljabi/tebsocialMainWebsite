import Layout from "@/components/layout/Layout"
import Brands2_4 from "@/components/sections/Brands2_4"
import Content2_6 from "@/components/sections/Content2_6"
import Content3_4 from "@/components/sections/Content3_4"
import Content7_6 from "@/components/sections/Content7_6"
import Content8_2 from "@/components/sections/Content8_2"
import Cta1_2 from "@/components/sections/Cta1_2"
import Faqs2_5 from "@/components/sections/Faqs2_5"
import Hero6 from "@/components/sections/Hero6"
import Pricing1_3 from "@/components/sections/Pricing1_3"
import Reviews2_3 from "@/components/sections/Reviews2_3"
import Services1_2 from "@/components/sections/Services1_2"
import Services8_4 from "@/components/sections/Services8_4"
import Statistic1_4 from "@/components/sections/Statistic1_4"
import Video3_6 from "@/components/sections/Video3_6"

export default function Home6() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="navbar-dark hidden-nav">
                <Hero6 />
                <Services1_2 />
                <div className="grey-border"><div className="container"><div className="row"><div className="col b-bottom" /></div></div></div>
                <Content2_6 />
                <Content7_6 />
                <Services8_4 />
                <Statistic1_4 />
                <Content8_2 />
                <Reviews2_3 />
                <Content3_4 />
                <Video3_6 />
                <Brands2_4 />
                <Pricing1_3 />
                <Faqs2_5 />
                <Cta1_2 />
            </Layout>
        </>
    )
}