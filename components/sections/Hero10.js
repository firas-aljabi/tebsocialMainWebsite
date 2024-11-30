export default function Hero10() {
    return (
        <>
            <section id="hero-10" className="hero-section division">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-lg-8 offset-md-1 offset-lg-2">
                            <div className="hero-txt text-center mb-60">
                                <h3 className="steelblue-color">Create awesome mobile-friendly websites with TebSocial</h3>
                                <form className="hero-newsletter-form">
                                    <div className="input-group">
                                        <input type="email" className="form-control" placeholder="Your email address" required id="s-email" />
                                        <span className="input-group-btn">
                                            <button type="submit" className="btn btn-primary-color black-hover">Get Started</button>
                                        </span>
                                    </div>
                                    <label htmlFor="s-email" className="form-notification" />
                                </form>
                                <div className="hero-links">
                                    <span className="grey-color">Try TebSocial free for 14 days. No risk, and no credit card required.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hero-10-img text-center">
                                <img className="img-fluid" src="/images/hero-10-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
