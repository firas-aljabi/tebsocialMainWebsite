import CounterUp from "../elements/CounterUp"
export default function Statistic2_1() {
    return (
        <>
            <div id="statistic-2" className="bg-lightgrey statistic-section division">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3">
                            <div className="statistic-block icon-xs wow fadeInUp" data-wow-delay="0.1s">
                                <span className="flaticon-323-download-2" />
                                <h5 className="statistic-number steelblue-color">9,<span className="count-element">632</span></h5>
                                <p className="txt-400">Total Downloads</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="statistic-block icon-xs wow fadeInUp" data-wow-delay="0.3s">
                                <span className="flaticon-269-heart" />
                                <h5 className="statistic-number steelblue-color">5,<CounterUp end={281} /></h5>
                                <p className="txt-400">Happy Customers</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="statistic-block icon-xs wow fadeInUp" data-wow-delay="0.8s">
                                <span className="flaticon-032-user-3" />
                                <h5 className="statistic-number steelblue-color">6,<CounterUp end={179} /></h5>
                                <p className="txt-400">Active Accounts</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="statistic-block icon-xs wow fadeInUp" data-wow-delay="1s">
                                <span className="flaticon-266-help" />
                                <h5 className="statistic-number steelblue-color">1,<CounterUp end={473} /></h5>
                                <p className="txt-400">Tickets Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
