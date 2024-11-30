export default function Cta2_6({ language }) {
    return (
        <>
            <section id="cta-2" className="bg-image wide-100 cta-section division">
                <div className="container white-color">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className={`cta-txt text-center ${language === "ar" ? "text-end" : "text-center"}`}>
                                <h3 className="h3-xs">
                                    {language === "ar"
                                        ? "قم بإنشاء تجارب أفضل مع طب سوشل"
                                        : "Create better experiences with TebSocial"}
                                </h3>
                                <p className="p-md">
                                    {language === "ar"
                                        ? "استمتع بتجربة مميزة مع تقنياتنا الحديثة التي تساعدك على تحقيق نتائج مبهرة بسهولة."
                                        : "Feugiat eros, ac tincidunt ligula massa in faucibus orci luctus et ultrices posuere cubilia curae integer congue leo metus, eu mollis lorem primis in orci integer metus mollis faucibus"}
                                </p>
                                <div className="btns-group">
                                    <a
                                        href="#"
                                        className="btn btn-primary-color tra-hover mr-15"
                                        style={{
                                            direction: language === "ar" ? "rtl" : "ltr",
                                        }}
                                    >
                                        {language === "ar" ? "طلب تجربة مجانية" : "Request Free Trial"}
                                    </a>
                                    <a
                                        href="#"
                                        className="btn btn-tra-white black-hover"
                                        style={{
                                            direction: language === "ar" ? "rtl" : "ltr",
                                        }}
                                    >
                                        {language === "ar" ? "شراء فقط بـ $6.99" : "Buy For Only $6.99"}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}