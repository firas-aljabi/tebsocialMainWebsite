export default function Content1_5({ language }) {
    return (
        <>
            <section id="content-1" className="wide-60 content-section division">
                <div className="container">
                    <div
                        className={`row d-flex align-items-center ${
                            language === "ar" ? "flex-row-reverse text-end" : "text-start"
                        }`}
                    >
                        <div className="col-md-6">
                            <div className="txt-block pc-30 wow fadeInUp" data-wow-delay="0.1s">
                                <span className="section-id primary-color">
                                    {language === "ar" ? "جمال البساطة" : "Beauty of simplicity"}
                                </span>
                                <h3 className="h3-md steelblue-color">
                                    {language === "ar"
                                        ? "نحن نجعل التصميم أفضل للجميع"
                                        : "We are making design better for everyone"}
                                </h3>
                                <p>
                                    {language === "ar"
                                        ? "نحن نقدم حلول تصميم مبتكرة تجعل كل شيء أبسط وأسهل للجميع، مع التركيز على تحسين الإنتاجية."
                                        : "An enim nullam tempor sapien gravida donec enim ipsum porta justo integer at odio velna vitae auctor integer congue magna at pretium purus pretium ligula rutrum luctus risus ultrice luctus in ligula blandit congue magna undo impedit"}
                                </p>
                                <div className="quote primary-theme mt-20">
                                    <p>
                                        {language === "ar"
                                            ? "الاقتباس: 'نحن نؤمن بأن التصميم الجيد يجعل الحياة أسهل ويعزز التجربة اليومية للمستخدمين.'"
                                            : `"Lorem ipsum dolor sit amet, lectus laoreet impedit gestas. Aenean magna ligula eget dolor suscipit egestas viverra dolor iaculis luctus magna suscipit egestas "`}
                                    </p>
                                    <div className="quote-avatar">
                                        <img
                                            src="/images/quote-avatar.jpg"
                                            alt={language === "ar" ? "صورة الاقتباس" : "quote-avatar"}
                                        />
                                    </div>
                                    <div className="quote-author">
                                        <h5 className="h5-xs">
                                            {language === "ar" ? "جيمس باترسون" : "James Paterson"}
                                        </h5>
                                        <span className="grey-color">
                                            {language === "ar" ? "المدير التنفيذي لـ طب سوشل" : "CEO of TebSocial"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div
                                className="img-block wow fadeInUp"
                                data-wow-delay="0.3s"
                               
                            >
                                <img
                                    className="img-fluid"
                                    src="/images/image-04.png"
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