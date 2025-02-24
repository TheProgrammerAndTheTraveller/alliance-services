import './Cards.scss';
import { Col, Row, Card, CardBody, CardImg, CardText, CardTitle, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Link from "next/link";
import Image from 'next/image';

function Cards({ cards }) {
    return (
        <Container>
            <Row className="gy-4">
                {cards.map((card, idx) => (
                    <Col lg={3} md={6} xs={12} key={idx}> {/* Перенес key сюда */}
                        <Card className='services-card'>
                            <CardImg as={Image} variant="top" src={card.src} height={383} width={399} />
                            <CardBody className="text-center">
                                <CardTitle>{card.title}</CardTitle>
                                <CardText>{card.description}</CardText>
                                <Link href={card.path} passHref>
                                <Button variant='theme-pink' className='rounded-pill'>
                                    Подробнее
                                </Button>
                                </Link>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Cards;
