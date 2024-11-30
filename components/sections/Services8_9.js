export default function Services8_9({ language }) {
    return (
        <>
            <section id="services-8" className="pt-80 pb-50 services-section division">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            <p className="p-md">
                                {language === "ar"
                                    ? "عليكم بقراءة المحتوى الجيد، والعمل بجد لتحقيق أهدافكم، مع إبقاء الأنظار على المكاسب والمستقبل"
                                    : "Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat"}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div
                                        className={`sbox-4 wow fadeInUp d-flex ${
                                            language === "ar" ? "flex-row-reverse text-end" : ""
                                        }`}
                                        data-wow-delay="0.1s"
                                    >
                                        <img
                                            className={`img-70 ${
                                                language === "ar" ? "ms-3" : "me-3"
                                            }`}
                                            src="/images/icons/experiment.png"
                                            alt="service-icon"
                                        />
                                        <div className="sbox-4-txt">
                                            <h5 className="h5-sm steelblue-color">
                                                {language === "ar" ? "أبحاث السوق" : "Market Research"}
                                            </h5>
                                            <p className="grey-color">
                                                {language === "ar"
                                                    ? "دراسات حول السوق لمعرفة احتياجات العملاء وتحليل الأداء التجاري لاتخاذ قرارات سليمة."
                                                    : "Maecenas laoreet augue egestas laoreet augue egestas, congue gestas volutpat posuere cubilia congue ipsum mauris lectus laoreet gestas neque volutpat and gestas posuere congue ipsum"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div
                                        className={`sbox-4 wow fadeInUp d-flex ${
                                            language === "ar" ? "flex-row-reverse text-end" : ""
                                        }`}
                                        data-wow-delay="0.3s"
                                    >
                                        <img
                                            className={`img-70 ${
                                                language === "ar" ? "ms-3" : "me-3"
                                            }`}
                                            src="/images/icons/idea-2.png"
                                            alt="service-icon"
                                        />
                                        <div className="sbox-4-txt">
                                            <h5 className="h5-sm steelblue-color">
                                                {language === "ar" ? "تجربة المستخدم" : "User Experience"}
                                            </h5>
                                            <p className="grey-color">
                                                {language === "ar"
                                                    ? "تحسين تجربة المستخدم عبر تصميم تفاعلي سهل الاستخدام لتعزيز الرضا."
                                                    : "Maecenas laoreet augue egestas laoreet augue egestas, congue gestas volutpat posuere cubilia congue ipsum mauris lectus laoreet gestas neque volutpat and gestas posuere congue ipsum"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div
                                        className={`sbox-4 wow fadeInUp d-flex ${
                                            language === "ar" ? "flex-row-reverse text-end" : ""
                                        }`}
                                        data-wow-delay="0.1s"
                                    >
                                        <img
                                            className={`img-70 ${
                                                language === "ar" ? "ms-3" : "me-3"
                                            }`}
                                            src="/images/icons/presentation.png"
                                            alt="service-icon"
                                        />
                                        <div className="sbox-4-txt">
                                            <h5 className="h5-sm steelblue-color">
                                                {language === "ar" ? "زيادة المبيعات" : "Growing Up Sales"}
                                            </h5>
                                            <p className="grey-color">
                                                {language === "ar"
                                                    ? "تطوير استراتيجيات البيع لتعزيز الربح وتحقيق النمو التجاري."
                                                    : "Maecenas laoreet augue egestas laoreet augue egestas, congue gestas volutpat posuere cubilia congue ipsum mauris lectus laoreet gestas neque volutpat and gestas posuere congue ipsum"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div
                                        className={`sbox-4 wow fadeInUp d-flex ${
                                            language === "ar" ? "flex-row-reverse text-end" : ""
                                        }`}
                                        data-wow-delay="0.3s"
                                    >
                                        <img
                                            className={`img-70 ${
                                                language === "ar" ? "ms-3" : "me-3"
                                            }`}
                                            src="/images/icons/wallet-1.png"
                                            alt="service-icon"
                                        />
                                        <div className="sbox-4-txt">
                                            <h5 className="h5-sm steelblue-color">
                                                {language === "ar" ? "زيادة الأرباح" : "Increase Profits"}
                                            </h5>
                                            <p className="grey-color">
                                                {language === "ar"
                                                    ? "تحقيق أرباح أعلى من خلال تحسين العمليات وتقليل التكاليف."
                                                    : "Maecenas laoreet augue egestas laoreet augue egestas, congue gestas volutpat posuere cubilia congue ipsum mauris lectus laoreet gestas neque volutpat and gestas posuere congue ipsum"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}