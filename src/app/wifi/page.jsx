import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Poppins } from 'next/font/google';
import Link from 'next/link';


const poppins = Poppins({
    subsets: ['latin', 'latin-ext'],
    weight: ['400', '700'],
    style: 'normal',
});

function WifiPage() {
    return (
        <>
            <Container fluid>
                <Row className="vols-hero justify-content-start align-items-center">

                    {/* Градиентная часть с текстом */}
                    <Col xl="7" className="text-white text-center vols-hero__text-container">
                        <h1 className={poppins.className + " vols-hero__title"}>
                            Монтаж беспроводных сетей
                        </h1>
                        <p className={poppins.className + " vols-hero__subtitle"}>
                            Проектирование и установка Wi-Fi сетей под ключ
                        </p>
                    </Col>

                    {/* Картинка */}
                    <Col md className="vols-hero__image p-0 d-none d-xl-block">
                        <Image
                            src="/images/wifi1.png"
                            alt="Монтаж беспроводных сетей"
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
                            Монтаж беспроводных сетей
                        </h2>
                        <p>
                            Современные Wi-Fi сети обеспечивают высокую скорость соединения и надежность передачи данных.
                            Мы помогаем настроить беспроводную сеть для вашего дома, офиса или предприятия, обеспечивая максимальную производительность и безопасность.


                        </p>
                        <h4 className="fw-bold mt-4">Наши услуги:</h4>
                        <ul className="mb-4">
                            <li>Проектирование и расчет покрытия </li>
                            <li>Монтаж и настройка точек доступа</li>
                            <li>Создание бесшовного роуминга</li>
                            <li>Оптимизация сети под нагрузку</li>
                            <li>Обеспечение безопасности Wi-Fi соединений</li>
                            <li>Тестирование и мониторинг производительности</li>
                        </ul>
                        <p>
                            Используем только современные технологии и оборудование, чтобы ваши беспроводные сети работали без сбоев.
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
                            alt="Монтаж беспроводных сетей"
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

export default WifiPage;
