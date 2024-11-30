import Link from "next/link"
export default function Blog1() {
    return (
        <>
            <section id="blog-1" className="wide-60 blog-section division">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            <h3 className="h3-md steelblue-color">Our Stories &amp; Latest News</h3>
                            <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
                                libero at tempus, blandit posuere ligula varius congue cursus porta feugiat
                            </p>
                        </div>
                    </div>
                    <div className="row primary-theme">
                        <div className="col-md-6 col-lg-4">
                            <div className="blog-post wow fadeInUp" data-wow-delay="0.1s">
                                <div className="blog-post-img">
                                    <div className="post-category"><p>News</p></div>
                                    <img className="img-fluid" src="/images/blog/post-1-img.jpg" alt="blog-post-image" />
                                    <div className="blog-post-avatar">
                                        <img src="/images/post-author-1.jpg" alt="author-avatar" />
                                    </div>
                                </div>
                                <div className="blog-post-txt">
                                    <p className="post-meta">Posted by <span>J.Delaney</span> on April 12, 2023</p>
                                    <Link href="/single-post">Egestas volute nemo ipsam and turpis quaerat sodales a sapien landit tempor
                                        vitae sapien a donec ipsum
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="blog-post wow fadeInUp" data-wow-delay="0.3s">
                                <div className="blog-post-img">
                                    <div className="post-category"><p>Features</p></div>
                                    <img className="img-fluid" src="/images/blog/post-2-img.jpg" alt="blog-post-image" />
                                    <div className="blog-post-avatar">
                                        <img src="/images/post-author-2.jpg" alt="author-avatar" />
                                    </div>
                                </div>
                                <div className="blog-post-txt">
                                    <p className="post-meta">Posted by <span>E.Martinez</span> on April 06, 2023</p>
                                    <Link href="/single-post">Aliqum mullam a blandit tempor undo sapien gravida donec ipsum, and porta magna.
                                        Velna auctor eros congue justo vitae at impedit tempor congu
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="blog-post wow fadeInUp" data-wow-delay="0.8s">
                                <div className="blog-post-img">
                                    <div className="post-category"><p>News</p></div>
                                    <img className="img-fluid" src="/images/blog/post-3-img.jpg" alt="blog-post-image" />
                                    <div className="blog-post-avatar">
                                        <img src="/images/post-author-3.jpg" alt="author-avatar" />
                                    </div>
                                </div>
                                <div className="blog-post-txt">
                                    <p className="post-meta">Posted by <span>Marisol19</span> on April 02, 2023</p>
                                    <Link href="/single-post">Aliquam a augue suscipit, luctus neque purus an ipsum neque and dolor primis libero
                                        a egestas tempus posuere
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
