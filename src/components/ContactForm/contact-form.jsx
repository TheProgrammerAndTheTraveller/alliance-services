"use client"
import { Button, FormControl, FormLabel, Form } from "react-bootstrap";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import sendMail from "../../utils/send-mail";

export default function ContactForm() {
    const [messageSent, setMessageSent] = useState(null); // Состояние для результата отправки
    const [captchaToken, setCaptchaToken] = useState("");
    const recaptchaRef = useRef(null);

    async function handleSubmit(event) {
        event.preventDefault();

        if (!recaptchaRef.current) return;

        // Получаем токен капчи
        const token = await recaptchaRef.current.executeAsync();
        setCaptchaToken(token);
        console.log("reCAPTCHA Token:", token);

        const formData = new FormData(event.target);
        // formData.append("g-recaptcha-response", token);

        // Асинхронная отправка формы
        const success = await sendMail(formData);

        if (success) {
            setMessageSent(true);
        } else {
            setMessageSent(false);
        }
    }

    if (messageSent === true) {
        return <h1 className="my-5">Ваша заявка будет обработана</h1>;
    }

    if (messageSent === false) {
        return <h1>Произошла ошибка при отправке вашей заявки, повторите позднее</h1>;
    }

    return (
        <Form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <FormLabel>Имя</FormLabel>
                <FormControl name="name" type="name" placeholder="Введите ваше имя" />
            </div>
            <div className="form-group mb-3">
                <FormLabel>Фамилия</FormLabel>
                <FormControl name="surname" type="name" placeholder="Введите вашу фамилию" />
            </div>
            <div className="form-group mb-3">
                <FormLabel>Email</FormLabel>
                <FormControl name="email" type="email" placeholder="Введите ваш Email" />
            </div>
            <div className="form-group mb-3">
                <FormLabel>Номер телефона</FormLabel>
                <FormControl required name="phone" type="phone" placeholder="Введите ваш номер телефона" />
            </div>
            <div className="form-group mb-3">
                <FormLabel>Название компании</FormLabel>
                <FormControl name="company" type="text" placeholder="Введите название вашей компании" />
            </div>
            <Form.Label>Выберите услугу</Form.Label>
            <Form.Select name="service" aria-label="Выбор услуги">
                <option>Монтаж СКС и ВОЛС</option>
                <option>Монтаж беспроводных сетей</option>
                <option>Установка видеонаблюдения</option>
                <option>Бизнес решения для организаций</option>
            </Form.Select>

            <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                size="invisible"
                ref={recaptchaRef}
            />

            <Button type="submit" variant="theme-pink" className="rounded-pill mt-3">
                Заказать услугу
            </Button>
        </Form>
    );
}
