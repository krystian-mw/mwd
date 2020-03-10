import Head from 'next/head'
import Link from 'next/link'

import {
    Container,
    Row,
    Col,
    Nav,
    Navbar
} from 'react-bootstrap'

const bootstrapCDN = `https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css`

const NavBar = () => (
    <Col>
        <Navbar collapseOnSelect expand="md" style={{ width: '100%' }} bg="dark" variant="dark">
            <Navbar.Brand href="/">Krystian Mikolajczyk - Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                    <Link href="/projects"><a className="nav-link">Projects</a></Link>
                    <Link href="/contact"><a className="nav-link">Contact</a></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Col>
)

export default ({ children }) => (
    <>
        <Head>
            <link rel="stylesheet" href={bootstrapCDN} />
        </Head>
        <Container>
            <Row>
                <NavBar />
            </Row>
            <Row>
                {children}
            </Row>
        </Container>
    </>
)