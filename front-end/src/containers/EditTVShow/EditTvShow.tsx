import "./EditTvShow.scss";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import TvShow from "../../components/TvShow/TvShow";
import Spinner from "../../components/Spinner/Spinner";
import TvShowType from "../../types/TvShowType";

const EditTvShow = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tvShow, setTvShow] = useState<TvShowType | null>(null);
  const [showForm, setShowForm] = useState(false);

  const getTvShowById = async (id: string) => {
    const url = `http://localhost:8080/tvShow/${id}`;
    const response = await fetch(url);
    const tvShowData = await response.json();
    setTvShow(tvShowData);
  };

  useEffect(() => {
    if (id) {
      getTvShowById(id);
    }
  }, [id]);

  const handleUpdateTvShow = async (updatedTvShow: TvShowType) => {
    const result = await fetch(`http://localhost:8080/tvShow/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTvShow),
    });

    if (result.ok) {
      alert("TV Show updated");
      setTvShow(updatedTvShow);
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleDeleteTvShow = async () => {
    const result = await fetch(`http://localhost:8080/tvShow/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.ok) {
      alert("TV Show deleted");
      navigate("/");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleShowForm = () => setShowForm(!showForm);

  if (!tvShow) return <Spinner />;

  return (
    <section className="edit-tvShow">
      <h2 className="edit-tvShow__title">Edit TV Show</h2>
      <div className="edit-tvShow__content">
        <TvShow tvShow={tvShow} />
        <div className="edit-tvShow__buttons">
          <button
            className={showForm ? "edit-tvShow__button" : "edit-tvShow__button edit-tvShow__button--secondary"}
            onClick={handleShowForm}
          >
            Update
          </button>
          <button className="edit-tvShow__button edit-tvShow__button--secondary" onClick={handleDeleteTvShow}>
            Delete
          </button>
        </div>
      </div>
      {showForm && <Form defaultFormState={tvShow} formTitle="Update tvShow" handleSubmit={handleUpdateTvShow} />}
    </section>
  );
}

export default EditTvShow;