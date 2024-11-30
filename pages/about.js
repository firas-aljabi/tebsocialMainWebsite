import CounterUp from "@/components/elements/CounterUp"
import VideoPopup from "@/components/elements/VidepPopup"
import Layout from "@/components/layout/Layout"
import BrandSlider1 from "@/components/slider/BrandSlider1"
import dynamic from "next/dynamic"
import Link from "next/link"
const Review2Grid = dynamic(() => import("@/components/elements/Review2Grid"), {
    ssr: false
});

export default function About() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark">
                <div>
                    <section id="about-page" className="page-hero-section division">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 col-lg-8 offset-md-1 offset-lg-2">
                                    <div className="hero-txt text-center white-color">
                                        <h3 className="h3-xl">Some Words About Us</h3>
                                        <p className="p-hero">Semper lacus cursus porta, feugiat primis ultrice ligula and auctor rhoncus purus ipsum primis in vitae cursus</p>
                                    </div>
                                </div>
                            </div>
                            <div id="breadcrumb">
                                <div className="row">
                                    <div className="col">
                                        <div className="breadcrumb-nav">
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb">
                                                    <li className="breadcrumb-item">
                                                        <Link href="/demo-1">Home</Link>
                                                    </li>
                                                    <li className="breadcrumb-item active" aria-current="page">
                                                        About Us
                                                    </li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="content-2" className="wide-60 content-section division">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                <div className="col-md-6">
                                    <div className="img-block wow fadeInUp" data-wow-delay="0.6s">
                                        <img className="img-fluid" src="/images/about-img.png" alt="about-image" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="txt-block pc-30 wow fadeInUp" data-wow-delay="0.4s">
                                        <span className="section-id id-color">About TebSocial</span>
                                        <h3 className="h3-md">We create successful digital products</h3>
                                        <p>An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer at odio velna vitae auctor integer congue magna purus pretium ligula rutrum luctus ultrice aliquam a augue suscipit</p>
                                        <h5 className="h5-md">Features Never Stop</h5>
                                        <div className="box-list m-top-15">
                                            <div className="box-list-icon">
                                                <i className="fas fa-genderless" />
                                            </div>
                                            <p>Fringilla risus nec, luctus mauris orci auctor purus euismod pretium purus pretium ligula rutrum tempor sapien</p>
                                        </div>
                                        <div className="box-list">
                                            <div className="box-list-icon">
                                                <i className="fas fa-genderless" />
                                            </div>
                                            <p>Quaerat sodales sapien undo euismod purus blandit</p>
                                        </div>
                                        <div className="box-list">
                                            <div className="box-list-icon">
                                                <i className="fas fa-genderless" />
                                            </div>
                                            <p>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium purus</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="services-4" className="bg-lightgrey wide-50 services-section division">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 section-title">
                                    <h3 className="h3-lg">Friendly Services, Every Time</h3>
                                    <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-md-4">
                                    <div className="sbox-4 wow fadeInUp" data-wow-delay="0.4s">
                                        <img className="img-65" src="/images/icons/presentation-2.png" alt="service-icon" />
                                        <div className="sbox-4-txt">
                                            <h5 className="h5-sm">Market Research</h5>
                                            <p>Porta semper lacus cursus, feugiat primis ultrice in ligula risus an auctor tempus feugiat dolor an impedit</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <div className="sbox-4 wow fadeInUp" data-wow-delay="0.6s">
                                        <img className="img-65" src="/images/icons/idea-2.png" alt="service-icon" />
                                        <div className="sbox-4-txt">
                                            <h5 className="h5-sm">User Experience</h5>
                                            <p>Porta semper lacus cursus, feugiat primis ultrice in ligula risus an auctor tempus feugiat dolor an impedit</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <div className="sbox-4 wow fadeInUp" data-wow-delay="0.8s">
                                        <img className="img-65" src="/images/icons/vector.png" alt="service-icon" />
                                        <div className="sbox-4-txt">
                                            <h5 className="h5-sm">Web Development</h5>
                                            <p>Porta semper lacus cursus, feugiat primis ultrice in ligula risus an auctor tempus feugiat dolor an impedit</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <div className="sbox-4 wow fadeInUp" data-wow-delay="1s">
                                        <img className="img-65" src="/images/icons/strategy.png" alt="service-icon" />
                                        <div className="sbox-4-txt">
                                            <h5 className="h5-sm">Brand Design Identity</h5>
                                            <p>Porta semper lacus cursus, feugiat primis ultrice in ligula risus an auctor tempus feugiat dolor an impedit</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <div className="sbox-4 wow fadeInUp" data-wow-delay="1.2s">
                                        <img className="img-65" src="/images/icons/internet.png" alt="service-icon" />
                                        <div className="sbox-4-txt">
                                            <h5 className="h5-sm">SEO &amp; SMM Services</h5>
                                            <p>Porta semper lacus cursus, feugiat primis ultrice in ligula risus an auctor tempus feugiat dolor an impedit</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <div className="sbox-4 wow fadeInUp" data-wow-delay="1.4s">
                                        <img className="img-65" src="/images/icons/key-1.png" alt="service-icon" />
                                        <div className="sbox-4-txt">
                                            <h5 className="h5-sm">User Data Protection</h5>
                                            <p>Porta semper lacus cursus, feugiat primis ultrice in ligula risus an auctor tempus feugiat dolor an impedit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="content-7" className="bg-fixed grey-waves wide-60 content-section division">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                <div className="col-md-6 col-xl-6">
                                    <div className="txt-block pc-30 wow fadeInUp" data-wow-delay="0.4s">
                                        <span className="section-id id-color">Beauty of simplicity</span>
                                        <h3 className="h3-md">We are making design better for everyone</h3>
                                        <p>An enim nullam tempor sapien gravida donec enim ipsum porta justo integer at odio velna vitae auctor integer congue magna at pretium purus pretium ligula rutrum luctus risus ultrice luctus in ligula blandit congue magna undo impedit</p>
                                        <div className="quote primary-theme mt-20">
                                            <p>"Lorem ipsum dolor sit amet, lectus laoreet impedit gestas. Aenean magna ligula eget dolor suscipit egestas viverra dolor iaculis luctus magna suscipit egestas "</p>
                                            <div className="quote-avatar">
                                                <img src="/images/quote-avatar.jpg" alt="quote-avatar" />
                                            </div>
                                            <div className="quote-author">
                                                <h5 className="h5-xs">James Paterson</h5>
                                                <span className="grey-color">CEO of TebSocial</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-5 offset-xl-1">
                                    <div className="content-7-img wow fadeInRight" data-wow-delay="0.6s">
                                        <img className="img-fluid" src="/images/image-08.png" alt="content-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div id="statistic-2" className="blue-textured statistic-section division">
                        <div className="container white-color">
                            <div className="row">
                                <div className="col-sm-6 col-md-3">
                                    <div className="statistic-block icon-xs wow fadeInUp" data-wow-delay="0.4s">
                                        <span className="flaticon-323-download-2" />
                                        <h5 className="statistic-number">
                                            9,<span className="count-element">632</span>
                                        </h5>
                                        <p className="txt-400">Total Downloads</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                    <div className="statistic-block icon-xs wow fadeInUp" data-wow-delay="0.6s">
                                        <span className="flaticon-269-heart" />
                                        <h5 className="statistic-number">
                                            5,
                                            <CounterUp end={281} />
                                        </h5>
                                        <p className="txt-400">Happy Customers</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                    <div className="statistic-block icon-xs wow fadeInUp" data-wow-delay="0.8s">
                                        <span className="flaticon-032-user-3" />
                                        <h5 className="statistic-number">
                                            6,
                                            <CounterUp end={179} />
                                        </h5>
                                        <p className="txt-400">Active Accounts</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                    <div className="statistic-block icon-xs wow fadeInUp" data-wow-delay="1s">
                                        <span className="flaticon-266-help" />
                                        <h5 className="statistic-number">
                                            1,
                                            <CounterUp end={473} />
                                        </h5>
                                        <p className="txt-400">Tickets Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section id="team-1" className="wide-60 team-section division">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 section-title">
                                    <h3 className="h3-lg">Meet Our Executive Team</h3>
                                    <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-lg-3">
                                    <div className="team-member wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="team-member-photo">
                                            <img className="img-fluid" src="/images/team-1.jpg" alt="team-member-foto" />
                                        </div>
                                        <div className="team-member-data">
                                            <h5 className="h5-xs">Jonathan Barnes</h5>
                                            <a href="#">@jonatanbarnes</a>
                                            <p>Feugiat eros, ac tincidunt ligula massa in faucibus orci luctus et ultrices posuere cubilia and curae integer congue leo metus mollis lorem primis in orci integer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="team-member wow fadeInUp" data-wow-delay="0.6s">
                                        <div className="team-member-photo">
                                            <img className="img-fluid" src="/images/team-2.jpg" alt="team-member-foto" />
                                        </div>
                                        <div className="team-member-data">
                                            <h5 className="h5-xs">Hannah Harper</h5>
                                            <a href="#">@hannahharper</a>
                                            <p>Etiam sit amet mauris suscipit sit amet odio. Integer congue metus. Vitae luctus neque purus and mollis blandit ultrice ligula egestas magna suscipit lectus magna</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="team-member wow fadeInUp" data-wow-delay="0.8s">
                                        <div className="team-member-photo">
                                            <img className="img-fluid" src="/images/team-3.jpg" alt="team-member-foto" />
                                        </div>
                                        <div className="team-member-data">
                                            <h5 className="h5-xs">Matthew Anderson</h5>
                                            <a href="#">@matthewanderson</a>
                                            <p>Aliquam a augue suscipit, luctus neque purus ipsum odio velna vitae auctor integer congue magna and pretium purus a blandit posuere ligula varius magna congue</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="team-member wow fadeInUp" data-wow-delay="1s">
                                        <div className="team-member-photo">
                                            <img className="img-fluid" src="/images/team-4.jpg" alt="team-member-foto" />
                                        </div>
                                        <div className="team-member-data">
                                            <h5 className="h5-xs">Megan Coleman</h5>
                                            <a href="#">@megancoleman</a>
                                            <p>Feugiat eros, ac tincidunt ligula massa in faucibus orci luctus et ultrices posuere cubilia and curae integer congue leo metus mollis lorem primis in orci integer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div id="video-3" className="video-section division">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="video-preview text-center">
                                        <VideoPopup style={1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="brands-2" className="brands-section division">
                        <div className="container">
                            <div className="row">
                                <div className="col text-center">
                                    <p>We partner with companies of all sizes, all around the world</p>
                                    <BrandSlider1 />
                                </div>
                            </div>
                        </div>
                    </div>
                    <section id="reviews-2" className="bg-lightgrey wide-80 reviews-section division">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 section-title">
                                    <h3 className="h3-md">What Our Customers Are Saying</h3>
                                    <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat</p>
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
    );
}
