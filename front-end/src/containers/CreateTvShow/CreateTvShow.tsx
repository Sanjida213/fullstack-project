import "./CreateTvShow.scss";
import TvShowType from "../../types/TvShowType";
import Form from "../../components/Form/Form";

const CreateTvShow = () => {

  const handleSubmit = async (tvShow: TvShowType) => {
    const result = await fetch("http://localhost:8080/tvShow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tvShow),
    });

    if (result.ok) {
      alert("Tv Show added");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const defaultFormState = { id: -1, title: "", year_released: "", rating: 0 };

  return (
    <section className="create-tvShow">
      <h2 className="create-tvShow__title">Add a TV Show</h2>
      <Form handleSubmit={handleSubmit} defaultFormState={defaultFormState} formTitle="Add A New TV Show" />
    </section>
  );
}

export default CreateTvShow;