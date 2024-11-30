import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, headerCls, noTra, language, setLanguage }) {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    // Handle language toggle
    const toggleLanguage = () => {
        const newLanguage = language === "en" ? "ar" : "en";
        setLanguage(newLanguage);
    };

    // Check screen size to determine small screen layout
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        // Set initial screen size
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <header id="header" className="header">
                <nav
                    className={`navbar fixed-top navbar-expand-md ${
                        headerCls ? headerCls : ""
                    } ${noTra ? "" : "bg-tra"} hover-menu ${scroll ? "scroll" : ""}`}
                >
                    <div
                        className={`container d-flex ${
                            language === "ar"
                                ? "flex-row-reverse justify-content-between"
                                : "flex-row justify-content-between"
                        } align-items-center`}
                    >
                        {/* Logo */}
                        <Link href="/" className="navbar-brand">
                            <img
                                src={
                                    language === "ar"
                                        ? "/images/image.png" // Optional logo for Arabic
                                        : "/images/image.png"
                                }
                                width={100}
                             
                                alt="header-logo"
                            />
                        </Link>

                        {/* Replace burger menu with translation button on small screens */}
                        {isSmallScreen ? (
                            <button
                                className={`nav-link btn btn-nav language-switcher ${
                                    language === "ar" ? "rtl" : "ltr"
                                }`}
                                onClick={toggleLanguage}
                                style={{
                                    position: "relative",
                                    overflow: "hidden",
                                    border: "none",
                                    padding: "10px 20px",
                                    background: "linear-gradient(90deg, #4e54c8, #8f94fb)",
                                    color: "#fff",
                                    borderRadius: "50px",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    transition: "transform 0.3s ease-in-out",
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.transform = "scale(1.1)";
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.transform = "scale(1)";
                                }}
                            >
                                {language === "en" ? "العربية" : "English"}
                            </button>
                        ) : (
                            <div className="d-flex align-items-center">
                                <button
                                    className={`nav-link btn btn-nav language-switcher ${
                                        language === "ar" ? "rtl" : "ltr"
                                    }`}
                                    onClick={toggleLanguage}
                                    style={{
                                        position: "relative",
                                        overflow: "hidden",
                                        border: "none",
                                        padding: "10px 20px",
                                        background: "linear-gradient(90deg, #4e54c8, #8f94fb)",
                                        color: "#fff",
                                        borderRadius: "50px",
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        transition: "transform 0.3s ease-in-out",
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.transform = "scale(1.1)";
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.transform = "scale(1)";
                                    }}
                                >
                                    {language === "en" ? "العربية" : "English"}
                                </button>
                                <button
                                    className="navbar-toggler ms-2"
                                    type="button"
                                    onClick={handleMobileMenu}
                                >
                                    <span className="navbar-bar-icon">
                                        <i className="fas fa-bars" />
                                    </span>
                                </button>
                            </div>
                        )}
                    </div>
                </nav>
            </header>
        </>
    );
}