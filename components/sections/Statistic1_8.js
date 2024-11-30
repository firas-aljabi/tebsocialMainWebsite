import CounterUp from "../elements/CounterUp"
export default function Statistic1_8() {
    return (
        <>
            <div id="statistic-1" className="blue-waves wide-60 statistic-section division">
                <div className="container white-color">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            <h3 className="h3-md">More Faster, More Powerful App</h3>
                            <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
                                libero at tempus, blandit posuere ligula varius congue cursus porta feugiat
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 col-lg-8 offset-md-1 offset-lg-2">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="statistic-block wow fadeInUp" data-wow-delay="0.1s">
                                        <h5 className="statistic-number"><CounterUp end={38} />%</h5>
                                        <p className="txt-400">Fast Load Time</p>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="statistic-block wow fadeInUp" data-wow-delay="0.3s">
                                        <h5 className="statistic-number"><CounterUp end={47} />%</h5>
                                        <p className="txt-400">More Productivity</p>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="statistic-block wow fadeInUp" data-wow-delay="0.8s">
                                        <h5 className="statistic-number"><CounterUp end={43} />%</h5>
                                        <p className="txt-400">Less RAM Loading</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
