import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Poppins } from 'next/font/google';

import Link from 'next/link';

const poppins = Poppins({
    subsets: ['latin', 'latin-ext'],
    weight: ['400', '700'],
    style: 'normal',
});
function volsPage() {
    return (
        <>
            <Container fluid>
                <Row className="vols-hero justify-content-start align-items-center">

                    {/* Градиентная часть с текстом */}
                    <Col xl="7" className="text-white text-center vols-hero__text-container">
                        <h1 className={poppins.className + " vols-hero__title"}>
                            Монтаж СКС и ВОЛС
                        </h1>
                        <p className={poppins.className + " vols-hero__subtitle"}>
                            Профессиональная инсталляция кабельных систем и оптики
                        </p>
                    </Col>

                    {/* Картинка */}
                    <Col md className="vols-hero__image p-0 d-none d-xl-block">
                        <Image
                            src="/images/sks1.png"
                            alt="Монтаж СКС и ВОЛС"
                        />
                    </Col>
                </Row>
            </Container>

            <Container fluid className="text-dark py-5">
                <Row>
                    {/* Текстовый блок */}
                    <Col xl="4" className="offset-xl-2">
                        <h2 className="fw-bold mb-3">
                            Проектирование, прокладка и настройка СКС и ВОЛС
                        </h2>
                        <p>
                            Монтаж структурированных кабельных систем (СКС) и волоконно-оптических линий связи (ВОЛС) – это основа современной IT-инфраструктуры.
                            От качества прокладки зависит надежность сети, скорость передачи данных и бесперебойная работа оборудования.
                        </p>
                        <h4 className="fw-bold mt-4">Наши услуги:</h4>
                        <ul className="mb-4">
                            <li>Проектирование и разработка схем кабельных трасс</li>
                            <li>Прокладка медных и оптоволоконных кабелей</li>
                            <li>Монтаж серверных стоек и коммутационного оборудования</li>
                            <li>Обжим, сварка и тестирование соединений</li>
                            <li>Организация кроссировок и маркировка кабелей</li>
                            <li>Сертификация и техническая поддержка</li>
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

export default volsPage;