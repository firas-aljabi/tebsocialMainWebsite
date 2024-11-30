import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Brands1_1 from "@/components/sections/Brands1_1"
import Content2_8 from "@/components/sections/Content2_8"
import Content3_5 from "@/components/sections/Content3_5"
import Content4_5 from "@/components/sections/Content4_5"
import Cta4 from "@/components/sections/Cta4"
import Faqs2_6 from "@/components/sections/Faqs2_6"
import Hero8 from "@/components/sections/Hero8"
import Reviews3_3 from "@/components/sections/Reviews3_3"
import Services8_6 from "@/components/sections/Services8_6"
import Statistic1_6 from "@/components/sections/Statistic1_6"
import Video3_8 from "@/components/sections/Video3_8"

export default function Home8() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="navbar-light white-scroll">
                <Hero8 />
                <Brands1_1 />
                <div className="grey-border"><div className="container"><div className="row"><div className="col b-bottom" /></div></div></div>
                <Content2_8 />
                <Services8_6 />
                <Content3_5 />
                <Statistic1_6 />
                <Content4_5 />
                <Reviews3_3 />
                <Faqs2_6 />
                <Video3_8 />
                <Blog1 />
                <Cta4 />
            </Layout>
        </>
    )
}