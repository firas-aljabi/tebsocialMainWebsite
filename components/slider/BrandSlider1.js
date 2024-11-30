import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 6,
    // spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 5,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 6,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 6,
            // spaceBetween: 30,
        },
    }
}
export default function BrandSlider1() {
    return (
        <>
            <Swiper {...swiperOptions}>
                <SwiperSlide>
                </SwiperSlide>
            </Swiper>
            <Swiper {...swiperOptions} className="brands-carousel">
                <SwiperSlide className="brand-logo">
                    <img className="img-fluid" src="/images/brand-1.png" alt="brand-logo" />
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <img className="img-fluid" src="/images/brand-2.png" alt="brand-logo" />
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <img className="img-fluid" src="/images/brand-3.png" alt="brand-logo" />
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <img className="img-fluid" src="/images/brand-4.png" alt="brand-logo" />
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <img className="img-fluid" src="/images/brand-5.png" alt="brand-logo" />
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <img className="img-fluid" src="/images/brand-6.png" alt="brand-logo" />
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <img className="img-fluid" src="/images/brand-7.png" alt="brand-logo" />
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <img className="img-fluid" src="/images/brand-3.png" alt="brand-logo" />
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <img className="img-fluid" src="/images/brand-5.png" alt="brand-logo" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
