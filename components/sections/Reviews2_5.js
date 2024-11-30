import dynamic from 'next/dynamic'
const Review2Grid = dynamic(() => import('@/components/elements/Review2Grid'), {
    ssr: false,
})
export default function Reviews2_5() {
    return (
        <>
            <section id="reviews-2" className="wide-80 reviews-section division">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            <h3 className="h3-md steelblue-color">What Our Customers Are Saying</h3>
                            <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
                                libero at tempus, blandit posuere ligula varius congue cursus porta feugiat
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 reviews-grid">
                            <Review2Grid />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
