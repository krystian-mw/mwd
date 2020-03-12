import Head from 'next/head'
import Body from '../layouts/default'
import { Col, Row } from 'react-bootstrap'

const Home = () => {
    return (
        <>
            <Head>
                <title>MWD - Home</title>
                <meta name="description" content="My new fantastic webpage which is still under construction. Check it out soon!" />
            </Head>
            <Body>
                <Row className="no-gutters">
                    <Col>
                        <img src="/cover.jpg" alt="front cover page" width="100%" />
                    </Col>
                </Row>
            </Body>
        </>
    )
}

export default Home