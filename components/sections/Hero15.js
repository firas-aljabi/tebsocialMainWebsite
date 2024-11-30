import { useEffect } from "react";
import VideoPopup from "../elements/VidepPopup";

export default function Hero15({ language }) {
    useEffect(() => {
        console.log(language, "language");
    }, [language]);

    return (
        <>
            <section id="hero-15" className="bg-scroll hero-section division">
                <div className="container">
                    <div
                        className={`row ${
                            language === "ar" ? "flex-row-reverse text-end" : "text-start"
                        }`}
                    >
                        {/* Text Content */}
                        <div className="col-md-7 col-lg-6 col-xl-5">
                            <div className="hero-txt white-color">
                                <h2>
                                    {language === "ar"
                                        ? "نحن نبني مواقع ويب لعملك"
                                        : "We build websites for your business"}
                                </h2>
                                <ul
                                    className="content-list"
                                    style={{
                                        direction: language === "ar" ? "rtl" : "ltr", // Handle text direction
                                        textAlign: language === "ar" ? "right" : "left", // Align text properly
                                        listStyleType: "disc", // Set the bullet style
                                        paddingInlineStart: language === "ar" ? "20px" : "40px", // Adjust padding for bullets
                                        paddingInlineEnd: language === "ar" ? "40px" : "0", // Adjust for RTL
                                    }}
                                >
                                    <li style={{ marginBottom: "10px" }}>
                                        <p className="p-md">
                                            {language === "ar"
                                                ? "ليجولا ريسوس أوكتور أوجي إيجيستاس في ماوريس"
                                                : "Ligula risus auctor augue egestas at mauris"}
                                        </p>
                                    </li>
                                    <li style={{ marginBottom: "10px" }}>
                                        <p className="p-md">
                                            {language === "ar"
                                                ? "ساجيتيس كونجوي أوجي إيجيستاس إيجيستاس ماغنا"
                                                : "Sagittis congue augue egestas egestas magna"}
                                        </p>
                                    </li>
                                    <li style={{ marginBottom: "10px" }}>
                                        <p className="p-md">
                                            {language === "ar"
                                                ? "فيغويت بريمس ليجولا ريسوس أوكتور أوجي إيجيستاس ماوريس فيفيرا تورتور في ياكوليس ماغنا فيغويت"
                                                : "Feugiat primis ligula risus auctor augue an egestas mauris viverra tortor in iaculis magna feugiat"}
                                        </p>
                                    </li>
                                </ul>
                                <div className="hero-btns mt-30">
                                    <a href="#" className="btn btn-yellow tra-hover">
                                        {language === "ar"
                                            ? "اشتر الآن بـ 15 دولارًا"
                                            : "Buy Now For - $15"}
                                    </a>
                                    <VideoPopup style={3} />
                                </div>
                            </div>
                        </div>
                        {/* Image */}
                        <div className="col-md-5 col-lg-6 col-xl-6 offset-xl-1">
                            <div
                                className="hero-15-img text-center"
                                style={{
                                    transform:
                                        language === "ar"
                                            ? "translateX(-500px)" // Push to the left
                                            : "translateX(0px)", // Default position
                                }}
                            >
                                <img
                                    className="img-fluid"
                                    src="/images/hero-15-img.png"
                                    alt="hero-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-fixed hero-15-wave" />
            </section>
        </>
    );
}