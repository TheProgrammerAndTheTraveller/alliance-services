"use client";
import { Card, Container, Row, Col, CardBody } from "react-bootstrap";

const ContactCard = () => {
    return (
        <Card className="p-4 shadow-sm rounded-3 border-1" style={{ backgroundColor: "#f9f9fb" }}>
            <CardBody>
                <h4 className="fw-bold mb-3">Контакты</h4>

               

            
               
                {/* US Number */}
                <div className="mb-3">
                    <i className="bi bi-telephone-inbound-fill text-primary me-2"></i>
                    <strong>Номер телефона</strong>
                    <p className="mb-0">
                        <a href="tel:+7 701 726 9303" className="text-decoration-none text-dark">+7 701 726 9303</a>
                        </p>
                        <p className="mb-0">
                        <a href="tel:+7 700 777 0689" className="text-decoration-none text-dark">+7 700 777 0689</a>
                    </p>
                </div>

                {/* Email */}
                <div className="mb-3">
                    <i className="bi bi-envelope-fill text-primary me-2"></i>
                    <strong>Email</strong>
                    <p className="mb-0">
                        <a href="mailto:info@streamnet.kz" className="text-decoration-none text-primary">info@streamnet.kz</a>
                    </p>
                </div>

                {/* Address */}
                <div className="mb-3">
                    <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                    <strong>Адрес</strong>
                    <p className="mb-0">Республика Казахстан, город Алматы</p>
                    <p className="mb-0">Микрорайон Калкаман 2</p>
                    <p className="mb-0">улица Мусабаева 9/1</p>
                    
                </div>

                {/* Social Links */}
                <div className="d-flex">
                    <a href="https://www.instagram.com/alliance.kz/" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-instagram fs-2 "></i>
                    </a>
                    <a href="https://telegram.org/support" target="_blank" rel="noopener noreferrer" >
                        <i className="bi bi-telegram fs-2 offset-md-2"></i>
                    </a>
                    <a href="tel:+77001234567">
                        <i className="bi bi-telephone fs-2 offset-md-4"></i>
                    </a>
                </div>
            </CardBody>
        </Card>
    );
};

export default ContactCard;
