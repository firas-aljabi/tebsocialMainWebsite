import Preloader from "@/components/elements/Preloader"
import { useEffect, useState } from "react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "../public/css/bootstrap.min.css"
import "../public/css/all.css"
import "../public/css/flaticon.css"
import "../public/css/magnific-popup.css"
import "../public/css/animate.css"
import "../public/css/demo.css"
import "../public/css/theme.css"
import "../public/css/responsive.css"

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);
    return <>{!loading ? <Component {...pageProps} /> : <Preloader />}</>;
}
export default MyApp;
