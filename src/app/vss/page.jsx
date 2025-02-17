import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Poppins } from 'next/font/google';
import Link from 'next/link';


const poppins = Poppins({
    subsets: ['latin', 'latin-ext'],
    weight: ['400', '700'],
    style: 'normal',
});

function VSSPage() {
    return (
        <>
            <Container fluid>
                <Row className="vols-hero justify-content-start align-items-center">

                    {/* Градиентная часть с текстом */}
                    <Col xl="7" className="text-white text-center vols-hero__text-container">
                        <h1 className={poppins.className + " vols-hero__title"}>
                            Установка видеонаблюдения
                        </h1>
                        <p className={poppins.className + " vols-hero__subtitle"}>
                            Четкое изображение, полный контроль, спокойствие
                        </p>
                    </Col>

                    {/* Картинка */}
                    <Col md className="vols-hero__image p-0 d-none d-xl-block">
                        <Image
                            src="/images/vss1.png"
                            alt="Установка видеонаблюдения"
                        />
                    </Col>
                </Row>
            </Container>

            {/* Ваш существующий код */}
            <Container fluid className="text-dark py-5">
                <Row>
                    {/* Текстовый блок */}
                    <Col xl="4" className="offset-xl-2">
                        <h2 className="fw-bold mb-3">
                            Установка видеонаблюдения
                        </h2>
                        <p>
                            Современные системы видеонаблюдения позволяют обеспечить надежную безопасность вашего дома или бизнеса.
                            Мы предлагаем профессиональный монтаж и настройку видеокамер с возможностью удаленного мониторинга.

                        </p>
                        <h4 className="fw-bold mt-4">Наши услуги:</h4>
                        <ul className="mb-4">
                            <li>Проектирование системы видеонаблюдения</li>
                            <li>Установку и настройку камер</li>
                            <li>Интеграцию с системами безопасности</li>
                            <li>Обслуживание и поддержку</li>
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
                            src="/images/7c7537c1-2367-4f90-bfb1-a6d10155ebfd.png"
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

export default VSSPage;
