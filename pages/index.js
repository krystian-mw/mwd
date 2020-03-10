import Head from 'next/head'
import Body from '../layouts/bootstrap'
import { Col } from 'react-bootstrap'

const Home = () => {
    return (
        <>
            <Head>
                <title>MWD - Home</title>
                <meta name="description" content="My new fantastic webpage which is still under construction. Check it out soon!" />
            </Head>
            <Body>
                <Col sm="12">
                    <img src="/cover.jpg" alt="front cover page" width="100%" />
                </Col>
            </Body>
        </>
    )
}

export default Home