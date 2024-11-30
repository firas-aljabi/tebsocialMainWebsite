import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "TebSocial - Software & Startup Premium Landing Page Template Blog"}
                </title>
            </Head>
        </>
    )
}

export default PageHead