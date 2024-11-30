export default function Contacts1_1() {
    return (
        <>
            <section id="contacts-1" className="bottom-clouds wide-100 contacts-section division">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            <h3 className="h3-md steelblue-color">Looking For Support? Get In Touch</h3>
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
                                    <div className="col-lg-12 mt-15 form-btn">
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
        </>
    )
}
