// import { useEffect, useState } from "react";
// import "./ViewTvShow.scss";
// import TvShowList from "../../components/TvShowList/TvShowList";
// import TvShowType from "../../types/TvShowType";
// import Spinner from "../../components/Spinner/Spinner";
// import Filter from "../../components/Filter/Filter";

// const ViewTvShows = () => {
//   const [tvShows, setTvShows] = useState<TvShowType[]>([]);

//   const getTvShows = async () => {
//     const response = await fetch("http://localhost:8080/tvShows");
//     const tvShowData = await response.json();
//     setTvShows(tvShowData);
//   };

//   useEffect(() => {
//     getTvShows();
//   }, []);

//   const handleSelectTVShow = (event: ChangeEvent<HTMLSelectElement>) => setTvShow(event.currentTarget.value);

//   const isLoading = !(tvShow.length > 0);

//   if (isLoading) return <Spinner />;
//   return (
//     <section className="view-tvShows">
//       <h2 className="view-tvShows__title">
//         Here are a few of my top TV shows you may enjoy...
//       </h2>
//       <TvShowList tvShow={tvShows} />
//     </section>
//   );
// };

// export default ViewTvShows;


import { useEffect, useState, ChangeEvent } from "react";
import "./ViewTvShow.scss";
import TvShowList from "../../components/TvShowList/TvShowList";
import TvShowType from "../../types/TvShowType";
import Spinner from "../../components/Spinner/Spinner";
import Filter from "../../components/Filter/Filter";

const ViewTvShows = () => {
  const [tvShows, setTvShows] = useState<TvShowType[]>([]);
  const [selectedTvShow, setSelectedTvShow] = useState<string>("");

  const getTvShows = async () => {
    const response = await fetch("http://localhost:8080/tvShows");
    const tvShowData = await response.json();
    setTvShows(tvShowData);
  };

  useEffect(() => {
    getTvShows();
  }, []);

  const handleSelectTVShow = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedTvShow(event.currentTarget.value);
  };

  const filteredTvShows = selectedTvShow
    ? tvShows.filter(tvShow => tvShow.title.toLowerCase() === selectedTvShow.toLowerCase())
    : tvShows;

  const isLoading = !(tvShows.length > 0);

  if (isLoading) return <Spinner />;
  
  return (
    <section className="view-tvShows">
      <h2 className="view-tvShows__title">
        Here are a few of my top TV shows you may enjoy...
      </h2>
      <Filter
        options={tvShows.map(tvShow => tvShow.title)}
        onChange={handleSelectTVShow}
        labelText="Select a TV Show:"
        label="tvShowSelect"
      />
      <TvShowList tvShow={filteredTvShows} />
    </section>
  );
};

export default ViewTvShows;
