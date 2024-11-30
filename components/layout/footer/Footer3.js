export default function Footer3({ language }) {
    return (
        <>
            <footer id="footer-3" className="wide-40 footer division">
                <div className="container">
                    <div className="row">
                        {/* Footer Info */}
                        <div className="col-lg-4">
                            <div className="footer-info mb-40">
                                <img src="/images/image.png" width={175}  alt="footer-logo" />
                                <p className="mt-20">
                                    {language === "ar"
                                        ? "عليكم أن تستمتعوا بتجربة استخدام منصة رائعة توفر أفضل الخدمات لحياتكم اليومية."
                                        : "Aliquam orci nullam tempor sapien gravida donec an enim ipsum porta justo at velna auctor congue magna laoreet augue sapien gravida donec"}
                                </p>
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
                        {/* Footer Contacts */}
                        <div className="col-md-6 col-lg-3 offset-lg-1">
                            <div className="footer-box mb-40">
                                <h5 className="h5-sm">
                                    {language === "ar" ? "دعنا نتحدث" : "Let's Talk"}
                                </h5>
                                <p>{language === "ar" ? "121 شارع كينغ، ملبورن،" : "121 King Street, Melbourne,"}</p>
                                <p>{language === "ar" ? "فيكتوريا 3000 أستراليا" : "Victoria 3000 Australia"}</p>
                                <p className="foo-email mt-20">
                                    {language === "ar" ? "البريد الإلكتروني: " : "E: "}
                                    <a href="mailto:info@tebsocial.com">
                                        {language === "ar" ? "hello@yourdomain.com" : "hello@yourdomain.com"}
                                    </a>
                                </p>
                                <p>{language === "ar" ? "هاتف: +12 9 8765 4321" : "P: +12 9 8765 4321"}</p>
                            </div>
                        </div>
                        {/* Footer Links - Company */}
                        <div className="col-md-3 col-lg-2">
                            <div className="footer-links mb-40">
                                <h5 className="h5-sm">{language === "ar" ? "الشركة" : "Company"}</h5>
                                <ul className="foo-links clearfix">
                                    <li><a href="#">{language === "ar" ? "من نحن" : "About Us"}</a></li>
                                    <li><a href="#">{language === "ar" ? "وظائف" : "Careers"}</a></li>
                                    <li><a href="#">{language === "ar" ? "الصحافة والإعلام" : "Press & Media"}</a></li>
                                    <li><a href="#">{language === "ar" ? "مدونتنا" : "Our Blog"}</a></li>
                                    <li><a href="#">{language === "ar" ? "الإعلانات" : "Advertising"}</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* Footer Links - Discover */}
                        <div className="col-md-3 col-lg-2">
                            <div className="footer-links mb-40">
                                <h5 className="h5-sm">{language === "ar" ? "اكتشف" : "Discover"}</h5>
                                <ul className="clearfix">
                                    <li><a href="#">{language === "ar" ? "مركز المساعدة" : "Help Center"}</a></li>
                                    <li><a href="#">{language === "ar" ? "الدردشة المباشرة" : "Life Chatting"}</a></li>
                                    <li><a href="#">{language === "ar" ? "الشروط والخصوصية" : "Terms & Privacy"}</a></li>
                                    <li><a href="#">{language === "ar" ? "الأسئلة الشائعة" : "FAQs"}</a></li>
                                    <li><a href="#">{language === "ar" ? "خريطة الموقع" : "Site Map"}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Bottom Footer */}
                    <div className="bottom-footer">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="footer-copyright">
                                    © 2023 <span>TebSocial</span>.{" "}
                                    {language === "ar" ? "جميع الحقوق محفوظة" : "All Rights Reserved"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}