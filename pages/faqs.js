import Accordion1 from "@/components/elements/Accordion1"
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Faqs() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="navbar-dark">
                <div>
                    <section id="faqs-page" className="page-hero-section division">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 col-lg-8 offset-md-1 offset-lg-2">
                                    <div className="hero-txt text-center white-color">
                                        <h3 className="h3-xl">Questions About TebSocial?</h3>
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
                                                    <li className="breadcrumb-item"><Link href="/demo-1">Home</Link></li>
                                                    <li className="breadcrumb-item active" aria-current="page">FAQs</li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="faqs-3" className="wide-100 faqs-section division">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-6 col-xl-7">
                                    <div className="faqs-3-txt">
                                        <span className="section-id primary-color">FAQs</span>
                                        <h3 className="h3-md">Have questions? Get every single answers from here</h3>
                                        <p className="p-md">An enim nullam tempor sapien gravida donec enim ipsum porta justo integer at
                                            odio velna vitae auctor integer congue magna at pretium purus pretium
                                        </p>
                                        <Accordion1 />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-4 offset-xl-1">
                                    <div className="faqs-3-img text-center">
                                        <img className="img-fluid" src="/images/faqs-3-img.png" alt="faqs-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="contacts-1" className="bottom-clouds wide-100 contacts-section division">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 section-title">
                                    <h3 className="h3-lg">Still Have A Question?  Get In Touch</h3>
                                    <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
                                        libero at tempus, blandit posuere ligula varius congue cursus porta feugiat
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-10 col-xl-8 offset-md-1 offset-xl-2">
                                    <div className="form-holder">
                                        <form name="contactform" className="row contact-form">
                                            <div id="input-name" className="col-lg-6">
                                                <input type="text" name="name" className="form-control name" placeholder="Your Name*" />
                                            </div>
                                            <div id="input-email" className="col-lg-6">
                                                <input type="text" name="email" className="form-control email" placeholder="Email Address*" />
                                            </div>
                                            <div id="input-subject" className="col-md-12 input-subject">
                                                <select id="inlineFormCustomSelect1" name="Subject" className="custom-select subject">
                                                    <option>This question is about...</option>
                                                    <option>Registering/Authorising</option>
                                                    <option>Using TebSocial</option>
                                                    <option>Troubleshooting</option>
                                                    <option>Backup/Restore</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                            <div id="input-message" className="col-lg-12 input-message">
                                                <textarea className="form-control message" name="message" rows={6} placeholder="Your Message ..." />
                                            </div>
                                            <div className="col-lg-12 mt-15 form-btn text-right1">
                                                <button type="submit" className="btn btn-primary-color black-hover submit">Send Your Message</button>
                                            </div>
                                            <div className="col-lg-12 contact-form-msg text-center">
                                                <div className="sending-msg"><span className="loading" /></div>
                                            </div>
                                        </form>
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