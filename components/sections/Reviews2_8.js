import dynamic from "next/dynamic";

const Review2Grid = dynamic(() => import("@/components/elements/Review2Grid"), {
    ssr: false,
});

export default function Reviews2_8({ language }) {
    return (
        <>
            <section id="reviews-2" className="bg-lightgrey wide-80 reviews-section division">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            <h3 className="h3-md steelblue-color">
                                {language === "ar"
                                    ? "ما يقوله عملاؤنا"
                                    : "What Our Customers Are Saying"}
                            </h3>
                            <p className="p-md">
                                {language === "ar"
                                    ? "نحن نفخر بتقديم خدمات عالية الجودة تضمن رضا عملائنا وتحقيق أهدافهم."
                                    : "Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat"}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 reviews-grid">
                            <Review2Grid language={language} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}