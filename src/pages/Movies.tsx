import { useMediaFeed } from "../hooks/useMediaFeed";
import { filterMedia } from "../utils/filterMedia";
import CardsGrid from "../components/CardsGrid";
import MediaCard from "../components/MediaCard";

const Movies = () => {
  const { data, loading, error } = useMediaFeed();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const movies = filterMedia(data, "movie");

  return (
    <CardsGrid>
      {movies.map((item) => (
        <MediaCard key={item.title} item={item} />
      ))}
    </CardsGrid>
  );
};
export default Movies;
