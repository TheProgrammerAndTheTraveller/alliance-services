import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";


const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5">
            <Container fluid>
                <Row>

                    <Col md="4" className="offset-md-2">
                        <h4 className="fw-bold">StreamNet</h4>
                        <p>Надежная связь для вашего бизнеса</p>
                    </Col>


                    <Col md="2" className="offset-md-1 ps-xl-0 pe-1">
                        <h5 className="fw-bold">Быстрые ссылки</h5>
                        <ul className="list-unstyled">
                            <li><Link href="/vols">Монтаж СКС и ВОЛС</Link></li>
                            <li><Link href="/wifi">Монтаж беспроводных сетей</Link></li>
                            <li><Link href="/vss">Установка видеонаблюдения</Link></li>
                            <li><Link href="/business">Бизнес решения для организаций</Link></li>
                            <li><Link href="/about">О нас</Link></li>
                            <li><Link href="/contact">Связаться</Link></li>
                        </ul>
                    </Col>
                    <Col>
                        <h5 className="fw-bold">Наши соц. сети</h5>
                        <ul className="list-unstyled footer-contacts">
                            <li>
                                {/* style={{ color: 'white', textDecoration: 'none' }} */}
                                <a href="https://telegram.org/support" target="_blank" rel="noopener noreferrer" >
                                    <i className="bi bi-telegram fs-2"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/alliance.kz/" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-instagram fs-2 offset-md-5"></i>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+7 701 726 9303">
                                    <i className="bi bi-telephone fs-2 offset-md-9"></i>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer >
    );
};

export default Footer;
