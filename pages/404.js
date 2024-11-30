import Layout from "@/components/layout/Layout"

export default function Custom404() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={5} headerCls="navbar-dark">
                <section id="page-404" className="bg-darkblue hero-section division">
                    <div className="container white-color">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <div className="404-txt text-center">
                                    <div className="error-404-img">
                                        <img className="img-fluid" src="/images/error-404.png" alt="error-404-img" />
                                    </div>
                                    <h2>Page Not Found</h2>
                                    <h5 className="h5-md">The page you are looking for might have been moved , renamed or might never existed </h5>
                                    <a href="/demo-1" className="btn btn-tra-white primary-color-hover">Back To Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}