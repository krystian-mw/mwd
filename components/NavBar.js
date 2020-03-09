import Link from '../mwd/Link'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand>MWD</Navbar.Brand>
            <Navbar.Collapse>                
                <Link href="/">Home</Link>
                <Link href="/contact">Contact</Link>
            </Navbar.Collapse>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </Navbar>
    )
}