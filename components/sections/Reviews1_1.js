import ReviewSlider1 from "../slider/ReviewSlider1"
export default function Reviews1_1() {
    return (
        <>
            <section id="reviews-1" className="wide-100 reviews-section division">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            <h3 className="h3-md">10K+ Customers Love TebSocial</h3>
                            <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
                                libero at tempus, blandit posuere ligula varius congue cursus porta feugiat
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ReviewSlider1 />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
