import { FormEvent, useState } from "react";
import "./Form.scss";
import TvShowType from "../../types/TvShowType";

type FormProps = {
  defaultFormState: TvShowType;
  formTitle: string;
  handleSubmit: (tvShow: TvShowType) => void;
};

const Form = ({ defaultFormState, handleSubmit, formTitle }: FormProps) => {
  const [tvShow, setTvShow] = useState<TvShowType>(defaultFormState);

  const handleValidation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Object.values(tvShow).some(value => !value)) {
      alert("Missing content, unable to proceed");
      return;
    }

    handleSubmit(tvShow);
  };

  const handleInput = (event: FormEvent<HTMLInputElement>, key: string) =>
    setTvShow({ ...tvShow, [key]: event.currentTarget.value });

  return (
    <div className="form-container">
      <h2 className="form-container__title">{formTitle}</h2>
      <form className="form-container__form" onSubmit={handleValidation}>
        <input
          className="form-container__input"
          type="text"
          placeholder="genre"
          value={tvShow.genre}
          onInput={event => handleInput(event, "genre")}
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="title"
          value={tvShow.tvShow}
          onInput={event => handleInput(event, "tvShow")}
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="rating"
          value={tvShow.rating}
          onInput={event => handleInput(event, "rating")}
        />
        <button type="submit" className="form-container__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
