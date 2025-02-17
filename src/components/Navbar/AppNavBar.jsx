import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { Nav, NavbarBrand, NavbarCollapse, NavLink, NavbarToggle, Row, Col } from 'react-bootstrap';
// import NavbarToggle from 'react-bootstrap';

function AppNavBar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" expand="lg" sticky="top">
                <Container>
                    <NavbarBrand as={Link} href="/">StreamNet</NavbarBrand>

                    <div className="d-flex ms-auto align-items-center">
                        <NavbarToggle aria-controls="basic-navbar-nav" className="me-3" />
                    </div>

                    <NavbarCollapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink as={Link} href="/vols">Монтаж СКС и ВОЛС</NavLink>
                            <NavLink as={Link} href="/wifi">Монтаж беспроводных сетей</NavLink>
                            <NavLink as={Link} href="/vss">Установка видеонаблюдения</NavLink>
                            <NavLink as={Link} href="/business">Бизнес решения для организаций</NavLink>
                            <NavLink as={Link} href="/about">О нас</NavLink>
                        </Nav>
                        <Button as={Link} href="/contact" variant="theme-pink" className="rounded-pill ms-xl-2 mt-xl-0 mt-1">
                            Связаться
                        </Button>
                    </NavbarCollapse>

                </Container>
            </Navbar>
        </>
    );
}
export default AppNavBar;