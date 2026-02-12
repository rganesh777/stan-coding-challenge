import { useMediaFeed } from "../hooks/useMediaFeed";
import { filterMedia } from "../utils/filterMedia";
import CardsGrid from "../components/CardsGrid";
import MediaCard from "../components/MediaCard";

const Series = () => {
  const { data, loading, error } = useMediaFeed();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const series = filterMedia(data, "series");

  return (
    <CardsGrid>
      {series.map((item) => (
        <MediaCard key={item.title} item={item} />
      ))}
    </CardsGrid>
  );
};
export default Series;
