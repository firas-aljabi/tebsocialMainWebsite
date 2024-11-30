import Link from "next/link"

export default function Footer2() {
    return (
        <>
            <footer id="footer-2" className="wide-40 footer division">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-lg-4">
                            <div className="footer-info mb-40">
                                <img src="/images/footer-logo.png" width={175} height={35} alt="footer-logo" />
                                <p className="foo-email">E: <Link href="mailto:yourdomain@mail.com">hello@yourdomain.com</Link></p>
                                <p>P: +12 9 8765 4321</p>
                                <div className="footer-socials-links mt-20">
                                    <ul className="foo-socials text-center clearfix">
                                        <li><Link href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link href="#" className="ico-twitter"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link href="#" className="ico-google-plus"><i className="fab fa-google-plus-g" /></Link></li>
                                        <li><Link href="#" className="ico-tumblr"><i className="fab fa-tumblr" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-2 offset-lg-1">
                            <div className="footer-links mb-40">
                                <h5 className="h5-sm">Products</h5>
                                <ul className="clearfix">
                                    <li><Link href="#">How It Works?</Link></li>
                                    <li><Link href="#">Integrations</Link></li>
                                    <li><Link href="#">Product Updates</Link></li>
                                    <li><Link href="#">Our Pricing</Link></li>
                                    <li><Link href="#">FAQs</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-2">
                            <div className="footer-links mb-40">
                                <h5 className="h5-sm">Company</h5>
                                <ul className="clearfix">
                                    <li><Link href="#">About Us</Link></li>
                                    <li><Link href="#">Careers</Link></li>
                                    <li><Link href="#">Press &amp; Media</Link></li>
                                    <li><Link href="#">Our Blog</Link></li>
                                    <li><Link href="#">Advertising</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-form mb-20">
                                <h5 className="h5-sm">Subscribe Us:</h5>
                                <p className="p-sm m-bottom-20">Stay up to date with our latest news, updates and our new products</p>
                                {/* Newsletter Form Input */}
                                <form className="newsletter-form">
                                    <div className="input-group">
                                        <input type="email" className="form-control" placeholder="Email Address" required id="s-email" />
                                        <span className="input-group-btn">
                                            <button type="submit" className="btn">
                                                <i className="far fa-envelope" />
                                            </button>
                                        </span>
                                    </div>
                                    <label htmlFor="s-email" className="form-notification" />
                                </form>
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
