import "./TvShowList.scss";
import TvShowType from "../../types/TvShowType";
import { Link } from "react-router-dom";
import TvShow from "../TvShow/TvShow"

type TvShowListProps = {
  tvShow: TvShowType[];
};

const TvShowList = ({ tvShow }: TvShowListProps) => {
  return (
    <>
      <div className="tvShow-list">
        {tvShow.map(tvShow => (
          <Link className="custom-link" key={tvShow.id} to={`/tvShow/edit/${tvShow.id}`}>
            <TvShow tvShow={tvShow} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default TvShowList;
