import { ChangeEventHandler } from "react";

type SelectProps = {
  options: string[];
  onChange: ChangeEventHandler;
  labelText: string;
  label: string;
};

const Select = ({ options, onChange, labelText, label }: SelectProps) => {
  return (
    <>
      <label htmlFor={label}>{labelText}</label>
      <select name={label} id={label} onChange={onChange}>
        <option value="">All TV Shows</option>
        {options.map(option => (
          <option key={label + option} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
