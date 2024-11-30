import Accordion1 from "../elements/Accordion1"
export default function Faqs1_2() {
    return (
        <>
            <section id="faqs-1" className="bg-lightgrey wide-100 faqs-section division">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            <h3 className="h3-md">Have Questions? Look Here.</h3>
                            <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
                                libero at tempus, blandit posuere ligula varius congue cursus porta feugiat
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <Accordion1 />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="more-questions">
                                <h5 className="h5-xs">Still have a question? <a href="/faqs">Ask your question here</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
