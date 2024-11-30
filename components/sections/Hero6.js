import VideoPopup from "../elements/VidepPopup"
export default function Hero6() {
    return (
        <>
            <section id="hero-6" className="bg-scroll hero-section division">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="hero-txt mb-50 text-center white-color">
                                <div className="hero-logo">
                                    <img className="img-fluid" src="/images/hero-logo.png" alt="hero-logo" />
                                </div>
                                <h5>Ultimate Responsive Bootstrap 4 Software &amp; Startup Premium Landing Page Template</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 offset-md-1 text-center">
                            <div className="video-preview text-center">
                                <VideoPopup style={4} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-fixed hero-6-wave" />
            </section>
        </>
    )
}
