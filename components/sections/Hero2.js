import VideoPopup from "../elements/VidepPopup"
export default function Hero2() {
    return (
        <>
            <section id="hero-2" className="hero-section">
                <div className="bg-fixed bg-lightgrey hero-2-txt division">
                    <div className="container">
                        <div id="hero-2-content" className="row">
                            <div className="col-md-10 col-lg-8 offset-md-1 offset-lg-2">
                                <div className="hero-txt text-center">
                                    <h3>The best landing page to bring new customers to your business</h3>
                                    <p className="p-md">Feugiat primis ligula risus auctor augue egestas and mauris viverra
                                        tortor in iaculis magna undo ipsum mauris in placerat feugiat ligula risus auctor
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
                </div>
                <div className="hero-2-img division">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-lg-8 offset-md-1 offset-lg-2">
                                <div className="video-preview text-center">
                                    <VideoPopup style={5} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
