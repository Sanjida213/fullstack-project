import { useEffect, useState } from "react";
import "./ViewTvShow.scss";
import TvShowList from "../../components/TvShowList/TvShowList";
import TvShowType from "../../types/TvShowType";

const ViewTvShows = () => {
  const [tvShows, setTvShows] = useState<TvShowType[]>([]);

  const getTvShows = async () => {
    const response = await fetch("http://localhost:8080/tvShows");
    const tvShowData = await response.json();
    setTvShows(tvShowData);
  };

  useEffect(() => {
    getTvShows();
  }, []);

  return (
    <section className="view-tvShows">
      <h2 className="view-tvShows__title">
        Here are a few of my top TV shows you may enjoy...
      </h2>
      <TvShowList tvShow={tvShows} />
    </section>
  );
};

export default ViewTvShows;
