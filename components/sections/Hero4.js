export default function Hero4() {
    return (
        <>
            <section id="hero-4" className="bg-fixed hero-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6 col-xl-6">
                            <div className="hero-4-img text-center">
                                <img className="img-fluid" src="/images/hero-4-img.png" alt="hero-image" />
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-5 offset-xl-1">
                            <div className="hero-txt">
                                <h2 className="steelblue-color">Every great business starts with an idea</h2>
                                <p className="p-md grey-color">Feugiat primis ligula risus auctor augue egestas mauri viverra
                                    tortor in iaculis magna feugiat mauris ipsum in placerat viverra tortor gravida purus pretium
                                </p>
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
                </div>
            </section>
        </>
    )
}
