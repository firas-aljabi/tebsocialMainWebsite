import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Contacts() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="navbar-dark">
                <section id="contacts-page" className="page-hero-section division">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-lg-8 offset-md-1 offset-lg-2">
                                <div className="hero-txt text-center white-color">
                                    <h3 className="h3-xl">Need Help? Say Hello</h3>
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
                                                <li className="breadcrumb-item active" aria-current="page">Contacts</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contacts-3" className="bottom-clouds wide-100 contacts-section division">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="contact-box mb-40">
                                    <h5 className="h5-sm">Our Location</h5>
                                    <p className="grey-color">121 King Street, Melbourne, <br /> Victoria 3000 Australia</p>
                                </div>
                                <div className="contact-box mb-40">
                                    <h5 className="h5-sm">Contact Phones</h5>
                                    <p className="grey-color">Phone : +12 3 3456 7890</p>
                                    <p className="grey-color">Fax : +12 9 8765 4321</p>
                                </div>
                                <div className="contact-box mb-40">
                                    <h5 className="h5-sm">Working Hours</h5>
                                    <p className="grey-color">Mon - Fri: 8:30am - 7:30pm</p>
                                    <p className="grey-color">Sat: 8:30am - 3:30pm</p>
                                </div>
                            </div>
                            <div className="col-md-8">
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
            </Layout>
        </>
    )
}