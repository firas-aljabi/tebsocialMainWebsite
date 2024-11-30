import Isotope from "isotope-layout";
import { useEffect, useRef } from "react";

export default function Review2Grid({ language }) {
    // Isotope
    const isotope = useRef();
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".grid-loaded", {
                itemSelector: ".review-2",
                percentPosition: true,
                masonry: {
                    columnWidth: ".review-2",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            });
        }, 1000);
    }, []);

    const testimonials = [
        {
            avatar: "/images/review-author-1.jpg",
            name: language === "ar" ? "بيبز 13" : "pebz13",
            rating: 4.5,
            text: language === "ar"
                ? "منصة مذهلة! تقدم خدمات فائقة وسهولة في الاستخدام. أنصح الجميع بتجربتها."
                : "Etiam sapien sem at sagittis congue an augue massa varius egestas a suscipit magna tempus and aliquet porta",
        },
        {
            avatar: "/images/review-author-2.jpg",
            name: language === "ar" ? "إيفلين مارتينيز" : "Evelyn Martinez",
            rating: 4,
            text: language === "ar"
                ? "خدمة رائعة ودعم فني ممتاز. أفضل منصة استخدمتها على الإطلاق!"
                : "At sagittis congue augue egestas magna ipsum vitae ",
        },
        {
            avatar: "/images/review-author-3.jpg",
            name: language === "ar" ? "جويل بيترسون" : "Joel Peterson",
            rating: 4.5,
            text: language === "ar"
                ? "سرعة وأداء عالي للغاية. حقاً يستحق التوصية."
                : "Mauris donec ociis magnis sapien etiam sapien ",
        },
        {
            avatar: "/images/review-author-5.jpg",
            name: language === "ar" ? "ماريسول 19" : "Marisol19",
            rating: 5,
            text: language === "ar"
                ? "تجربة مدهشة! أسلوب سهل وسريع ونتائج رائعة."
                : "An augue in cubilia laoreet magna and suscipit egestas magna ",
        },
        {
            avatar: "/images/review-author-7.jpg",
            name: language === "ar" ? "إيزابيل م." : "Isabel M.",
            rating: 4.5,
            text: language === "ar"
                ? "منصة سهلة الاستخدام تجعل العمل أكثر كفاءة وسرعة."
                : "Augue egestas volutpat egestas augue in cubilia laoreet magna suscipit luctus and ",
        },
        {
            avatar: "/images/review-author-8.jpg",
            name: language === "ar" ? "توشا ويزدوم" : "Tosha Wisdom",
            rating: 4.5,
            text: language === "ar"
                ? "منتج رائع! ساعدني كثيرًا في تنظيم عملي بشكل أفضل."
                : "Augue egestas volutpat egestas augue in cubilia laoreet magna suscipit luctus and dolor blandit vitae purus diam tempus",
        },
    ];

    return (
        <>
            <div className="masonry-wrap grid-loaded">
                {testimonials.map((testimonial, index) => (
                    <div
                        className="review-2"
                        key={index}
                        style={{
                            marginBottom: "20px", // Ensure space below each box
                            direction: language === "ar" ? "rtl" : "ltr", // Handle RTL for Arabic
                        }}
                    >
                        <div className="review-txt">
                            {/* Testimonial Author */}
                            <div className="author-data clearfix">
                                {/* Author Avatar */}
                                <div className="testimonial-avatar">
                                    <img src={testimonial.avatar} alt="testimonial-avatar" />
                                </div>
                                {/* Author Data */}
                                <div className="review-author">
                                    <h5 className="h5-xs">{testimonial.name}</h5>
                                    {/* App Rating */}
                                    <div className="rating">
                                        {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                                            <i className="fas fa-star" key={i} />
                                        ))}
                                        {testimonial.rating % 1 !== 0 && (
                                            <i className="fas fa-star-half" />
                                        )}
                                    </div>
                                </div>
                            </div>
                            {/* Testimonial Text */}
                            <p>{testimonial.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}