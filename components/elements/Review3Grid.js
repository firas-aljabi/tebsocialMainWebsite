import Isotope from "isotope-layout"
import { useEffect, useRef } from "react"

export default function Review3Grid() {
    // Isotope
    const isotope = useRef()
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".grid-loaded", {
                itemSelector: ".review-2",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".review-2",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    return (
        <>
            <div className="masonry-wrap grid-loaded reviews-3-holder wow fadeInRight" data-wow-delay="0.3s">
                {/* TESTIMONIAL #1 */}
                <div className="review-2 mt-40">
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
                        <p>Etiam sapien at sagittis congue an augue massa varius egestas undo suscipit
                            magna a tempus aliquet porta	an luctus blandit magna at pretium purus pretium
                        </p>
                    </div>
                </div>	{/*END  TESTIMONIAL #1 */}
                {/* TESTIMONIAL #2 */}
                <div className="review-2">
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
                            laoreet an augue egestas luctus and donec diam ociis ultrice ligula magna suscipit
                            lectus augue into cubilia
                        </p>
                    </div>
                </div>	{/* END TESTIMONIAL #2 */}
                {/* TESTIMONIAL #3 */}
                <div className="review-2">
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
                        <p>Mauris donec ociis magnis sapien etiam a sapien congue and augue egestas et ultrice
                            ligula an egestas magna suscipit a congue tempor gravida donec enim porta
                        </p>
                    </div>
                </div>	{/* END TESTIMONIAL #3 */}
                {/* TESTIMONIAL #4 */}
                <div className="review-2">
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
                            and dolor blandit vitae purus tempus an aliquet porta rutrum gestas egestas
                            and varius amet mauris suscipit
                        </p>
                    </div>
                </div>	{/* END TESTIMONIAL #4 */}
            </div>
        </>
    )
}
