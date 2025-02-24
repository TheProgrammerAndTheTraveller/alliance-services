import { Container, Row, Col, Button } from "react-bootstrap";
import { Poppins } from 'next/font/google';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Image from 'next/image'
import cardImage from "../../../public/images/7c7537c1-2367-4f90-bfb1-a6d10155ebfd.png"
import Link from 'next/link';

const poppins = Poppins({
    subsets: ['latin', 'latin-ext'],
    weight: ['400', '700'],
    style: 'normal',
});
function About() {
    return (
        <>
            <Container fluid>
                <Row className="vols-hero justify-content-start align-items-center">

                    {/* Градиентная часть с текстом */}
                    <Col xl="7" className="text-white text-center vols-hero__text-container">
                        <h1 className={poppins.className + " vols-hero__title"}>
                            StreamNet - гарантия качества
                        </h1>
                        <p className={poppins.className + " vols-hero__subtitle"}>
                            Давайте знакомиться
                        </p>
                    </Col>

                    {/* Картинка */}
                    <Col md className="vols-hero__image p-0 d-none d-xl-block">
                        <Image
                            src={cardImage}
                            alt="Бизнес решения"
                        />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="text-dark py-5">
                <Row>
                    {/* Текстовый блок */}
                    <Col md="4" className="offset-md-2">
                        <h2 className="fw-bold mb-3">Наша цель</h2>
                        <p>
                            Мы — компания с многолетним опытом работы в сфере IT-услуг, которая знает,
                            как делать ваши сети быстрыми, надежными и безопасными. Мы не боимся сложных задач и уверены,
                            что каждый бизнес заслуживает идеальную инфраструктуру. Наши специалисты прокладывают кабели,
                            настраивают сети и устанавливают системы видеонаблюдения так, как будто это — наш второй дом.
                        </p>

                        <h4 className="fw-bold mt-4">Наши услуги:</h4>
                        <ul className="mb-4">
                            <li>Проектирование системы видеонаблюдения</li>
                            <li>Установку и настройку камер</li>
                            <li>Интеграцию с системами безопасности</li>
                            <li>Обслуживание и поддержку</li>
                        </ul>

                        <h4 className="fw-bold mt-4">Наши ценности:</h4>
                        <ul className="mb-4">
                            <li>Качество и надежность</li>
                            <li>Индивидуальный подход к каждому клиенту</li>
                            <li>Современные технологии и инновационные решения</li>
                            <li>Ответственность и прозрачность</li>
                        </ul>

                        <p>
                            Благодаря профессиональному подходу и использованию качественных материалов, мы создаем надежные сети, соответствующие современным стандартам.
                        </p>
                        <p className="fw-bold text-primary">
                            Свяжитесь с нами, чтобы получить консультацию и расчет стоимости!
                        </p>
                        <Button as={Link} href="/contact" variant="theme-pink" className="rounded-pill">
                            Заказать услугу
                        </Button>
                    </Col>

                    {/* Блок с изображением */}                    
                    <Col className="ps-xl-0 pe-xl-2 offset-xl-1 py-xl-0 p-3">
                        <Image
                            src={cardImage}
                            alt="Монтаж СКС и ВОЛС"
                            fluid={false} // Здесь мы не растягиваем изображение
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderBottomLeftRadius: '70px', // Скругление только левого нижнего угла
                            }}
                        />
                    </Col>

                </Row>
            </Container>
        </>
    );
}
export default About;