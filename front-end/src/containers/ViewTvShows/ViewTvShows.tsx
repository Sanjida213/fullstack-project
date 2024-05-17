import { useEffect, useState, ChangeEvent } from "react";
import "./ViewTvShow.scss";
import TvShowList from "../../components/TvShowList/TvShowList";
import TvShowType from "../../types/TvShowType";
import Spinner from "../../components/Spinner/Spinner";
import Select from "../../components/Select/Select";

const ViewTvShows = () => {
  const [tvShows, setTvShows] = useState<TvShowType[]>([]);
  const [selectedRating, setSelectedRating] = useState<string>("All Ratings");
  const [selectedTvShow, setSelectedTvShow] = useState<string>("");

  const getTvShows = async () => {
    const response = await fetch("http://localhost:8080/tvShows");
    const tvShowData = await response.json();
    setTvShows(tvShowData);
  };

  useEffect(() => {
    getTvShows();
  }, []);

  const handleSelectRating = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedRating(event.currentTarget.value);
  };

  const handleSelectTVShow = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedTvShow(event.currentTarget.value);
  };

  const filteredTvShows = tvShows.filter(tvShow => {
    const matchesName = selectedTvShow
      ? tvShow.title.toLowerCase() === selectedTvShow.toLowerCase()
      : true;
    const rating = parseFloat(tvShow.rating);
    const matchesRating = selectedRating === "All Ratings" ||
      (selectedRating === "1-5" && rating >= 1 && rating <= 5) ||
      (selectedRating === "6-8" && rating >= 6 && rating <= 8) ||
      (selectedRating === "8-9" && rating >= 8 && rating <= 9) ||
      (selectedRating === "10" && rating === 10);

    return matchesName && matchesRating;
  });

  const isLoading = !(tvShows.length > 0);

  if (isLoading) return <Spinner />;

  return (
    <section className="view-tvShows">
      <h2 className="view-tvShows__title">
        Here are a few of my top TV shows you may enjoy...
      </h2>
      <div className="view-tvShows__filtered">
        <Select
          options={tvShows.map(tvShow => tvShow.title)}
          onChange={handleSelectTVShow}
          labelText="Select a TV Show: "
          label="tvShowSelect"
        />
        <Select
          options={["All Ratings", "1-5", "6-8", "8-9", "10"]}
          onChange={handleSelectRating}
          labelText="Filter by Rating: "
          label="ratingSelect"
        />
        <TvShowList tvShow={filteredTvShows} />
      </div>
    </section>
  );
};

export default ViewTvShows;
