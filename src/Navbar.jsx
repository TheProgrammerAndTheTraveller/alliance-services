import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#Home">StreamNet</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#Vols">Монтаж СКС и ВОЛС</Nav.Link>
                        <Nav.Link href="#Wifi">Монтаж беспроводных сетей</Nav.Link>
                        <Nav.Link href="#VSS">Установка видеонаблюдения</Nav.Link>
                        <Nav.Link href="#Business">Бизнес решения для организаций</Nav.Link>
                        <Nav.Link href="#Business">О нас</Nav.Link>
                    </Nav>
                    <Button style={{ backgroundColor: '#800080', borderColor: '#800080' }}>
                        Submit
                    </Button>
                </Container>
            </Navbar>
        </>
    );
}
export default ColorSchemesExample;