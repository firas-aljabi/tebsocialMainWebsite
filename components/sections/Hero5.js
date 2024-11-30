


export default function Hero5() {
    return (
        <>
            <section id="hero-5" className="hero-section bg-video video-play">
                <div style={{ position: 'absolute', zIndex: -1, inset: 0, overflow: 'hidden', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%', backgroundImage: 'none' }}>
                    <video autoPlay loop muted style={{ margin: 'auto', position: 'absolute', zIndex: -1, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', visibility: 'visible', width: 1905, height: 'auto' }}>
                        <source src="/images/video/video.mp4" type="video/mp4" />
                        <source src="/images/video/video.webm" type="video/webm" />
                        <source src="/images/video/video.ogv" type="video/ogg" />
                    </video>
                </div>

                <div className="hero-overlay division">
                    <div className="container">
                        <div className="row d-flex align-items-center">

                            <div className="col-md-7 col-xl-6">
                                <div className="hero-txt white-color mb-40">
                                    {/* Small Title */}
                                    <h5 className="h5-xs">Everyone wants to be unique</h5>

                                    <h2>Create your unique website with TebSocial in just few hours</h2>

                                    <ul className="content-list">
                                        <li><p className="p-md">Ligula risus auctor augue egestas mauris viverra iaculis</p></li>
                                        <li><p className="p-md">Sagittis congue augue egestas volutpat egestas magna</p></li>
                                        <li><p className="p-md">
                                            Feugiat primis ligula risus auctor augue an egestas mauris viverra tortor
                                            in iaculis magna feugiat laborum donec
                                        </p></li>
                                    </ul>
                                </div>
                            </div>
                            {/* HERO REGISTER FORM */}
                            <div className="col-md-5 col-xl-5 offset-md-0 offset-xl-1">
                                <div id="hero-form" className="text-center mb-40">
                                    <form name="heroForm" className="row hero-form">
                                        {/* Form Title */}
                                        <div className="col-md-12">
                                            <h4 className="h4-sm">Get started for FREE!</h4>
                                        </div>
                                        {/* Form Input */}
                                        <div className="col-md-12">
                                            <input id="input-name" className="form-control name" type="text" name="name" placeholder="Name" />
                                        </div>
                                        {/* Form Input */}
                                        <div className="col-md-12">
                                            <input id="input-email" className="form-control email" type="email" name="email" placeholder="Email" />
                                        </div>
                                        {/* Form Input */}
                                        <div className="col-md-12">
                                            <input id="input-phone" className="form-control phone" type="tel" name="phone" placeholder="Phone Number" />
                                        </div>
                                        {/* Form Input */}
                                        <div className="col-md-12">
                                            <input id="input-subject" className="form-control subject" type="text" name="subject" placeholder="Subject" />
                                        </div>
                                        {/* Form Submit Button */}
                                        <div className="col-md-12">
                                            <button type="submit" className="btn btn-primary-color black-hover submit">Sign Up Now</button>
                                        </div>
                                        {/* Form Message */}
                                        <div className="hero-form-msg text-center">
                                            <div className="sending-msg"><span className="loading" /></div>
                                        </div>
                                    </form>
                                </div>
                            </div>	{/* END HERO REGISTER FORM */}
                        </div>
                    </div>
                </div>	   {/* End Hero Overlay */}
            </section>
        </>
    )
}
