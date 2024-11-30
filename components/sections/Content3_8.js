import VideoPopup from "../elements/VidepPopup"
export default function Content3_8() {
    return (
        <>
            <section id="content-3" className="wide-60 content-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6">
                            <div className="txt-block pc-30 wow fadeInUp" data-wow-delay="0.1s">
                                <div id="list-tab" className="list-group primary-theme" role="tablist">
                                    <a id="tab1-list" className="list-group-item list-group-item-action active" data-toggle="list" href="#tab-1" role="tab" aria-controls="tab-1">
                                        <div className="cbox-4">
                                            <h5 className="h5-sm">Feature Integration</h5>
                                            <p>Semper lacus cursus porta, feugiat primis in luctus ultrice tellus potenti neque
                                                dolor in primis congue
                                            </p>
                                        </div>
                                    </a>
                                    <a id="tab2-list" className="list-group-item list-group-item-action" data-toggle="list" href="#tab-2" role="tab" aria-controls="tab-2">
                                        <div className="cbox-4">
                                            <h5 className="h5-sm">Comments and Mentions</h5>
                                            <p>Lacus cursus porta,feugiat primis congue magna purus at pretium ligula rutrum
                                                luctus and ultrice tellus
                                            </p>
                                        </div>
                                    </a>
                                    <a id="tab3-list" className="list-group-item list-group-item-action" data-toggle="list" href="#tab-3" role="tab" aria-controls="tab-3">
                                        <div className="cbox-4">
                                            <h5 className="h5-sm">Elegant User Interface</h5>
                                            <p>Luctus congue magna at pretium purus pretium ligula rutrum neque incidunt tempor
                                                laoreet ipsum rhoncus, tempor posuere ligula varius donec purus feugiat
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="img-block pr-30 wow fadeInUp" data-wow-delay="0.3s">
                                <div id="nav-tabContent" className="tab-content">
                                    <div id="tab-1" className="tab-pane show active" role="tabpanel" aria-labelledby="tab1-list">
                                        <img className="img-fluid" src="/images/tab-1-img.png" alt="tab-image" />
                                    </div>
                                    <div id="tab-2" className="tab-pane" role="tabpanel" aria-labelledby="tab2-list">
                                        <div className="video-preview text-center">
                                            <VideoPopup style={2} />
                                        </div>
                                    </div>
                                    <div id="tab-3" className="tab-pane" role="tabpanel" aria-labelledby="tab3-list">
                                        <img className="img-fluid" src="/images/tab-3-img.png" alt="tab-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
