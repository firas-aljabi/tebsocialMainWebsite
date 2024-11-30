import Layout from "@/components/layout/Layout"
import Content2_11 from "@/components/sections/Content2_11"
import Content3_7 from "@/components/sections/Content3_7"
import Content4_7 from "@/components/sections/Content4_7"
import Content7_10 from "@/components/sections/Content7_10"
import Cta3_2 from "@/components/sections/Cta3_2"
import Faqs1_3 from "@/components/sections/Faqs1_3"
import Hero11 from "@/components/sections/Hero11"
import Reviews2_5 from "@/components/sections/Reviews2_5"
import Services8_7 from "@/components/sections/Services8_7"
import Statistic1_8 from "@/components/sections/Statistic1_8"
import Video3_11 from "@/components/sections/Video3_11"

export default function Home11() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="navbar-dark white-scroll">
                <Hero11 />
                <Services8_7 />
                <Content2_11 />
                <Statistic1_8 />
                <Content3_7 />
                <div className="grey-border"><div className="container"><div className="row"><div className="col b-bottom" /></div></div></div>
                <Content4_7 />
                <Video3_11 />
                <Content7_10 />
                <Faqs1_3 />
                <Reviews2_5 />
                <Cta3_2 />
            </Layout>
        </>
    )
}