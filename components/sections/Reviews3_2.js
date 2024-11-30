import dynamic from 'next/dynamic'
const Review3Grid = dynamic(() => import('@/components/elements/Review3Grid'), {
    ssr: false,
})
export default function Reviews3_2() {
    return (
        <>
            <section id="reviews-3" className="wide-100 reviews-section">
                <div className="bg-inner division">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-5">
                                <div className="txt-block pc-30 wow fadeInUp" data-wow-delay="0.1s">
                                    <span className="section-id primary-color">Our Customers</span>
                                    <h3 className="h3-md steelblue-color">10K+ Customers Love TebSocial</h3>
                                    <p>Semper lacus cursus porta, feugiat primis in ultrice ligula tempus auctor ipsum and mauris
                                        lectus enim ipsum. At sagittis congue augue egestas
                                    </p>
                                    <a href="#" className="btn btn-tra-grey primary-color-hover mt-20">Find Out More</a>
                                </div>
                            </div>
                            <div className="col-lg-7 reviews-grid">
                                <Review3Grid />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
