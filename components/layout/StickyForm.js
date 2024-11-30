import { useState } from 'react'

export default function StickyForm() {
    const [isOpen, setIsOpen] = useState(false)

    const handleHover = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div id="sticky-form">
                <div className={`nb-form ${isOpen ? 'open' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleHover}>
                    {/* Text */}
                    <p className="nb-form-title">Send a Message</p>
                    {/* Assistant Avatar */}
                    <img className="assistant-avatar" src="images/assistant-avatar.jpg" alt="assistant-avatar" />
                    {/* QUICK FORM */}
                    <div className="bottom-form-holder">
                        <form name="quickform" className="quick-form">
                            {/* Contact Form Input */}
                            <div id="bottom-input-name">
                                <input type="text" name="name" className="bottom-form-control bname" placeholder="Your Name*" />
                            </div>
                            <div id="bottom-input-email">
                                <input type="text" name="email" className="bottom-form-control bemail" placeholder="Email Address*" />
                            </div>
                            <div id="bottom-input-message">
                                <textarea className="bottom-form-control bmessage" name="message" rows={4} placeholder="Your Message ..." defaultValue={""} />
                            </div>
                            {/* Contact Form Button */}
                            <div className="m-top-15 form-btn text-right">
                                <button type="submit" className="btn btn-yellow tra-hover">Send Message</button>
                            </div>
                            {/* Contact Form Message */}
                            <div className="col-lg-12 contact-form-msg text-center">
                                <div className="sending-msg"><span className="loading" /></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
