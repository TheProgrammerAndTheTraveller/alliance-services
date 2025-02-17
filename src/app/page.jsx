import { Image } from "react-bootstrap";
import Cards from "../components/Cards/Cards";
import SimpleSlider from "../components/SimpleSlider/SimpleSlider";

function Home() {
    const cardsData = [
        {
            src: "/images/de88051c-b410-44c1-a288-66946b2a3df3.png",
            title: "Монтаж СКС и ВОЛС",
            description: "Качественная установка СКС и ВОЛС",
            path: "/vols"

        },
        {
            src: "/images/de88051c-b410-44c1-a288-66946b2a3df3.png",
            title: "Монтаж беспроводных сетей",
            description: "Настройка беспроводных сетей",
            path: "/wifi"

        },
        {
            src: "/images/de88051c-b410-44c1-a288-66946b2a3df3.png",
            title: "Установка видеонаблюдения",
            description: "Монтаж и настройка камер",
            path: "/vss"

        },
        {
            src: "/images/de88051c-b410-44c1-a288-66946b2a3df3.png",
            title: "Бизнес решения",
            description: "Технологические решения для бизнеса",
            path: "/business"

        }
    ];

    return (
        <>
            <Image
                src="images/Alm.png"
                fluid
                style={{ width: "100%", maxHeight: "772px", minHeight: "400px", objectFit: "cover", objectPosition: "center" }} className="mb-5" />
            <Cards cards={cardsData} />
            <SimpleSlider></SimpleSlider>
        </>
    );
}

export default Home;