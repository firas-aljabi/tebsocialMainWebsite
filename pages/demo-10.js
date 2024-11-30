import Layout from "@/components/layout/Layout"
import Brands2_7 from "@/components/sections/Brands2_7"
import Contacts2_3 from "@/components/sections/Contacts2_3"
import Content2_10 from "@/components/sections/Content2_10"
import Content3_6 from "@/components/sections/Content3_6"
import Content7_9 from "@/components/sections/Content7_9"
import Content8_4 from "@/components/sections/Content8_4"
import Faqs2_8 from "@/components/sections/Faqs2_8"
import Hero10 from "@/components/sections/Hero10"
import Pricing1_5 from "@/components/sections/Pricing1_5"
import Reviews2_4 from "@/components/sections/Reviews2_4"
import Services4_3 from "@/components/sections/Services4_3"
import Statistic2_3 from "@/components/sections/Statistic2_3"
import Video3_10 from "@/components/sections/Video3_10"

export default function Home10() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={4} headerCls="navbar-light white-scroll">
                <Hero10 />
                <Services4_3 />
                <div className="grey-border"><div className="container"><div className="row"><div className="col b-bottom" /></div></div></div>
                <Content7_9 />
                <Content2_10 />
                <Content3_6 />
                <Video3_10 />
                <Statistic2_3 />
                <Content8_4 />
                <Pricing1_5 />
                <Reviews2_4 />
                <Brands2_7 />
                <Faqs2_8 />
                <Contacts2_3 />
            </Layout>
        </>
    )
}