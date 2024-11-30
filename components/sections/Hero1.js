import VideoPopup from "../elements/VidepPopup"

export default function Hero1() {
    return (
        <>
            <section id="hero-1" className="bg-scroll hero-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-7 col-lg-6">
                            <div className="hero-txt white-color">
                                <h2>Invest and grow your assets with us</h2>
                                <p>Secure your websites with cloud-based platform & experienced security analysts. The easiest way to invest in mutual funds, obligation, money market, and stocks. Start investing with on your comfort zone with no minimum transaction. </p>
                                <div className="hero-btns mt-35">
                                    <a href="#" className="btn btn-green tra-hover">Buy Now For - $15</a>
                                    <VideoPopup style={3} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-6">
                            <div className="hero-1-img text-center">
                                <img className="img-fluid" src="/images/hero-1-img.png" alt="hero-image" />
                                <img className="pattern pattern-1 animation-moveLeftBounce" src="/images/hero1-pattern-1.png" alt="hero-image" />
                                <img className="pattern pattern-2 animation-rotateme" src="/images/hero1-pattern-2.png" alt="hero-image" />
                                <img className="pattern pattern-3 animation-zoomInOut" src="/images/hero1-pattern-3.png" alt="hero-image" />
                                <img className="pattern pattern-4 animation-moveLeftBounce" src="/images/hero1-pattern-4.png" alt="hero-image" />
                                <img className="pattern pattern-5 animation-zoomInOut" src="/images/hero1-pattern-5.png" alt="hero-image" />
                                <img className="pattern pattern-6 animation-animationFramesOne" src="/images/hero1-pattern-6.png" alt="hero-image" />
                                <img className="pattern pattern-7 animation-moveLeftBounce" src="/images/hero1-pattern-7.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
