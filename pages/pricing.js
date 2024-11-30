import Layout from "@/components/layout/Layout"
import BrandSlider1 from "@/components/slider/BrandSlider1"
import { useState } from "react"

export default function Pricing() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })
    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="navbar-dark">
                <div>
                    <section id="pricing-page" className="page-hero-section division">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 col-lg-8 offset-md-1 offset-lg-2">
                                    <div className="hero-txt text-center white-color">
                                        <h3 className="h3-xl">Pricing Plans &amp; Packages</h3>
                                        <p className="p-hero">Semper lacus cursus porta, feugiat primis ultrice ligula and auctor
                                            rhoncus purus ipsum primis in vitae
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div id="breadcrumb">
                                <div className="row">
                                    <div className="col">
                                        <div className="breadcrumb-nav">
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb">
                                                    <li className="breadcrumb-item"><a href="/demo-1">Home</a></li>
                                                    <li className="breadcrumb-item active" aria-current="page">Pricing Plans</li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="pricing-2" className="wide-60 pricing-page-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 section-title">
                                    <h3 className="h3-lg">Grow Faster With TebSocial</h3>
                                    <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
                                        libero at tempus, blandit posuere ligula varius congue cursus porta feugiat
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-10 col-lg-8 offset-md-1 offset-lg-2 text-center">
                                    <div id="wide-tabs-nav" className="list-group text-center">
                                        <ul className="nav nav-pills primary-theme" id="pills-tab">
                                            <li className="nav-item" onClick={() => handleToggle(1)}>
                                                <a className={isActive.key == 1 ? "nav-link active" : "nav-link"}>
                                                    Monthly Billing
                                                </a>
                                            </li>
                                            <li className="nav-item" onClick={() => handleToggle(2)}>
                                                <a className={isActive.key == 2 ? "nav-link active" : "nav-link"}>
                                                    Annual Billing <span>save 20%</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-content">
                                <div className={isActive.key == 1 ? "tab-pane fade show active" : "tab-pane fade"}>
                                    <div className="row d-flex align-items-center pricing-row primary-theme">
                                        <div className="col-md-4">
                                            <div className="pricing-table">
                                                <div className="pricing-plan">
                                                    <h5 className="h5-xs">Basic</h5>
                                                    <sup>$</sup>
                                                    <span className="price">9</span>
                                                    <sup className="pricing-coins">99</sup>
                                                    <p className="p-md">monthly</p>
                                                </div>
                                                <ul className="features">
                                                    <li><i className="fas fa-stop-circle" /> Concept Development</li>
                                                    <li><i className="fas fa-stop-circle" /> UI Design</li>
                                                    <li className="disabled-option"><i className="fas fa-stop-circle" /> App Management</li>
                                                    <li className="disabled-option"><i className="fas fa-stop-circle" /> Software QA</li>
                                                    <li className="disabled-option"><i className="fas fa-stop-circle" /> App Integration</li>
                                                </ul>
                                                <a href="#" className="btn btn-tra-grey black-hover">Select Plan</a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="pricing-table highlight">
                                                <div className="pricing-plan">
                                                    <h5 className="h5-xs">Standard</h5>
                                                    <sup>$</sup>
                                                    <span className="price">39</span>
                                                    <sup className="pricing-coins">99</sup>
                                                    <p className="p-md">monthly</p>
                                                </div>
                                                <ul className="features">
                                                    <li><i className="fas fa-stop-circle" /> Concept Development</li>
                                                    <li><i className="fas fa-stop-circle" /> UI Design</li>
                                                    <li><i className="fas fa-stop-circle" /> App Management</li>
                                                    <li className="disabled-option"><i className="fas fa-stop-circle" /> Software QA</li>
                                                    <li className="disabled-option"><i className="fas fa-stop-circle" /> App Integration</li>
                                                </ul>
                                                <a href="#" className="btn btn-primary-color black-hover">Select Plan</a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="pricing-table">
                                                <div className="pricing-plan">
                                                    <h5 className="h5-xs">Premium</h5>
                                                    <sup>$</sup>
                                                    <span className="price">54</span>
                                                    <sup className="pricing-coins">99</sup>
                                                    <p className="p-md">monthly</p>
                                                </div>
                                                <ul className="features">
                                                    <li><i className="fas fa-stop-circle" /> Concept Development</li>
                                                    <li><i className="fas fa-stop-circle" /> UI Design</li>
                                                    <li><i className="fas fa-stop-circle" /> App Management</li>
                                                    <li><i className="fas fa-stop-circle" /> Software QA</li>
                                                    <li><i className="fas fa-stop-circle" /> App Integration</li>
                                                </ul>
                                                <a href="#" className="btn btn-tra-grey black-hover">Select Plan</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={isActive.key == 2 ? "tab-pane fade show active" : "tab-pane fade"}>
                                    <div className="row d-flex align-items-center pricing-row primary-theme">
                                        <div className="col-md-4">
                                            <div className="pricing-table">
                                                <div className="pricing-plan">
                                                    <h5 className="h5-xs">Basic</h5>
                                                    <sup>$</sup>
                                                    <span className="price">7</span>
                                                    <sup className="pricing-coins">99</sup>
                                                    <p className="p-md">monthly</p>
                                                </div>
                                                <ul className="features">
                                                    <li><i className="fas fa-stop-circle" /> Concept Development</li>
                                                    <li><i className="fas fa-stop-circle" /> UI Design</li>
                                                    <li className="disabled-option"><i className="fas fa-stop-circle" /> App Management</li>
                                                    <li className="disabled-option"><i className="fas fa-stop-circle" /> Software QA</li>
                                                    <li className="disabled-option"><i className="fas fa-stop-circle" /> App Integration</li>
                                                </ul>
                                                <a href="#" className="btn btn-tra-grey black-hover">Select Plan</a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="pricing-table highlight">
                                                <div className="pricing-plan">
                                                    <h5 className="h5-xs">Standard</h5>
                                                    <sup>$</sup>
                                                    <span className="price">31</span>
                                                    <sup className="pricing-coins">99</sup>
                                                    <p className="p-md">monthly</p>
                                                </div>
                                                <ul className="features">
                                                    <li><i className="fas fa-stop-circle" /> Concept Development</li>
                                                    <li><i className="fas fa-stop-circle" /> UI Design</li>
                                                    <li><i className="fas fa-stop-circle" /> App Management</li>
                                                    <li className="disabled-option"><i className="fas fa-stop-circle" /> Software QA</li>
                                                    <li className="disabled-option"><i className="fas fa-stop-circle" /> App Integration</li>
                                                </ul>
                                                <a href="#" className="btn btn-primary-color black-hover">Select Plan</a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="pricing-table">
                                                <div className="pricing-plan">
                                                    <h5 className="h5-xs">Premium</h5>
                                                    <sup>$</sup>
                                                    <span className="price">43</span>
                                                    <sup className="pricing-coins">99</sup>
                                                    <p className="p-md">monthly</p>
                                                </div>
                                                <ul className="features">
                                                    <li><i className="fas fa-stop-circle" /> Concept Development</li>
                                                    <li><i className="fas fa-stop-circle" /> UI Design</li>
                                                    <li><i className="fas fa-stop-circle" /> App Management</li>
                                                    <li><i className="fas fa-stop-circle" /> Software QA</li>
                                                    <li><i className="fas fa-stop-circle" /> App Integration</li>
                                                </ul>
                                                <a href="#" className="btn btn-tra-grey black-hover">Select Plan</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <div className="pricing-notice mb-40 text-center">
                                        <p className="p-md"><span>Note!</span> Prices may vary from location to location due to local
                                            taxation laws and conversion rates from U.S. Dollars.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div id="brands-2" className="bg-lightgrey brands-section division">
                        <div className="container">
                            <div className="row">
                                <div className="col text-center">
                                    <p>We partner with companies of all sizes, all around the world</p>
                                    <BrandSlider1 />
                                </div>
                            </div>
                        </div>
                    </div>
                    <section id="faqs-2" className="wide-100 faqs-section division">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 section-title">
                                    <h3 className="h3-lg">Questions About Pricing Plans?</h3>
                                    <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
                                        libero at tempus, blandit posuere ligula varius congue cursus porta feugiat
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="questions-holder">
                                        <div className="question wow fadeInUp" data-wow-delay="0.4s">
                                            <h5 className="h5-xs">Do you have non-profit discount?</h5>
                                            <p>Praesent semper, lacus sed cursus porta,feugiat primis in faucibus orci luctus
                                                tincidunt ligula ultrice sapien egestas lobortis magna
                                            </p>
                                        </div>
                                        <div className="question wow fadeInUp" data-wow-delay="0.6s">
                                            <h5 className="h5-xs">Do you have a free trial?</h5>
                                            <ul className="content-list mb-35">
                                                <li>Vitae auctor integer congue magna at pretium</li>
                                                <li>Integer congue magna at pretium purus pretium ligula rutrum luctus risus eros
                                                    dolor auctor ipsum blandit purus
                                                </li>
                                                <li>Sagittis congue augue egestas volutpat egestas magna</li>
                                            </ul>
                                        </div>
                                        <div className="question wow fadeInUp" data-wow-delay="0.8s">
                                            <h5 className="h5-xs">How do I install a TebSocial?</h5>
                                            <p>Feugiat eros, ac tincidunt ligula massa in faucibus orci luctus et ultrices posuere
                                                cubilia curae egestas magna ipsum vitae purus efficitur ipsum in primis cubilia laoreet
                                                augue congue.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="questions-holder ind-30">
                                        <div className="question wow fadeInUp" data-wow-delay="0.4s">
                                            <h5 className="h5-xs">What I can do with my purchase?</h5>
                                            <ul className="content-list mb-35">
                                                <li>Feugiat eros ligula massa lipsum primis in orci luctus</li>
                                                <li>Sagittis congue augue egestas volutpat egestas magna ipsum primis in faucibus
                                                    bibendum sit amet in odio
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="question wow fadeInUp" data-wow-delay="0.6s">
                                            <h5 className="h5-xs">How can I update or cancel my personal information?</h5>
                                            <p>Praesent semper, lacus sed cursus porta, odio augue ligula massa risus laoreet.
                                                Laoreet auctor massa varius amet orci gravida donec enim ipsum porta justo integer
                                                at odio velna auctor.
                                            </p>
                                        </div>
                                        <div className="question wow fadeInUp" data-wow-delay="0.8s">
                                            <h5 className="h5-xs">I have technical problem, who do I email?</h5>
                                            <p>Feugiat eros, ac tincidunt ligula massa in faucibus orci luctus et ultrices posuere
                                                cubilia curae integer congue leo metus, eu mollis lorem primis in orci ipsum porta
                                                justo integer
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <div className="more-questions wow fadeInUp" data-wow-delay="1.2s">
                                        <h5 className="h5-xs">Still have a question? <a href="/faqs">Ask your question here</a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="cta-2" className="blue-textured wide-100 cta-section division">
                        <div className="container white-color">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    <div className="cta-txt text-center">
                                        <h3 className="h3-xs">Create better experiences with TebSocial</h3>
                                        <p className="p-md">Feugiat eros, ac tincidunt ligula massa in faucibus orci luctus et ultrices
                                            posuere cubilia curae integer congue leo metus, eu mollis lorem primis in orci integer
                                            metus mollis faucibus
                                        </p>
                                        <div className="btns-group">
                                            <a href="#" className="btn btn-primary-color tra-hover mr-15">Request Free Trial</a>
                                            <a href="#" className="btn btn-tra-white black-hover">Buy For Only $6.99</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}