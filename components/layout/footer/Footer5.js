export default function Footer5() {
    return (
        <>
            <footer id="footer-1" className="bg-darkblue wide-40 footer division">
                <div className="container white-color">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="footer-info mb-40">
                                <img src="/images/footer-logo-white.png" width={175} height={35} alt="footer-logo" />
                                <p className="foo-email">E: <a href="mailto:yourdomain@mail.com">hello@yourdomain.com</a></p>
                                <p>P: +12 9 8765 4321</p>
                                <div className="footer-socials-links mt-20">
                                    <ul className="foo-socials text-center clearfix">
                                        <li><a href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></a></li>
                                        <li><a href="#" className="ico-twitter"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#" className="ico-google-plus"><i className="fab fa-google-plus-g" /></a></li>
                                        <li><a href="#" className="ico-tumblr"><i className="fab fa-tumblr" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-2 offset-lg-2">
                            <div className="footer-links mb-40">
                                <h5 className="h5-sm">Company</h5>
                                <ul className="foo-links clearfix">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Press &amp; Media</a></li>
                                    <li><a href="#">Our Pricing</a></li>
                                    <li><a href="#">Advertising</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-2">
                            <div className="footer-links mb-40">
                                <h5 className="h5-sm">Products</h5>
                                <ul className="clearfix">
                                    <li><a href="#">How It Works?</a></li>
                                    <li><a href="#">Integrations</a></li>
                                    <li><a href="#">Product Updates</a></li>
                                    <li><a href="#">Our Pricing</a></li>
                                    <li><a href="#">FAQs</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-2">
                            <div className="footer-links mb-40">
                                <h5 className="h5-sm">Discover</h5>
                                <ul className="clearfix">
                                    <li><a href="#">Our Blog</a></li>
                                    <li><a href="#">Help Center</a></li>
                                    <li><a href="#">Life Chatting</a></li>
                                    <li><a href="#">Terms &amp; Privacy</a></li>
                                    <li><a href="#">Site Map</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-footer">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="footer-copyright">© 2023 <span>TebSocial</span>. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
