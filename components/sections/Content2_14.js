export default function Content2_14({ language }) {
    return (
        <>
            <section id="content-2" className="bg-lightgrey wide-60 content-section division">
                <div className="container">
                    <div
                        className={`row d-flex align-items-center ${
                            language === "ar" ? "flex-row-reverse text-end" : "text-start"
                        }`}
                    >
                        <div className="col-md-6">
                            <div className="img-block wow fadeInUp" data-wow-delay="0.3s">
                                <img
                                    className="img-fluid"
                                    src="/images/image-05.png"
                                    alt={language === "ar" ? "صورة المحتوى" : "content-image"}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="txt-block pc-30 wow fadeInUp" data-wow-delay="0.1s">
                                <span className="section-id primary-color">
                                    {language === "ar" ? "التعامل بسهولة" : "Handling With Ease"}
                                </span>
                                <h3 className="h3-md steelblue-color">
                                    {language === "ar"
                                        ? "عزز تصميم موقعك مع طب سوشل"
                                        : "Enhance your website design with TebSocial"}
                                </h3>
                                <p>
                                    {language === "ar"
                                        ? "تمتع بتصميم موقعك بشكل متميز مع حلولنا المبتكرة التي تجعل من السهل إدارة وتطوير المحتوى الخاص بك بفعالية."
                                        : "An enim nullam tempor sapien gravida donec pretium ipsum porta justo integer at odio velna vitae auctor integer congue magna purus pretium ligula rutrum luctus ultrice aliquam a augue suscipit"}
                                </p>
                                <h5 className="h5-md steelblue-color">
                                    {language === "ar" ? "المزايا لا تتوقف" : "Features Never Stop"}
                                </h5>
                                <div
                                    className="box-list m-top-15 d-flex align-items-start"
                                    style={{
                                        direction: language === "ar" ? "rtl" : "ltr",
                                        textAlign: language === "ar" ? "right" : "left",
                                    }}
                                >
                                    <div
                                        className="box-list-icon"
                                        style={{
                                            marginInlineEnd: language === "ar" ? "20px" : "10px", // Adds space dynamically
                                            marginInlineStart: language === "ar" ? "0" : "10px",
                                        }}
                                    >
                                        <i className="fas fa-genderless" />
                                    </div>
                                    <p>
                                        {language === "ar"
                                            ? "سهولة في التصفح مع تصميم مبتكر يلبي احتياجاتك."
                                            : "Fringilla risus nec, luctus mauris orci auctor purus euismod pretium purus pretium ligula rutrum tempor sapien"}
                                    </p>
                                </div>
                                <div
                                    className="box-list d-flex align-items-start"
                                    style={{
                                        direction: language === "ar" ? "rtl" : "ltr",
                                        textAlign: language === "ar" ? "right" : "left",
                                    }}
                                >
                                    <div
                                        className="box-list-icon"
                                        style={{
                                            marginInlineEnd: language === "ar" ? "20px" : "10px", // Adds space dynamically
                                            marginInlineStart: language === "ar" ? "0" : "10px",
                                        }}
                                    >
                                        <i className="fas fa-genderless" />
                                    </div>
                                    <p>
                                        {language === "ar"
                                            ? "واجهة مستخدم سهلة تضمن تجربة فريدة."
                                            : "Quaerat sodales sapien undo euismod purus blandit"}
                                    </p>
                                </div>
                                <div
                                    className="box-list d-flex align-items-start"
                                    style={{
                                        direction: language === "ar" ? "rtl" : "ltr",
                                        textAlign: language === "ar" ? "right" : "left",
                                    }}
                                >
                                    <div
                                        className="box-list-icon"
                                        style={{
                                            marginInlineEnd: language === "ar" ? "20px" : "10px", // Adds space dynamically
                                            marginInlineStart: language === "ar" ? "0" : "10px",
                                        }}
                                    >
                                        <i className="fas fa-genderless" />
                                    </div>
                                    <p>
                                        {language === "ar"
                                            ? "أدوات متقدمة لتحسين إنتاجيتك."
                                            : "Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium purus"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}