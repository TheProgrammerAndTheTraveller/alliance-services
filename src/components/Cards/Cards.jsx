import './Cards.scss';
import { Col, Row, Card, CardBody, CardImg, CardText, CardTitle, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Link from "next/link";


function Cards({ cards }) {
    return (
        <Container>
            <Row className="gy-4">
                {cards.map((card, idx) => (
                    <Col lg={3} md={6} xs={12} key={idx}> {/* Перенес key сюда */}
                        <Card className='services-card'>
                            <CardImg variant="top" src={card.src} />
                            <CardBody className="text-center">
                                <CardTitle>{card.title}</CardTitle>
                                <CardText>{card.description}</CardText>
                                <Link href={card.path} passHref>
                                <Button variant='theme-pink' className='rounded-pill'>
                                    Связаться
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
