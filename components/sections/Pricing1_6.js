export default function Pricing1_6() {
    return (
        <>
            <section id="pricing-1" className="bg-lightgrey wide-60 pricing-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            <h3 className="h3-md steelblue-color">Simple Pricing, Instant Sign Up</h3>
                            <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
                                libero at tempus, blandit posuere ligula varius congue cursus porta feugiat
                            </p>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center pricing-row primary-theme">
                        <div className="col-md-4">
                            <div className="pricing-table wow fadeInUp" data-wow-delay="0.1s">
                                <div className="pricing-plan steelblue-color">
                                    <h5 className="h5-xs">Basic</h5>
                                    <sup>$</sup>
                                    <span className="price">39</span>
                                    <sup className="pricing-coins">99</sup>
                                    <p className="p-md">monthly</p>
                                </div>
                                <ul className="features steelblue-color">
                                    <li><i className="fas fa-stop-circle" /> Concept Development</li>
                                    <li><i className="fas fa-stop-circle" /> UI Design</li>
                                    <li className="disabled-option"><i className="fas fa-stop-circle" /> App Management</li>
                                    <li className="disabled-option"><i className="fas fa-stop-circle" /> Software QA</li>
                                    <li className="disabled-option"><i className="fas fa-stop-circle" /> App Integration</li>
                                </ul>
                                <a href="#" className="btn btn-tra-grey black-hover">Select Plan</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pricing-table highlight wow fadeInUp" data-wow-delay="0.7s">
                                <div className="pricing-plan steelblue-color">
                                    <h5 className="h5-xs">Standard</h5>
                                    <sup>$</sup>
                                    <span className="price">69</span>
                                    <sup className="pricing-coins">99</sup>
                                    <p className="p-md">monthly</p>
                                </div>
                                <ul className="features steelblue-color">
                                    <li><i className="fas fa-stop-circle" /> Concept Development</li>
                                    <li><i className="fas fa-stop-circle" /> UI Design</li>
                                    <li><i className="fas fa-stop-circle" /> App Management</li>
                                    <li className="disabled-option"><i className="fas fa-stop-circle" /> Software QA</li>
                                    <li className="disabled-option"><i className="fas fa-stop-circle" /> App Integration</li>
                                </ul>
                                <a href="#" className="btn btn-primary-color black-hover">Select Plan</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pricing-table wow fadeInUp" data-wow-delay="1s">
                                <div className="pricing-plan steelblue-color">
                                    <h5 className="h5-xs">Premium</h5>
                                    <sup>$</sup>
                                    <span className="price">99</span>
                                    <sup className="pricing-coins">99</sup>
                                    <p className="p-md">monthly</p>
                                </div>
                                <ul className="features steelblue-color">
                                    <li><i className="fas fa-stop-circle" /> Concept Development</li>
                                    <li><i className="fas fa-stop-circle" /> UI Design</li>
                                    <li><i className="fas fa-stop-circle" /> App Management</li>
                                    <li><i className="fas fa-stop-circle" /> Software QA</li>
                                    <li><i className="fas fa-stop-circle" /> App Integration</li>
                                </ul>
                                <a href="#" className="btn btn-tra-grey black-hover">Select Plan</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 wow fadeInUp" data-wow-delay="1s">
                            <div className="pricing-notice mb-40 text-center">
                                <p className="p-md"><span>Note!</span> Prices may vary from location to location due to local
                                    taxation laws and conversion rates from U.S. Dollars.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
