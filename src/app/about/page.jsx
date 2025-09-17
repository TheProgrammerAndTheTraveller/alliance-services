import { Container, Row, Col, Button } from "react-bootstrap";
import { Poppins } from 'next/font/google';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Image from 'next/image'
import cardImage from "../../../public/images/about1.jpg"
import cardImage2 from "../../../public/images/about2.jpg"
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
                        <h2 className="fw-bold mb-3">О компании Streamnet</h2>
                        <p style={{ textAlign: 'justify' }}>
                            Streamnet &mdash; это команда специалистов, объединённых одной целью: создавать современные, надежные и безопасные сети для бизнеса и частных клиентов. Мы работаем на стыке IT и инженерных решений, помогая нашим заказчикам быть на шаг впереди в цифровом мире.
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            Мы верим, что качественная сеть &mdash; это не роскошь, а необходимая основа для работы, безопасности и развития. Именно поэтому мы подходим к каждому проекту с вниманием к деталям, учитывая специфику объекта, требования клиента и возможности для будущего масштабирования.
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            Наша команда состоит из опытных инженеров, проектировщиков и монтажников, которые постоянно совершенствуют свои навыки и следят за новыми технологиями. Мы используем только проверенное оборудование от ведущих производителей, чтобы гарантировать надежность и долговечность наших решений.
                        </p>
                    </Col>

                    {/* Блок с изображением */}
                    <Col className="ps-xl-0 pe-xl-2 offset-xl-1 py-xl-0 p-3">
                        <Image
                            src={cardImage2}
                            alt="Монтаж СКС и ВОЛС"
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderBottomLeftRadius: '70px', // Скругление только левого нижнего угла
                            }}
                        />
                    </Col>

                </Row>
                <Container fluid className="offset-xl-2 px-0">
                    <h3>Чем мы занимаемся</h3>
                    <ul>
                        <li>Проектируем и строим <strong>структурированные кабельные системы (СКС) и волоконно-оптические линии связи (ВОЛС).</strong></li>
                        <li>Настраиваем <strong>беспроводные сети Wi-Fi</strong> с бесшовным роумингом и высокой производительностью.</li>
                        <li>Устанавливаем <strong>системы видеонаблюдения, домофоны и СКУД</strong>, объединяя их в единую инфраструктуру безопасности.</li>
                        <li>Обеспечиваем <strong>обслуживание и поддержку</strong> &mdash; от мелкой настройки до масштабной модернизации.</li>
                    </ul>
                    <h3>Наши ценности</h3>
                    <ul>
                        <li><strong>Качество и надежность.</strong> Мы используем только проверенное оборудование и материалы, чтобы системы работали долгие годы.</li>
                        <li><strong>Индивидуальный подход.</strong> Каждый объект уникален, поэтому мы разрабатываем решение именно под ваши задачи.</li>
                        <li><strong>Современные технологии.</strong> Следим за трендами и внедряем инновации, которые реально повышают эффективность.</li>
                        <li><strong>Прозрачность и ответственность.</strong> Всегда выполняем работу в срок и держим клиентов в курсе каждого этапа.</li>
                    </ul>

                    <p className="fw-bold text-primary">
                        Свяжитесь с нами, чтобы получить консультацию и расчет стоимости!
                    </p>
                    <Button as={Link} href="/contact" variant="theme-pink" className="rounded-pill">
                        Заказать услугу
                    </Button>
                </Container>
            </Container>
        </>
    );
}
export default About;