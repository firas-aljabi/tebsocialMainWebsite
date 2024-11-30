export default function Newsletter1() {
    return (
        <>
            <section id="newsletter-1" className="bottom-clouds wide-70 newsletter-section division">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            <h3 className="h3-md">Subscribe For Our Updates</h3>
                            <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
                                libero at tempus, blandit posuere ligula varius congue cursus porta feugiat
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 col-lg-8 offset-md-1 offset-lg-2">
                            <div className="newsletter-txt text-center">
                                <form className="newsletter-form">
                                    <div className="input-group">
                                        <input type="email" className="form-control" placeholder="Your email address" required id="s-email" />
                                        <span className="input-group-btn">
                                            <button type="submit" className="btn btn-primary-color black-hover">Sign Up</button>
                                        </span>
                                    </div>
                                    <p className="p-sm">14-day free trial and no credit card required.</p>
                                    <label htmlFor="s-email" className="form-notification" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
