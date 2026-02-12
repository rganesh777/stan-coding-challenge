import CardsGrid from "../components/CardsGrid";
import TitleCard from "../components/TitleCard";

const Index = () => {
  return (
    <CardsGrid>
      <TitleCard title="Series" link="/series" />
      <TitleCard title="Movies" link="/movies" />
    </CardsGrid>
  );
};

export default Index;
