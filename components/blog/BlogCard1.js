import Link from "next/link"

export default function BlogCard1({ item }) {
    return (
        <>
            <div className="blog-post">
                <div className="blog-post-img">
                    <div className="post-category"><p>News</p></div>
                    <img className="img-fluid" src={`/images/blog/${item.img}`} alt="blog-post-image" />
                    <div className="blog-post-avatar">
                        <img src="/images/post-author-1.jpg" alt="author-avatar" />
                    </div>
                </div>
                <div className="blog-post-txt">
                    <p className="post-meta">Posted by <span>J.Delaney</span> on April 12, 2023</p>
                    <Link href={`/blog/${item.id}`}>{item.title}
                    </Link>
                    <p>Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae
                        auctor congue eros magna nihil impedit tempor. Semper lacus cursus porta, feugiat primis
                    </p>
                </div>
            </div>
        </>
    )
}
