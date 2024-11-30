import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 3,
    // spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    }
}
export default function ReviewSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="reviews-holder">
                {/* TESTIMONIAL #1 */}
                <SwiperSlide className="review-1">
                    <div className="review-txt">
                        {/* Testimonial Author */}
                        <div className="author-data clearfix">
                            {/* Author Avatar */}
                            <div className="testimonial-avatar">
                                <img src="/images/review-author-1.jpg" alt="testimonial-avatar" />
                            </div>
                            {/* Author Data */}
                            <div className="review-author">
                                <h5 className="h5-xs">pebz13</h5>
                                {/* App Rating */}
                                <div className="rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star-half" />
                                </div>
                            </div>
                        </div>	{/* End Testimonial Author */}
                        {/* Testimonial Text */}
                        <p>Etiam sapien sem at sagittis congue an augue massa varius egestas a suscipit
                            magna tempus and aliquet porta vitae purus diam congue a magna undo
                        </p>
                    </div>
                </SwiperSlide>	{/*END  TESTIMONIAL #1 */}
                {/* TESTIMONIAL #2 */}
                <SwiperSlide className="review-1">
                    <div className="review-txt">
                        {/* Testimonial Author */}
                        <div className="author-data clearfix">
                            {/* Author Avatar */}
                            <div className="testimonial-avatar">
                                <img src="/images/review-author-2.jpg" alt="testimonial-avatar" />
                            </div>
                            {/* Author Data */}
                            <div className="review-author">
                                <h5 className="h5-xs">Evelyn Martinez</h5>
                                {/* App Rating */}
                                <div className="rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                            </div>
                        </div>	{/* End Testimonial Author */}
                        {/* Testimonial Text */}
                        <p>At sagittis congue augue egestas magna ipsum vitae purus ipsum primis in cubilia
                            laoreet augue egestas luctus and donec diam ociis ultrice ligula magna suscipit
                            lectus gestas augue into cubilia
                        </p>
                    </div>
                </SwiperSlide>	{/* END TESTIMONIAL #2 */}
                {/* TESTIMONIAL #3 */}
                <SwiperSlide className="review-1">
                    <div className="review-txt">
                        {/* Testimonial Author */}
                        <div className="author-data clearfix">
                            {/* Author Avatar */}
                            <div className="testimonial-avatar">
                                <img src="/images/review-author-3.jpg" alt="testimonial-avatar" />
                            </div>
                            {/* Author Data */}
                            <div className="review-author">
                                <h5 className="h5-xs">Joel Peterson</h5>
                                {/* App Rating */}
                                <div className="rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star-half" />
                                </div>
                            </div>
                        </div>	{/* End Testimonial Author */}
                        {/* Testimonial Text */}
                        <p>Mauris donec ociis magnis sapien etiam sapien congue augue egestas et ultrice
                            vitae purus diam integer congue magna ligula an egestas magna suscipit
                        </p>
                    </div>
                </SwiperSlide>	{/* END TESTIMONIAL #3 */}
                {/* TESTIMONIAL #4 */}
                <SwiperSlide className="review-1">
                    <div className="review-txt">
                        {/* Testimonial Author */}
                        <div className="author-data clearfix">
                            {/* Author Avatar */}
                            <div className="testimonial-avatar">
                                <img src="/images/review-author-4.jpg" alt="testimonial-avatar" />
                            </div>
                            {/* Author Data */}
                            <div className="review-author">
                                <h5 className="h5-xs">Michael D.</h5>
                                {/* App Rating */}
                                <div className="rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                            </div>
                        </div>	{/* End Testimonial Author */}
                        {/* Testimonial Text */}
                        <p>Mauris donec ociis magnis sapien etiam sapien congue augue pretium ligula
                            lectus aenean magna and mauris lectus laoreet tempor	egestas and magna sodales
                            vitae. Suscipit sodales vitae magna donec
                        </p>
                    </div>
                </SwiperSlide>	{/* END TESTIMONIAL #4 */}
                {/* TESTIMONIAL #5 */}
                <SwiperSlide className="review-1">
                    <div className="review-txt">
                        {/* Testimonial Author */}
                        <div className="author-data clearfix">
                            {/* Author Avatar */}
                            <div className="testimonial-avatar">
                                <img src="/images/review-author-5.jpg" alt="testimonial-avatar" />
                            </div>
                            {/* Author Data */}
                            <div className="review-author">
                                <h5 className="h5-xs">Marisol19</h5>
                                {/* App Rating */}
                                <div className="rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                            </div>
                        </div>	{/* End Testimonial Author */}
                        {/* Testimonial Text */}
                        <p>An augue in cubilia laoreet magna and suscipit egestas magna ipsum at purus ipsum
                            primis in augue ultrice ligula and egestas and suscipit lectus gestas
                        </p>
                    </div>
                </SwiperSlide>	{/* END TESTIMONIAL #5 */}
                {/* TESTIMONIAL #6 */}
                <SwiperSlide className="review-1">
                    <div className="review-txt">
                        {/* Testimonial Author */}
                        <div className="author-data clearfix">
                            {/* Author Avatar */}
                            <div className="testimonial-avatar">
                                <img src="/images/review-author-6.jpg" alt="testimonial-avatar" />
                            </div>
                            {/* Author Data */}
                            <div className="review-author">
                                <h5 className="h5-xs">Mark Hodges</h5>
                                {/* App Rating */}
                                <div className="rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                            </div>
                        </div>	{/* End Testimonial Author */}
                        {/* Testimonial Text */}
                        <p>An augue cubilia laoreet undo magna a suscipit egestas magna an ipsum ligula
                            vitae purus ipsum primis in cubilia
                        </p>
                    </div>
                </SwiperSlide>	{/* END TESTIMONIAL #6 */}
                {/* TESTIMONIAL #7 */}
                <SwiperSlide className="review-1">
                    <div className="review-txt">
                        {/* Testimonial Author */}
                        <div className="author-data clearfix">
                            {/* Author Avatar */}
                            <div className="testimonial-avatar">
                                <img src="/images/review-author-7.jpg" alt="testimonial-avatar" />
                            </div>
                            {/* Author Data */}
                            <div className="review-author">
                                <h5 className="h5-xs">Isabel M.</h5>
                                {/* App Rating */}
                                <div className="rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star-half" />
                                </div>
                            </div>
                        </div>	{/* End Testimonial Author */}
                        {/* Testimonial Text */}
                        <p>Augue egestas volutpat egestas augue in cubilia laoreet magna suscipit luctus
                            and dolor blandit vitae purus diam tempus an aliquet porta rutrum gestas egestas
                        </p>
                    </div>
                </SwiperSlide>	{/* END TESTIMONIAL #7 */}
                {/* TESTIMONIAL #8 */}
                <SwiperSlide className="review-1">
                    <div className="review-txt">
                        {/* Testimonial Author */}
                        <div className="author-data clearfix">
                            {/* Author Avatar */}
                            <div className="testimonial-avatar">
                                <img src="/images/review-author-8.jpg" alt="testimonial-avatar" />
                            </div>
                            {/* Author Data */}
                            <div className="review-author">
                                <h5 className="h5-xs">Tosha Wisdom</h5>
                                {/* App Rating */}
                                <div className="rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star-half" />
                                </div>
                            </div>
                        </div>	{/* End Testimonial Author */}
                        {/* Testimonial Text */}
                        <p>Augue egestas volutpat egestas augue in cubilia laoreet magna suscipit luctus
                            and dolor blandit vitae purus diam tempus
                        </p>
                    </div>
                </SwiperSlide>	{/* END TESTIMONIAL #8 */}
                {/* TESTIMONIAL #9*/}
                <SwiperSlide className="review-1">
                    <div className="review-txt">
                        {/* Testimonial Author */}
                        <div className="author-data clearfix">
                            {/* Author Avatar */}
                            <div className="testimonial-avatar">
                                <img src="/images/review-author-9.jpg" alt="testimonial-avatar" />
                            </div>
                            {/* Author Data */}
                            <div className="review-author">
                                <h5 className="h5-xs">James Delaney</h5>
                                {/* App Rating */}
                                <div className="rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                            </div>
                        </div>	{/* End Testimonial Author */}
                        {/* Testimonial Text */}
                        <p>Augue egestas volutpat egestas augue in cubilia laoreet magna suscipit luctus
                            magna dolor neque est gravida
                        </p>
                    </div>
                </SwiperSlide>	{/* END TESTIMONIAL #9 */}
            </Swiper>
        </>
    )
}
