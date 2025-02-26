import { Image as BsImage } from "react-bootstrap";
import Image from 'next/image'
import Cards from "../components/Cards/Cards";
import SimpleSlider from "../components/SimpleSlider/SimpleSlider";
import mainPic from '../../public/images/Alm.png'
import cardPic from "../../public/images/de88051c-b410-44c1-a288-66946b2a3df3.png"
import BrandSlider from "../components/BrandSlider/BrandSlider";

function Home() {
    const cardsData = [
        {
            src: cardPic,
            title: "Монтаж СКС и ВОЛС",
            description: "Качественная установка СКС и ВОЛС",
            path: "/vols"
        },
        {
            src: cardPic,
            title: "Монтаж беспроводных сетей",
            description: "Настройка беспроводных сетей",
            path: "/wifi"

        },
        {
            src: cardPic,
            title: "Установка видеонаблюдения",
            description: "Монтаж и настройка камер",
            path: "/vss"

        },
        {
            src: cardPic,
            title: "Бизнес решения",
            description: "Технологические решения для бизнеса",
            path: "/business"
        }
    ];

    return (
        <>
            <Image
                as={BsImage}
                src={mainPic}
                fluid
                style={{ width: "100%", maxHeight: "772px", minHeight: "400px", objectFit: "cover", objectPosition: "center" }} />
            <BrandSlider></BrandSlider>
            <Cards cards={cardsData} />
            <SimpleSlider></SimpleSlider>
        </>
    );
}

export default Home;