import BlogPost from "@/components/blog/BlogPost"
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function BlogListing() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} headerCls="navbar-dark">
                <section id="blogs-page" className="page-hero-section division">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-lg-8 offset-md-1 offset-lg-2">
                                <div className="hero-txt text-center white-color">
                                    <h3 className="h3-xl">Our Blogs &amp; Latest News</h3>
                                    <p className="p-hero">Semper lacus cursus porta, feugiat primis ultrice ligula and auctor rhoncus purus ipsum primis in vitae cursus</p>
                                </div>
                            </div>
                        </div>
                        <div id="breadcrumb">
                            <div className="row">
                                <div className="col">
                                    <div className="breadcrumb-nav">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <Link href="/demo-1">Home</Link>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">
                                                    Blog
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div>
                    <div id="blog-page" className="wide-100 blog-page-section division">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="posts-holder primary-theme">
                                        <BlogPost showItem={6} style={1} showPagination />
                                    </div>
                                </div>
                                <aside id="sidebar" className="col-md-4">
                                    <div className="pl-60">
                                        <div id="search-field" className="sidebar-div mb-50">
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="search-field" />
                                                <div className="input-group-append">
                                                    <button className="btn" type="button">
                                                        <i className="fa fa-search" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="text-widget" className="sidebar-div b-bottom pb-50 mb-50">
                                            <h5 className="h5-sm">About TebSocial</h5>
                                            <p>Mauris id class aptent taciti nostra, eget gravida donec enim ipsum a porta justo integer at velna auctor vitae magna, vitae suscipit mauris purus in magna</p>
                                            <a href="#" className="btn btn-sm btn-tra-grey primary-color-hover mt-15">
                                                Get Started
                                            </a>
                                        </div>
                                        <div id="blog-cat" className="sidebar-div b-bottom pb-50 mb-50">
                                            <h5 className="h5-sm">Categories</h5>
                                            <ul className="blog-category-list clearfix">
                                                <li>
                                                    <a href="#">Entertainment</a> <span>(5)</span>
                                                </li>
                                                <li>
                                                    <a href="#">Digital Art</a> <span>(13)</span>
                                                </li>
                                                <li>
                                                    <a href="#">Graphic Design</a> <span>(6)</span>
                                                </li>
                                                <li>
                                                    <a href="#">Simple Portfolio</a> <span>(8)</span>
                                                </li>
                                                <li>
                                                    <a href="#">Mobile Apps</a> <span>(12)</span>
                                                </li>
                                                <li>
                                                    <a href="#">Web</a> <span>(12)</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div id="popular-posts" className="sidebar-div b-bottom pb-50 mb-50">
                                            <h5 className="h5-sm">Popular Posts</h5>
                                            <ul className="popular-posts">
                                                <li className="clearfix d-flex align-items-center">
                                                    <img className="img-fluid" src="/images/blog/popular-post-1.jpg" alt="blog-post-preview" />
                                                    <div className="post-summary">
                                                        <a href="/single-post">Etiam sapien accumsan molestie ante empor ...</a>
                                                        <p>43 Comments</p>
                                                    </div>
                                                </li>
                                                <li className="clearfix d-flex align-items-center">
                                                    <img className="img-fluid" src="/images/blog/popular-post-2.jpg" alt="blog-post-preview" />
                                                    <div className="post-summary">
                                                        <a href="/single-post">Blandit tempor sapien ipsum, porta justo ...</a>
                                                        <p>38 Comments</p>
                                                    </div>
                                                </li>
                                                <li className="clearfix d-flex align-items-center">
                                                    <img className="img-fluid" src="/images/blog/popular-post-3.jpg" alt="blog-post-preview" />
                                                    <div className="post-summary">
                                                        <a href="/single-post">Cursus risus laoreet turpis auctor varius ...</a>
                                                        <p>29 Comments</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div id="popular-tags" className="sidebar-div b-bottom pb-50 mb-50">
                                            <h5 className="h5-sm">Tags Cloud</h5>
                                            <span className="badge">
                                                <a href="#">Business</a>
                                            </span>
                                            <span className="badge">
                                                <a href="#">Web Design</a>
                                            </span>
                                            <span className="badge">
                                                <a href="#">Network</a>
                                            </span>
                                            <span className="badge">
                                                <a href="#">Development</a>
                                            </span>
                                            <span className="badge">
                                                <a href="#">Gallery</a>
                                            </span>
                                            <span className="badge">
                                                <a href="#">Graphics</a>
                                            </span>
                                            <span className="badge">
                                                <a href="#">Typography</a>
                                            </span>
                                            <span className="badge">
                                                <a href="#">Journal</a>
                                            </span>
                                            <span className="badge">
                                                <a href="#">Photoshop</a>
                                            </span>
                                        </div>
                                        <div id="image-widget" className="sidebar-div">
                                            <h5 className="h5-sm">Image Widget</h5>
                                            <a href="#" title="nextapp_link" target="_blank">
                                                <img className="img-fluid" src="/images/blog/image-widget.jpg" alt="image-widget" />
                                            </a>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                    <section id="newsletter-1" className="bg-image wide-80 newsletter-section division">
                        <div className="container white-color">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 section-title">
                                    <h3 className="h3-lg">Stay Updated With Our News</h3>
                                    <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue porta feugiat</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-10 col-lg-8 offset-md-1 offset-lg-2">
                                    <div className="newsletter-txt text-center">
                                        <form className="newsletter-form">
                                            <div className="input-group">
                                                <input type="email" className="form-control" placeholder="Your email address" required id="s-email" />
                                                <span className="input-group-btn">
                                                    <button type="submit" className="btn btn-primary-color tra-hover">
                                                        Sign Up
                                                    </button>
                                                </span>
                                            </div>
                                            <label htmlFor="s-email" className="form-notification" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
}
