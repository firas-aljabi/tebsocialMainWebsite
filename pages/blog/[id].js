import Layout from "@/components/layout/Layout"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import data from "../../util/blog.json"

export default function BlogDetails() {
    let Router = useRouter()
    const [blogPost, setBlogPost] = useState(null)
    const { id } = Router.query
    useEffect(() => {
        setBlogPost(data.find((data) => data.id == id))
    }, [id])
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="navbar-light bg-light" noTra>
                {blogPost && (
                    <>
                        <section id="single-post" className="wide-80 single-post-section division">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1">
                                        <div className="single-post-title mb-35 text-center">
                                            <div className="post-title-meta">
                                                <span>Web Design, Development</span>
                                            </div>
                                            <h3 className="h3-md">{blogPost.title}</h3>
                                            <div className="single-post-data">
                                                <p className="post-meta">Posted by <a href="#">Jeremy Harville</a> on April 15, 2023 <a href="#">in Web Design</a></p>
                                            </div>
                                        </div>
                                        <div className="single-post-txt mb-40">
                                            <p>Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue tempor a gravida donec
                                                ipsum porta justo integer at odio velna. Maecenas gravida porttitor nunc, quis vehicula magna
                                                luctus tempor. Quisque vel laoreet turpis. An augue viverra a augue eget, dictum tempor
                                                diam. Sed pulvinar donec ociis et magnis sapien imperdiet dui varius viverra massa lorem.
                                            </p>
                                        </div>
                                        <div className="blog-post-img mb-40">
                                            <img className="img-fluid w-100" src={`/images/blog/${blogPost.img}`} alt="blog-post-image" />
                                        </div>
                                        <div className="single-post-txt">
                                            <p>Aliqum  mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae
                                                auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien etiam
                                                sapien sem sagittis congue tempor gravida donec enim ipsum porta justo integer at odio
                                                velna. Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque vel
                                                laoreet turpis. Urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar
                                                consectetur nibh, vel imperdiet dui varius viverra. Pellentesque ac massa lorem. Fusce
                                                eu <a href="#">cursus fusce non nulla</a> vitae massa
                                            </p>
                                            <p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae
                                                purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec diam.	Curabitur
                                                ac dapibus libero. Mauris donec ociis a neque. Phasellus blandit tristique justo ut aliquam.
                                                Aliquam vitae molestie nunc sapien justo, aliquet non molestie augue, venenatis nec purus.
                                                Aliquam eget lacinia elit. Augue tincidunt tincidunt massa, et porttitor justo blandit.
                                            </p>
                                            <h5 className="h5-sm">Vitae massa placerat vulputate</h5>
                                            <p>Nullam non scelerisque lectus. In at mauris vel nisl convallis porta at vitae dui. Nam lacus
                                                ligula, vulputate molestie bibendum quis, aliquet elementum massa. Vestibulum ut sagittis odio.
                                                Ac massa lorem. Fusce eu cursus est. Fusce non nulla vitae massa placerat vulputate vel a purus
                                                Aliqum  mullam blandit tempor sapien gravida donec
                                            </p>
                                            <div className="post-inner-img">
                                                <div className="row d-flex align-items-center">
                                                    <div className="col-md-6 text-center">
                                                        <img className="img-fluid" src="/images/image-16.png" alt="hero-image" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h4 className="h4-lg">With over four years of experience in web design and web development we
                                                            created over 20 unique templates
                                                        </h4>
                                                        <h5 className="h5-sm">Jonathan Barnes</h5>
                                                        <p>Graphic Designer, TebSocial</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="content-list mb-15">
                                                <li>Vitae auctor integer congue magna at pretium cubilia laoreet augue egestas luctus
                                                    donec diam. Curabitur ac dapibus libero. Quisque eu tristique neque ipsum porta
                                                    cubilia laoreet augue egestas
                                                </li>
                                                <li>Sagittis congue augue egestas volutpat egestas magna vitae auctor eros congue magna
                                                    nihil impedit ligula risus. Mauris donec ociis et magnis sapien an sapien congue
                                                    tempor gravida enim ipsum porta cubilia laoreet augue egestas luctus egestas volutpat
                                                    egestas magna suscipit egestas magna
                                                </li>
                                            </ul>
                                            <p>Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque vel laoreet
                                                turpis urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur nibh,
                                                vel imperdiet dui varius viverra. Sapien justo massa lorem. Fusce eu cursus non nulla vitae
                                                massa placerat purus. Sagittis congue augue egestas volutpat egestas magna suscipit egestas
                                                magna ipsum vitae purus <a href="#">efficitur ipsum primis</a> in cubilia laoreet augue egestas
                                                luctus donec libero neque
                                            </p>
                                            <h5 className="h5-sm">Egestas volutpat egestas</h5>
                                            <p>In at mauris vel nisl convallis porta at vitae dui. Nam lacus ligula, vulputate molestie
                                                bibendum quis, aliquet elementum massa. Vestibulum ut sagittis odio. Ac massa lorem. Fusce eu
                                                cursus est. Fusce non nulla vitae massa placerat vulputate vel a purus. Aliqum  mullam blandit
                                                tempor sapien gravida donec
                                            </p>
                                            <div className="post-inner-img">
                                                <div className="embed-responsive embed-responsive-16by9">
                                                    <iframe width={950} height={450} src="https://www.youtube.com/embed/7e90gBu4pas" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                                </div>
                                            </div>
                                            <h5 className="h5-sm">Semper lacus cursus porta, feugiat primis</h5>
                                            <p>Curabitur ac dapibus libero. Quisque eu tristique neque. Phasellus blandit tristique justo
                                                ut aliquam. Aliquam vitae molestie nunc. Quisque sapien justo, aliquet non molestie sed,
                                                venenatis nec purus. Aliquam eget lacinia tincidunt tincidunt massa, et porttitor justo.
                                                Quisque vel laoreet turpis. Urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar
                                                consectetur nibh, vel imperdiet dui varius viverra. Pellentesque ac massa lorem. Fusce eu
                                                cursus est. Fusce non nulla vitae massa placerat bulum tincidunt tincidunt massa, et porttitor justo
                                            </p>
                                            <p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae
                                                purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec diam.	Curabitur
                                                ac dapibus libero. Quisque eu tristique neque. Phasellus blandit tristique justo ut aliquam.
                                                Aliquam vitae <a href="#">molestie nunc sapien justo</a>, aliquet non molestie sed, venenatis nec purus.
                                                Aliquam eget lacinia elit. Vestibulum tincidunt tincidunt massa, et porttitor justo.
                                            </p>
                                            <h5 className="h5-sm">Cubilia laoreet augue egestas luctus</h5>
                                            <p>Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque vel laoreet
                                                turpis. Urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur
                                                nibh, vel imperdiet dui varius viverra. Pellentesque ac massa lorem. Fusce eu cursus est.
                                                Fusce non nulla vitae massa placerat vulputate vel a purus
                                            </p>
                                            <ul className="content-list mb-15">
                                                <li>Vitae auctor integer congue magna at pretium cubilia laoreet augue egestas luctus
                                                    donec diam. Curabitur ac dapibus libero. Quisque eu tristique neque ipsum porta
                                                    cubilia laoreet augue egestas
                                                </li>
                                                <li>Sagittis congue augue egestas volutpat egestas magna vitae auctor eros congue magna
                                                    nihil impedit ligula risus. Mauris donec ociis et magnis sapien an sapien congue
                                                    tempor gravida enim ipsum porta cubilia laoreet augue egestas luctus egestas volutpat
                                                    egestas magna suscipit egestas magna
                                                </li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore. incididunt ut labore et dolore. Neque turpis vitae eros praesent varius. Egestas
                                                pellentesque urna blandit, sed ac leo ut mi, nam wisi, <a href="#">laborum donec erat diam ociis</a> ultrice
                                                ligula magna suscipit lectus gestas  egestas magna ipsum vitae purus ipsum
                                            </p>
                                            <div className="post-share-links">
                                                <div className="post-tags-list">
                                                    <span><a href="#">Web Design</a></span>
                                                    <span><a href="#">Development</a></span>
                                                    <span><a href="#">Bootstrap</a></span>
                                                </div>
                                                <div className="post-share-list">
                                                    <ul className="share-social-icons clearfix">
                                                        <li><a href="#" className="share-ico ico-like"><i className="far fa-thumbs-up" /> Like</a></li>
                                                        <li><a href="#" className="share-ico ico-facebook"><i className="fab fa-facebook-f" /> Share</a></li>
                                                        <li><a href="#" className="share-ico ico-twitter"><i className="fab fa-twitter" /> Tweet</a></li>
                                                        <li><a href="#" className="share-ico ico-google-plus"><i className="fab fa-pinterest-p" /> Pin It</a></li>
                                                        <li><a href="#" className="share-ico ico-google-plus"><i className="fab fa-google-plus-g" /> Share</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="author-senoff">
                                            <img src="/images/review-author-4.jpg" alt="author-avatar" />
                                            <div className="author-senoff-txt">
                                                <h5 className="h5-sm">Published by Jeremy Harville</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incidide ut
                                                    labore dolore. incididunt ut labore et dolore. Neque turpis vitae eros praesent
                                                    varius. Egestas a congue augue egestas volutpat egestas magna suscipit egestas magna
                                                    ipsum vitae urna blandit vitae massa placerat vulputate et magnis sapien
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1">
                                        <div className="related-post-title">
                                            <h5 className="h5-md mb-40">Related Posts:</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="row primary-theme">
                                    <div className="col-md-6 col-lg-4">
                                        <div className="blog-post">
                                            <div className="blog-post-img">
                                                <div className="post-category"><p>News</p></div>
                                                <img className="img-fluid" src="/images/blog/post-1-img.jpg" alt="blog-post-image" />
                                                <div className="blog-post-avatar">
                                                    <img src="/images/post-author-1.jpg" alt="author-avatar" />
                                                </div>
                                            </div>
                                            <div className="blog-post-txt">
                                                <p className="post-meta">Posted by <span>J.Delaney</span> on April 12, 2023</p>
                                                <a href="/single-post">Egestas volute nemo ipsam and turpis quaerat sodales a sapien
                                                    landit tempor vitae sapien a donec ipsum
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <div className="blog-post">
                                            <div className="blog-post-img">
                                                <div className="post-category"><p>Features</p></div>
                                                <img className="img-fluid" src="/images/blog/post-2-img.jpg" alt="blog-post-image" />
                                                <div className="blog-post-avatar">
                                                    <img src="/images/post-author-2.jpg" alt="author-avatar" />
                                                </div>
                                            </div>
                                            <div className="blog-post-txt">
                                                <p className="post-meta">Posted by <span>E.Martinez</span> on April 06, 2023</p>
                                                <a href="/single-post">Aliqum mullam a blandit tempor undo sapien gravida donec ipsum,
                                                    and porta magna. Velna auctor eros congue justo vitae at impedit tempor congu
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <div className="blog-post">
                                            <div className="blog-post-img">
                                                <div className="post-category"><p>News</p></div>
                                                <img className="img-fluid" src="/images/blog/post-3-img.jpg" alt="blog-post-image" />
                                                <div className="blog-post-avatar">
                                                    <img src="/images/post-author-3.jpg" alt="author-avatar" />
                                                </div>
                                            </div>
                                            <div className="blog-post-txt">
                                                <p className="post-meta">Posted by <span>Marisol19</span> on April 02, 2023</p>
                                                <a href="/single-post">Aliquam a augue suscipit, luctus neque purus an ipsum neque and
                                                    dolor primis libero a egestas tempus posuere
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1">
                                        <div className="single-post-comments">
                                            <h5 className="h5-md">4 Comments</h5>
                                            <div className="media mt-50">
                                                <img className="mr-3" src="/images/post-author-1.jpg" alt="comment-avatar" />
                                                <div className="media-body">
                                                    <div className="comment-meta">
                                                        <h5 className="h5-xs mt-0">Jeffrey</h5>
                                                        <span className="comment-date">April 20, 2023 at 7:14 PM - </span>
                                                        <span className="btn-reply"><a href="#leave-comment" className="internal-link"><i className="fas fa-reply" /> Reply</a></span>
                                                    </div>
                                                    <p>Etiam sapien sem magna at vitae pulvinar congue augue egestas pretium neque id viverra
                                                        suscipit egestas magna porta ratione, mollis risus lectus porta rutrum arcu aenean
                                                        primis in augue luctus neque purus ipsum neque dolor primis suscipit in magna dignissim,
                                                        porttitor hendrerit diam. Nunc gravida ultrices felis
                                                    </p>
                                                    <hr />
                                                    <div className="media mt-3">
                                                        <a href="#" className="pr-3">
                                                            <img src="/images/post-author-2.jpg" alt="comment-avatar" />
                                                        </a>
                                                        <div className="media-body">
                                                            <div className="comment-meta">
                                                                <h5 className="h5-xs mt-0">Jeremy</h5>
                                                                <span className="comment-date">April 20, 2023 at 11:35 PM - </span>
                                                                <span className="btn-reply"><a href="#leave-comment" className="internal-link"><i className="fas fa-reply" /> Reply</a></span>
                                                            </div>
                                                            <p>Etiam sapien sem magna at vitae pulvinar congue augue egestas pretium neque id
                                                                viverra suscipit porta ratione, mollis risus lectus porta aliquet lorem purus,
                                                                quis mollis nisi laoreet vitae
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="media mt-40">
                                                <img className="mr-3" src="/images/post-author-3.jpg" alt="comment-avatar" />
                                                <div className="media-body">
                                                    <div className="comment-meta">
                                                        <h5 className="h5-xs mt-0">Samantha</h5>
                                                        <span className="comment-date">April 29, 2018 at 5:41 PM - </span>
                                                        <span className="btn-reply"><a href="#leave-comment" className="internal-link"><i className="fas fa-reply" /> Reply</a></span>
                                                    </div>
                                                    <p>Porta ratione, mollis risus lectus porta rutrum arcu aenean primis in augue luctus
                                                        neque purus ipsum neque dolor primis libero tempus, tempor posuere ligula varius
                                                        impedit enim tempor vitae pulvinar congue augue egestas. Praesent aliquet lorem purus,
                                                        quis mollis nisi laoreet vitae. Mauris nec consequat tortor. Duis fermentum a massa
                                                        in convallis. Quisque eu ultrices enim, et interdum augue
                                                    </p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="media mt-40">
                                                <img className="mr-3" src="/images/post-author-4.jpg" alt="comment-avatar" />
                                                <div className="media-body">
                                                    <div className="comment-meta">
                                                        <h5 className="h5-xs mt-0">Robert Peterson</h5>
                                                        <span className="comment-date">June 11, 2018 at 11:19 AM - </span>
                                                        <span className="btn-reply"><a href="#leave-comment" className="internal-link"><i className="fas fa-reply" /> Reply</a></span>
                                                    </div>
                                                    <p>Etiam sapien sem magna at vitae pulvinar congue augue egestas pretium neque id viverra
                                                        suscipit egestas magna porta ratione, mollis risus lectus porta rutrum arcu aenean
                                                        primis in augue auctor integer congue
                                                    </p>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                        <div id="leave-comment">
                                            <h5 className="h5-md">Leave a Comment</h5>
                                            <p className="grey-color">Your email address will not be published. Required fields are marked *</p>
                                            <form name="commentform" className="comment-form row mt-40">
                                                <div id="post-message" className="col-md-12">
                                                    <p>Add Comment *</p>
                                                    <textarea className="form-control comment" name="message" rows={6} placeholder="Enter your comment here ..." />
                                                </div>
                                                <div id="post-name" className="col-md-12">
                                                    <p>Name*</p>
                                                    <input type="text" name="name" className="form-control name" placeholder="Your Name" />
                                                </div>
                                                <div id="post-email" className="col-md-12">
                                                    <p>Email*</p>
                                                    <input type="text" name="email" className="form-control email" placeholder="Email Address" />
                                                </div>
                                                <div className="col-md-12 comment-form-btn mt-20 text-right">
                                                    <button type="submit" className="btn btn-primary-color black-hover submit">Post Comment</button>
                                                </div>
                                                <div className="col-md-12 comment-form-msg">
                                                    <div className="sending-msg"><span className="loading" /></div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="cta-2" className="blue-textured wide-100 cta-section division">
                            <div className="container white-color">
                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1">
                                        <div className="cta-txt text-center">
                                            <h3 className="h3-xs">Create better experiences with TebSocial</h3>
                                            <p className="p-md">Feugiat eros, ac tincidunt ligula massa in faucibus orci luctus et ultrices
                                                posuere cubilia curae integer congue leo metus, eu mollis lorem primis in orci integer
                                                metus mollis faucibus
                                            </p>
                                            <div className="btns-group">
                                                <a href="#" className="btn btn-primary-color tra-hover mr-15">Request Free Trial</a>
                                                <a href="#" className="btn btn-tra-white black-hover">Buy For Only $14.99</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )}
            </Layout>
        </>
    )
}