import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
function VolsPage() {
    return (
        <div className="container text-light py-5">
            <div className="row d-flex align-items-">
                {/* Текстовый блок */}
                <div className="col-md-6">
                    <h2 className="fw-bold">Установка видеонаблюдения</h2>
                    <p>
                        Я в своем познании настолько преисполнился, что я как будто бы уже
                        сто триллионов миллиардов лет проживаю на триллионах и триллионах
                        таких же планет, как эта Земля, мне этот мир абсолютно понятен, и я
                        здесь ищу только одного - покоя, умиротворения и вот этой гармонии,
                        от слияния с бесконечно вечным.
                    </p>
                    <Button style={{ backgroundColor: '#800080', borderColor: '#800080' }}>
                        Заказать услугу
                    </Button>
                </div>

                {/* Блок с изображением */}
                <div className="col-md-6 d-flex justify-content-center">
                    <Image
                        src="/images/7c7537c1-2367-4f90-bfb1-a6d10155ebfd.png"
                        alt="Установка видеонаблюдения"
                        fluid
                        rounded
                        className="max-w-100"
                    />
                </div>
            </div>
        </div>
    );
}

export default VolsPage;
