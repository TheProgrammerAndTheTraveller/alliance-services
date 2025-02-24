import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { Nav, NavbarBrand, NavbarCollapse, NavLink, NavbarToggle, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap';
import "./styles.scss";


function AppNavBar() {

    return (
        <>
            <Navbar collapseOnSelect bg="dark" data-bs-theme="dark" expand="lg" sticky="top">
                <Container>
                    <NavbarBrand as={Link} href="/">StreamNet</NavbarBrand>

                    <div className="d-flex ms-auto align-items-center">
                        <NavbarToggle aria-controls="basic-navbar-nav" className="me-3" />
                    </div>

                    <NavbarCollapse id="basic-navbar-nav">
                        <Nav className="mx-md-auto ms-xl-auto me-xl-0">
                            <NavLink as={Link} href="/vols">Монтаж СКС и ВОЛС</NavLink>
                            <NavLink as={Link} href="/wifi">Монтаж беспроводных сетей</NavLink>
                            <NavLink as={Link} href="/vss">Установка видеонаблюдения</NavLink>
                            <NavLink as={Link} href="/business">Бизнес решения для организаций</NavLink>
                            <NavLink as={Link} href="/about">О нас</NavLink>
                        </Nav>
                        <Button as={Link} href="/contact" variant="theme-pink" className="rounded-pill ms-xl-2 mt-xl-0 mt-1">
                            Связаться
                        </Button>
                        <div className="d-flex align-items-center">
                            <div className="vr bg-light ms-2 me-1 d-none d-md-block"></div>
                            <Dropdown id="basic-nav-dropdown m-1">
                                <DropdownToggle variant='link' className='text-muted p-0'><i className="bi bi-telephone"></i></DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href='tel:+77017269303'>+7 701 726 9303</DropdownItem>
                                    <DropdownItem href='tel:+77007770689'>+7 700 777 0689</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Link style={{ fontSize: '1.5rem' }} className='m-2 text-muted' href="mailto:info@streamnet.kz"><i className='bi bi-envelope-fill'></i></Link>
                            <div className="vr bg-light mx-1 d-none d-md-block"></div>
                        </div>
                    </NavbarCollapse>

                </Container>
            </Navbar >
        </>
    );
}
export default AppNavBar;
