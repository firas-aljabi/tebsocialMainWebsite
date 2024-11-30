import { useState } from "react";

export default function Contacts1_3({ language }) {
    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        message: "",
    });

    const isFormValid = formData.name && formData.subject && formData.message;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailto = `mailto:firasaljabi1111@gmail.com?subject=${encodeURIComponent(
            formData.subject
        )}&body=${encodeURIComponent(
            `Hello there, my name is ${formData.name}. I am reaching out to ask about ${formData.subject}. Here is my message:\n\n${formData.message}`
        )}`;
        window.location.href = mailto;
    };

    return (
        <>
            <section id="contacts-1" className="bottom-clouds wide-100 contacts-section division">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            <h3 className="h3-md steelblue-color">
                                {language === "ar"
                                    ? "تبحث عن الدعم؟ تواصل معنا"
                                    : "Looking For Support? Get In Touch"}
                            </h3>
                            <p className="p-md">
                                {language === "ar"
                                    ? "نحن هنا لمساعدتك في أي استفسار أو مشكلة. يرجى التواصل معنا للحصول على الدعم الذي تحتاجه."
                                    : "Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat"}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 col-xl-8 offset-md-1 offset-xl-2">
                            <div className="form-holder">
                                <form
                                    name="contactform"
                                    className={`row contact-form ${
                                        language === "ar" ? "text-end" : "text-start"
                                    }`}
                                    onSubmit={handleSubmit}
                                >
                                    <div id="input-name" className="col-lg-6">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control name"
                                            placeholder={language === "ar" ? "اسمك*" : "Your Name*"}
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div id="input-subject" className="col-md-12 input-subject">
                                        <select
                                            id="inlineFormCustomSelect1"
                                            name="subject"
                                            className="custom-select subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                        >
                                            <option value="">
                                                {language === "ar"
                                                    ? "هذا السؤال حول..."
                                                    : "This question is about..."}
                                            </option>
                                            <option value="Registering/Authorising">
                                                {language === "ar"
                                                    ? "التسجيل / التفويض"
                                                    : "Registering/Authorising"}
                                            </option>
                                            <option value="Using TebSocial">
                                                {language === "ar" ? "استخدام طب سوشل" : "Using TebSocial"}
                                            </option>
                                            <option value="Troubleshooting">
                                                {language === "ar" ? "استكشاف الأخطاء وإصلاحها" : "Troubleshooting"}
                                            </option>
                                            <option value="Backup/Restore">
                                                {language === "ar" ? "النسخ الاحتياطي / الاستعادة" : "Backup/Restore"}
                                            </option>
                                            <option value="Other">
                                                {language === "ar" ? "آخر" : "Other"}
                                            </option>
                                        </select>
                                    </div>
                                    <div id="input-message" className="col-lg-12 input-message">
                                        <textarea
                                            className="form-control message"
                                            name="message"
                                            rows={6}
                                            placeholder={
                                                language === "ar"
                                                    ? "رسالتك ..."
                                                    : "Your Message ..."
                                            }
                                            value={formData.message}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-lg-12 mt-15 form-btn">
                                        <button
                                            type="submit"
                                            className="btn btn-primary-color black-hover submit"
                                            disabled={!isFormValid}
                                        >
                                            {language === "ar" ? "أرسل رسالتك" : "Send Your Message"}
                                        </button>
                                    </div>
                                    <div className="col-lg-12 contact-form-msg text-center">
                                        <div className="sending-msg">
                                            {/* Add any loading or success message here if needed */}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}