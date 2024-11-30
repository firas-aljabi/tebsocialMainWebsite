export default function Hero3() {
    return (
        <>
            <section id="hero-3" className="bg-scroll hero-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6 col-lg-5">
                            <div className="hero-txt mb-40 white-color">
                                <h2 className="txt-500">Best editor for your media files</h2>
                                <p className="p-md">Feugiat primis ligula risus auctor egestas augue mauri viverra tortor
                                    in iaculis placerat magna feugiat mauris ipsum in viverra tortor gravida purus pretium
                                </p>
                                <div className="stores-badge">
                                    <a href="#" className="store">
                                        <img className="appstore-original" src="/images/store_badges/appstore.png" alt="appstore-logo" />
                                    </a>
                                    <a href="#" className="store">
                                        <img className="googleplay-original" src="/images/store_badges/googleplay.png" alt="googleplay-logo" />
                                    </a>
                                    <p className="os-version">Current Release: TebSocial <span>3.0.14</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-7">
                            <div className="hero-3-img text-center">
                                <img className="img-fluid" src="/images/hero-3-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-fixed hero-3-wave" />
            </section>
        </>
    )
}
