import { ChangeEventHandler } from "react";

type FilterProps = {
  onChange: ChangeEventHandler;
  labelText: string;
  label: string;
};

const Filter = ({ onChange, labelText, label }: FilterProps) => {
  const options = ["All Ratings", "1-5", "6-8", "8-9", "10"];

  return (
    <>
      <label htmlFor={label}>{labelText}</label>
      <select name={label} id={label} onChange={onChange}>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default Filter;
