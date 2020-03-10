import Head from 'next/head'

import Body from '../layouts/default'

const Home = () => {
    return (
        <>
            <Head>
                <title>MWD - Home</title>
                <meta name="description" content="My new fantastic webpage which is still under construction. Check it out soon!" />
            </Head>
            <Body>
                <h1>MWD</h1>
            </Body>
        </>
    )
}

export default Home