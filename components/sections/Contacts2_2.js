import Link from "next/link"
export default function Contacts2_2() {
    return (
        <>
            <section id="contacts-2" className="bg-primary-color wide-80 contacts-section division">
                <div className="container white-color">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            <h3 className="h3-md">Get Started 14 Days Free Trial!</h3>
                            <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
                                libero at tempus, blandit posuere ligula varius congue cursus porta feugiat
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 col-lg-8 offset-md-1 offset-lg-2">
                            <div className="form-holder text-center">
                                <form name="registerform" className="row register-form">
                                    <div id="input-name" className="col-lg-12">
                                        <input type="text" name="name" className="form-control name" placeholder="Your Name*" />
                                    </div>
                                    <div id="input-email" className="col-lg-12">
                                        <input type="text" name="email" className="form-control email" placeholder="Email Address*" />
                                    </div>
                                    <div className="col-lg-12 form-btn text-right">
                                        <button type="submit" className="btn btn-lg submit btn-green tra-hover">Start Your Free Trial</button>
                                    </div>
                                    <p className="p-sm">We don’t share your personal information with anyone. Check out our
                                        <Link href="#">Privacy Policy</Link> for more information
                                    </p>
                                    <div className="col-lg-12 contact-form-msg text-center">
                                        <div className="sending-msg"><span className="loading" /></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
