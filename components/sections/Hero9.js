export default function Hero9() {
    return (
        <>
            <section id="hero-9" className="bg-fixed hero-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6 col-xl-5">
                            <div className="hero-txt white-color mb-40">
                                <h2>Stay connected with your friends</h2>
                                <p className="p-md">Feugiat primis ligula risus auctor egestas augue viverra mauri tortor
                                    in iaculis magna feugiat mauris ipsum and placerat viverra tortor gravida purus pretium
                                </p>
                                <form className="hero-newsletter-form">
                                    <div className="input-group">
                                        <input type="email" className="form-control" placeholder="Your email address" required id="s-email" />
                                        <span className="input-group-btn">
                                            <button type="submit" className="btn btn-green tra-hover">Get Started</button>
                                        </span>
                                    </div>
                                    <label htmlFor="s-email" className="form-notification" />
                                </form>
                                <div className="hero-links">
                                    <span>Try TebSocial free for 14 days. No risk, and no credit card required.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-7">
                            <div className="hero-9-img text-center">
                                <img className="img-fluid" src="/images/hero-9-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-fixed hero-9-wave" />
            </section>
        </>
    )
}
