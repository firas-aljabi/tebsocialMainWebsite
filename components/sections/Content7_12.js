export default function Content7_12({ language }) {
    return (
        <>
            <section id="content-7" className="wide-60 content-section division">
                <div className="container">
                    <div
                        className={`row d-flex align-items-center ${
                            language === "ar" ? "flex-row-reverse text-end" : "text-start"
                        }`}
                    >
                        <div className="col-md-6 col-xl-6">
                            <div className="txt-block pc-30 wow fadeInUp" data-wow-delay="0.1s">
                                <span className="section-id primary-color">
                                    {language === "ar" ? "تمامًا أمثل" : "Totally Optimized"}
                                </span>
                                <h3 className="h3-md steelblue-color">
                                    {language === "ar"
                                        ? "نظم عملك على الإنترنت بسرعة وسهولة"
                                        : "Organize your online business fast & easily"}
                                </h3>
                                <div
                                    className="cbox-1 d-flex align-items-start"
                                    style={{
                                        direction: language === "ar" ? "rtl" : "ltr",
                                    }}
                                >
                                    <i
                                        className="fas fa-circle"
                                        style={{
                                            marginInlineEnd: language === "ar" ? "15px" : "0",
                                            marginInlineStart: language === "ar" ? "0" : "15px",
                                            alignSelf: "flex-start",
                                        }}
                                    />
                                    <div className="cbox-1-txt grey-color">
                                        <p>
                                            {language === "ar"
                                                ? "يقوم نظامنا بتسهيل إدارة عملك على الإنترنت من خلال أدوات مبتكرة وحلول متكاملة تضمن الإنتاجية العالية."
                                                : "Velna iaculis odio auctor integer congue impedit magna viverra at dolor vitae donec mauris lectus laoreet gestas neque undo luctus feugiat. Justo integer at odio velna vitae auctor integer congue"}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="cbox-1 d-flex align-items-start"
                                    style={{
                                        direction: language === "ar" ? "rtl" : "ltr",
                                    }}
                                >
                                    <i
                                        className="fas fa-circle"
                                        style={{
                                            marginInlineEnd: language === "ar" ? "15px" : "0",
                                            marginInlineStart: language === "ar" ? "0" : "15px",
                                            alignSelf: "flex-start",
                                        }}
                                    />
                                    <div className="cbox-1-txt grey-color">
                                        <p>
                                            {language === "ar"
                                                ? "يوفر نظامنا أدوات متقدمة لتحليل وإدارة البيانات الخاصة بعملك لتبسيط العمليات وتحقيق نتائج فعالة."
                                                : "An enim nullam tempor sapien gravida donec pretium and ipsum porta justo integer at velna vitae auctor integer congue a magna ipsum purus pretium ligula rutrum luctus ultrice. Aliquam a augue suscipit, luctus neque purus ipsum neque dolor feugiat"}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="tools-list mt-15"
                                    style={{
                                        direction: language === "ar" ? "rtl" : "ltr",
                                        textAlign: language === "ar" ? "right" : "left",
                                    }}
                                >
                                    <h5 className="h5-xs">
                                        {language === "ar" ? "التقنيات التي نستخدمها:" : "Technologies We Use:"}
                                    </h5>
                                    <i className="fab fa-html5" />
                                    <i className="fab fa-css3-alt" />
                                    <i className="fab fa-js-square" />
                                    <i className="fab fa-php" />
                                    <i className="fab fa-mailchimp" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-5 offset-xl-1">
                            <div
                                className="content-7-img wow fadeInRight"
                                data-wow-delay="0.3s"
                                style={{
                                    transform: language === "ar" ? "translateX(-400px)" : "translateX(0)",
                                }}
                            >
                                <img
                                    className="img-fluid"
                                    src="/images/image-08.png"
                                    alt={language === "ar" ? "صورة المحتوى" : "content-image"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}