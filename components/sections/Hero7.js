import VideoPopup from "../elements/VidepPopup"
export default function Hero7() {
    return (
        <>
            <section id="hero-7" className="bg-fixed hero-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-7 col-lg-6">
                            <div className="hero-txt white-color mb-40">
                                <h2 className="txt-500">Launch your new website and start to engage new users</h2>
                                <p className="p-md">Feugiat primis ligula risus auctor laoreet augue egestas mauris
                                    viverra tortor in iaculis pretium magna at mauris rhoncus ipsum placerat feugiat
                                    primis in ultrice
                                </p>
                                <div className="hero-btns mt-35">
                                    <a href="#contacts-2" className="btn btn-yellow tra-hover">Start Free Trial</a>
                                    <VideoPopup style={3} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-6">
                            <div className="hero-7-img text-center">
                                <img className="img-fluid" src="/images/hero-7-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-fixed hero-7-incline" />
            </section>
        </>
    )
}
