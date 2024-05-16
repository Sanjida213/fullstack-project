import TvShowType from "../../types/TvShowType";
import "./TvShow.scss"

type TvShowProp = {
  tvShow: TvShowType;
};

const TvShow = ({ tvShow: tvShowObject }: TvShowProp) => {
  const { title: tvShowText, year_released, rating } = tvShowObject;

  return (
    <div className="tvShow">
      <h3 className="tvShow__title"> {tvShowText}</h3>
      <p className="tvShow__text">Year Released: {year_released}</p>
      <p className="tvShow__text"> Ratings: {rating}</p>
    </div>
  );
};

export default TvShow;
