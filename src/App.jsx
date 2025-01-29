import './App.css';
import ColorSchemesExample from './Navbar';
import FlipCard from './FlipCard';

function App() {
  return (
    <>
      <ColorSchemesExample />
      <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", padding: "20px" }}>
        <FlipCard
          src="/images/de88051c-b410-44c1-a288-66946b2a3df3.png"
          alt="Network Installation"
          title="Монтаж СКС и ВОЛС"
          description="Качественная установка СКС и ВОЛС"
        />
        <FlipCard
          src="/images/de88051c-b410-44c1-a288-66946b2a3df3.png"
          alt="Wireless Networks"
          title="Монтаж беспроводных сетей"
          description="Настройка беспроводных сетей"
        />
        <FlipCard
          src="/images/de88051c-b410-44c1-a288-66946b2a3df3.png"
          alt="CCTV Installation"
          title="Установка видеонаблюдения"
          description="Монтаж и настройка камер"
        />
        <FlipCard
          src="/images/de88051c-b410-44c1-a288-66946b2a3df3.png"
          alt="Business Solutions"
          title="Бизнес решения"
          description="Технологические решения для бизнеса"
        />
      </div>
    </>
  );
}

export default App;
