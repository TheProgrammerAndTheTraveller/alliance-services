'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Container } from 'react-bootstrap';
import './SimpleSlider.scss'


function SimpleSlider() {
    const breakpoints = {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    }

    const cardsData = [
        {
            text: "Обратились в StreamNet для монтажа СКС и настройки беспроводной сети в офисе. Работа была выполнена на высшем уровне — быстро, аккуратно и с учетом всех наших пожеланий. Теперь интернет стабилен, а сотрудники довольны. Особенно порадовал профессиональный подход команды — на все вопросы отвечали оперативно, предложили несколько решений под наш бюджет. Обязательно будем обращаться снова!",
            author: "Александр Михайлов, директор IT-отдела"
        },
        {
            text: "Нужно было установить видеонаблюдение на объекте. Специалисты StreamNet подобрали оптимальное решение, смонтировали камеры и настроили доступ. Все работает идеально, качество изображения отличное. Теперь мы можем в любой момент удаленно контролировать ситуацию в офисе, что значительно повысило безопасность. Рекомендую всем, кто ценит надежность и качество!",
            author: "Екатерина Смирнова, владелец бизнеса",
            isBlue: true
        },
        {
            text: "StreamNet полностью взяли на себя проектирование и внедрение нашей IT-инфраструктуры. Грамотный подход, надежное оборудование и отличная техподдержка. Теперь уверены, что сети работают стабильно и безопасно. Отдельно хочется отметить, что после установки команда провела детальное обучение нашего персонала, что позволило быстро освоиться с новой системой. Отличный сервис, который стоит своих денег!",
            author: "Дмитрий Ковалев, главный инженер",
            isBlue: false
        },
        {
            text: "Обратились в StreamNet для монтажа СКС и настройки беспроводной сети в офисе. Работа была выполнена на высшем уровне — быстро, аккуратно и с учетом всех наших пожеланий. Теперь интернет стабилен, а сотрудники довольны. Особенно порадовал профессиональный подход команды — на все вопросы отвечали оперативно, предложили несколько решений под наш бюджет. Обязательно будем обращаться снова!",
            author: "Александр Михайлов, директор IT-отдела",
            isBlue: true
        },
    ]

    return (
        <Container className='cardslider-container'>
            <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={true}
                breakpoints={breakpoints}
                pagination={{ clickable: true }}
                loop={true}
            >
                {cardsData.map((c, i) => (
                    <SwiperSlide key={i} className={`slider-card p-10 p-6-mobile${c.isBlue ? ' slider-card-blue' : ''}`}>
                        <p className='slider-card__text'>{c.text}</p>
                        <p className='slider-card__author'>{c.author}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}

export default SimpleSlider;