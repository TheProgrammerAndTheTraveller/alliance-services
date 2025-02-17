import { Container, Row, Col, Image } from "react-bootstrap";
import { Poppins } from 'next/font/google';

import ContactCard from "../../components/ContentCard/ContentCard";
import ContactForm from "../../components/ContactForm/contact-form";

const poppins = Poppins({
    subsets: ['latin', 'latin-ext'],
    weight: ['400', '700'],
    style: 'normal',
});


function ContactPage() {

    return (
        <>
            <Container fluid>
                <Row className="vols-hero justify-content-start align-items-center">
                    <Col xl="7" className="text-white text-center vols-hero__text-container">
                        <h1 className={poppins.className + " vols-hero__title"}>
                            Свяжитесь с нами
                        </h1>
                        <p className={poppins.className + " vols-hero__subtitle"}>
                            Оставьте заявку, и мы поможем вам с решением
                        </p>
                    </Col>
                    <Col md className="vols-hero__image p-0 d-none d-xl-block">
                        <Image
                            src="/images/c6724bf63d384114c5fe37d7533ff376.png"
                            alt="Свяжитесь с нами"
                        />
                    </Col>
                </Row>
            </Container>

            <Container fluid className="text-dark py-5">
                <Row>
                    <Col md="4" className="offset-md-2">
                        <ContactForm />
                    </Col>
                    <Col className="ps-0 pe-2 offset-md-1">
                        <ContactCard />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ContactPage;
