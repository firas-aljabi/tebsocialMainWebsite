import { useState } from 'react'

export default function Accordion1() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })
    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div id="accordion" role="tablist">
                {/* ACCORDION CARD #1 */}
                <div className="card">
                    {/* Card Title */}
                    <div className="card-header" role="tab" id="headingOne">
                        <h5 className="h5-sm" onClick={() => handleToggle(1)}>
                            <a className={isActive.key == 1 ? "collapsed" : ""} href="#collapseOne" role="button" aria-expanded="true" aria-controls="collapseOne">
                                Do you have non-profit discount?
                            </a>
                        </h5>
                    </div>
                    {/* Card Content */}
                    <div className={isActive.key == 1 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                            <p>Aliqum  mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae
                                auctor eros congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien
                                etiam sapien sem sagittis congue tempor gravida donec enim ipsum porta justo integer at
                                odio velna congue integer vitae auctor eros dolor luctus odio placerat massa magna
                            </p>
                            <p>Nullam rutrum eget nunc varius etiam mollis risus congue aliquam etiam sapien egestas,
                                congue gestas posuere cubilia congue ipsum mauris lectus laoreet gestas neque vitae
                                auctor eros dolor luctus odio placerat magna cursus
                            </p>
                        </div>
                    </div>
                </div>	{/* END ACCORDION CARD #1 */}
                {/* ACCORDION CARD #2 */}
                <div className="card">
                    {/* Card Title */}
                    <div className="card-header" role="tab" id="headingTwo">
                        <h5 className="h5-sm" onClick={() => handleToggle(2)}>
                            <a className={isActive.key == 2 ? "collapsed" : ""} data-toggle="collapse" href="#collapseTwo" role="button" aria-expanded="false" aria-controls="collapseTwo">
                                How do I install a TebSocial?
                            </a>
                        </h5>
                    </div>
                    {/* Card Content */}
                    <div className={isActive.key == 2 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                            <p>Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque vel laoreet
                                turpis. Urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur
                                nibh, vel imperdiet dui varius viverra. Pellentesque ac massa lorem. Fusce eu cursus est.
                                Fusce non nulla vitae massa placerat vulputate vel a purus
                            </p>
                        </div>
                    </div>
                </div>	{/* END ACCORDION CARD #2 */}
                {/* ACCORDION CARD #3 */}
                <div className="card">
                    {/* Card Title */}
                    <div className="card-header" role="tab" id="headingThree">
                        <h5 className="h5-sm" onClick={() => handleToggle(3)}>
                            <a className={isActive.key == 3 ? "collapsed" : ""} data-toggle="collapse" href="#collapseThree" role="button" aria-expanded="false" aria-controls="collapseThree">
                                What I can do with my purchase?
                            </a>
                        </h5>
                    </div>
                    {/* Card Content */}
                    <div className={isActive.key == 3 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                            <p>Nullam rutrum eget nunc varius etiam mollis risus congue aliquam etiam sapien egestas,
                                congue gestas posuere cubilia congue ipsum mauris lectus laoreet gestas neque vitae
                                auctor eros dolor luctus odio placerat magna cursus
                            </p>
                            <ul className="txt-list">
                                <li>Vitae auctor integer congue magna at pretium purus pretium ligula rutrum luctus
                                    risus eros dolor auctor
                                </li>
                                <li>Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum
                                    vitae purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec
                                    diam.Tempor sapien gravida donec enim ipsum blandit magna at purus pretium ligula
                                    rutrum luctus gravida donec porta justo integer
                                </li>
                                <li>Justo odio integer a velna lectus aenean magna and mauris lectus pretium ligula rutrum
                                    luctus risus ac risus auctor gravida donec congue tempor gravida donec enim ipsum porta
                                    justo integer
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>	  {/* END ACCORDION CARD #3 */}
                {/* ACCORDION CARD #4 */}
                <div className="card">
                    {/* Card Title */}
                    <div className="card-header" role="tab" id="headingFour">
                        <h5 className="h5-sm" onClick={() => handleToggle(4)}>
                            <a className={isActive.key == 4 ? "collapsed" : ""} data-toggle="collapse" href="#collapseFour" role="button" aria-expanded="false" aria-controls="collapseFour">
                                How can I update or cancel my personal information?
                            </a>
                        </h5>
                    </div>
                    {/* Card Content */}
                    <div className={isActive.key == 4 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingFour" data-parent="#accordion">
                        <div className="card-body">
                            <p>Aliqum  mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae
                                auctor eros congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien
                                etiam sapien sem sagittis congue tempor gravida donec enim ipsum porta justo integer at
                                odio velna congue integer vitae auctor eros dolor luctus odio placerat
                            </p>
                        </div>
                    </div>
                </div>	  {/* END ACCORDION CARD #4 */}
                {/* ACCORDION CARD #5 */}
                <div className="card">
                    {/* Card Title */}
                    <div className="card-header" role="tab" id="headingFive">
                        <h5 className="h5-sm" onClick={() => handleToggle(5)}>
                            <a className={isActive.key == 5 ? "collapsed" : ""} data-toggle="collapse" href="#collapseFive" role="button" aria-expanded="false" aria-controls="collapseFive">
                                I have technical problem, who do I email?
                            </a>
                        </h5>
                    </div>
                    {/* Card Content */}
                    <div className={isActive.key == 5 ? "collapse show" : "collapse"} role="tabpanel" aria-labelledby="headingFive" data-parent="#accordion">
                        <div className="card-body">
                            <p>Curabitur ac dapibus libero. Quisque eu tristique neque. Phasellus blandit tristique justo
                                ut aliquam. Aliquam vitae molestie nunc. Quisque sapien justo, aliquet non molestie sed purus,
                                venenatis nec. Aliquam eget lacinia elit. Vestibulum tincidunt tincidunt massa, et porttitor
                            </p>
                            <p>Nullam non scelerisque lectus. In at mauris vel nisl convallis porta at vitae dui. Nam lacus
                                ligula, vulputate molestie bibendum quis, aliquet elementum massa. Vestibulum ut sagittis odio
                            </p>
                        </div>
                    </div>
                </div>	  {/* END ACCORDION CARD #5 */}
            </div>
        </>
    )
}
