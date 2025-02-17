'use server'

import nodemailer from 'nodemailer';
import axios from 'axios';

const { MAIL_USER, MAIL_HOST, MAIL_RECEPIENT, MAIL_PASSWORD, RECAPTCHA_SECRET_KEY } = process.env;

const transporter = nodemailer.createTransport({
    host: MAIL_HOST,
    port: 465,
    secure: true,
    auth: {
        user: MAIL_USER,
        pass: MAIL_PASSWORD,
    },
});

async function verifyRecaptcha(token) {
    try {
        const { data } = await axios.post(
            'https://www.google.com/recaptcha/api/siteverify',
            null,
            {
                params: {
                    secret: RECAPTCHA_SECRET_KEY,
                    response: token
                }
            }
        );
        console.log("reCAPTCHA Response:", data);

        return data.success;
    } catch (error) {
        console.error("Ошибка reCAPTCHA:", error);
        return false;
    }
}

export default async function sendMail(formData) {
    const captchaToken = formData.get("g-recaptcha-response");

    if (!captchaToken) {
        return false; // reCAPTCHA токен отсутствует
    }

    const isHuman = await verifyRecaptcha(captchaToken);
    if (!isHuman) {
        return false; // reCAPTCHA проверка не пройдена
    }

    const mailData = {
        name: formData.get('name'),
        surname: formData.get('surname'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        company: formData.get('company'),
        service: formData.get('service'),
    };

    try {
        const messageText = `
            <b>ФИО</b>: ${mailData.surname} ${mailData.name} <br>
            <b>Email</b>: ${mailData.email} <br>
            <b>Телефон</b>: ${mailData.phone} <br>
            <b>Компания</b>: ${mailData.company} <br>
            <b>Услуга</b>: ${mailData.service} <br>
        `;

        const info = await transporter.sendMail({
            from: `Сообщение с сайта <${MAIL_USER}>`,
            to: MAIL_RECEPIENT,
            subject: "Новое сообщение с сайта",
            html: messageText,
        });

        console.log("Message sent:", info.messageId);
        return true;
    } catch (ex) {
        console.error(ex);
        return false;
    }
}
