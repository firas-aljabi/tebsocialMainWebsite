import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Brands2_8 from "@/components/sections/Brands2_8"
import Contacts1_2 from "@/components/sections/Contacts1_2"
import Content3_8 from "@/components/sections/Content3_8"
import Content4_8 from "@/components/sections/Content4_8"
import Content6_2 from "@/components/sections/Content6_2"
import Cta2_4 from "@/components/sections/Cta2_4"
import Faqs2_9 from "@/components/sections/Faqs2_9"
import Hero12 from "@/components/sections/Hero12"
import Reviews2_6 from "@/components/sections/Reviews2_6"
import Services4_4 from "@/components/sections/Services4_4"
import Services6 from "@/components/sections/Services6"
import Statistic1_9 from "@/components/sections/Statistic1_9"
import Video3_12 from "@/components/sections/Video3_12"

export default function Home12() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="navbar-light white-scroll">
                <Hero12 />
                <Services4_4 />
                <div className="grey-border"><div className="container"><div className="row"><div className="col b-bottom" /></div></div></div>
                <Content6_2 />
                <Statistic1_9 />
                <Content3_8 />
                <Services6 />
                <Content4_8 />
                <Video3_12 />
                <Reviews2_6 />
                <Brands2_8 />
                <Faqs2_9 />
                <Cta2_4 />
                <Blog1 />
                <Contacts1_2 />
            </Layout>
        </>
    )
}