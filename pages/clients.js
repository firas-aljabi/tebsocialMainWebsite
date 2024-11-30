import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"

const Review2Grid = dynamic(() => import('@/components/elements/Review2Grid'), {
    ssr: false,
})

export default function Clients() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="navbar-dark">
                <div>
                    <section id="clients-page" className="page-hero-section division">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 col-lg-8 offset-md-1 offset-lg-2">
                                    <div className="hero-txt text-center white-color">
                                        <h3 className="h3-xl">Trusted By The Experts</h3>
                                        <p className="p-hero">Semper lacus cursus porta, feugiat primis ultrice ligula and auctor
                                            rhoncus purus ipsum primis in vitae
                                        </p>
                                    </div>
                                </div>
                            </div>	{/* END PAGE HERO TEXT */}
                            <div id="breadcrumb">
                                <div className="row">
                                    <div className="col">
                                        <div className="breadcrumb-nav">
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb">
                                                    <li className="breadcrumb-item"><Link href="/demo-1">Home</Link></li>
                                                    <li className="breadcrumb-item active" aria-current="page">Our Clients</li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>	{/* END BREADCRUMB */}
                        </div>
                    </section>
                    <div id="brands-3" className="brands-section division">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center mb-25">
                                    <p>We partner with companies of all sizes, all around the world</p>
                                </div>
                            </div>
                            <div className="row brands-holder">
                                <div className="col-lg-12">
                                    <div className="brand-logo width-20">
                                        <a href="#"><img className="img-fluid" src="/images/brand-1.png" alt="brand-logo" /></a>
                                    </div>
                                    <div className="brand-logo width-20">
                                        <a href="#"><img className="img-fluid" src="/images/brand-2.png" alt="brand-logo" /></a>
                                    </div>
                                    <div className="brand-logo width-20">
                                        <a href="#"><img className="img-fluid" src="/images/brand-3.png" alt="brand-logo" /></a>
                                    </div>
                                    <div className="brand-logo width-20">
                                        <a href="#"><img className="img-fluid" src="/images/brand-4.png" alt="brand-logo" /></a>
                                    </div>
                                    <div className="brand-logo width-20">
                                        <a href="#"><img className="img-fluid" src="/images/brand-5.png" alt="brand-logo" /></a>
                                    </div>
                                    <div className="brand-logo width-20">
                                        <a href="#"><img className="img-fluid" src="/images/brand-6.png" alt="brand-logo" /></a>
                                    </div>
                                    <div className="brand-logo width-20">
                                        <a href="#"><img className="img-fluid" src="/images/brand-1.png" alt="brand-logo" /></a>
                                    </div>
                                    <div className="brand-logo width-20">
                                        <a href="#"><img className="img-fluid" src="/images/brand-2.png" alt="brand-logo" /></a>
                                    </div>
                                    <div className="brand-logo width-20">
                                        <a href="#"><img className="img-fluid" src="/images/brand-3.png" alt="brand-logo" /></a>
                                    </div>
                                    <div className="brand-logo width-20">
                                        <a href="#"><img className="img-fluid" src="/images/brand-4.png" alt="brand-logo" /></a>
                                    </div>
                                    <div className="brand-logo width-20">
                                        <a href="#"><img className="img-fluid" src="/images/brand-5.png" alt="brand-logo" /></a>
                                    </div>
                                    <div className="brand-logo width-20">
                                        <a href="#"><img className="img-fluid" src="/images/brand-6.png" alt="brand-logo" /></a>
                                    </div>
                                    <div className="brand-logo width-20">
                                        <a href="#"><img className="img-fluid" src="/images/brand-5.png" alt="brand-logo" /></a>
                                    </div>
                                    <div className="brand-logo width-20">
                                        <a href="#"><img className="img-fluid" src="/images/brand-6.png" alt="brand-logo" /></a>
                                    </div>
                                    <div className="brand-logo width-20">
                                        <a href="#"><img className="img-fluid" src="/images/brand-1.png" alt="brand-logo" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section id="reviews-2" className="bottom-clouds pt-100 pb-120 reviews-section division">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 section-title">
                                    <h3 className="h3-lg">What Our Customers Are Saying</h3>
                                    <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
                                        libero at tempus, blandit posuere ligula varius congue cursus porta feugiat
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 reviews-grid">
                                    <Review2Grid />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}