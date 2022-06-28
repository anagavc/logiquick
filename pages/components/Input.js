import React from "react";

const Input = ({ inputName, title, type, placeholder, options }) => {
  const inputStyle =
    "px-4  py-2  placeholder:text-pry-100 text-pry-100 bg-pry-50 border border-pry-100 border-b-2 border-b-sec focus:outline-none  focus:border-sec transition focus:ring-sec focus:ring-1 duration-300 w-full";
  return (
    <>
      {type === "select" ? (
        <div className="flex flex-col w-full" key={inputName}>
          <label
            htmlFor={inputName}
            className="text-base text-pry-100 font-normal"
          >
            {title}
          </label>
          <select className={inputStyle} name={inputName}>
            {options?.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
        </div>
      ) : (
        <div className="flex flex-col w-full" key={inputName}>
          <label
            htmlFor={inputName}
            className="text-base text-pry-100 font-heading"
          >
            {title}
          </label>
          <input
            placeholder={placeholder}
            name={inputName}
            id={inputName}
            type={type}
            className={inputStyle}
          />
          <p className="text-pry-100 font-normal text-sm font-body py-"></p>
        </div>
      )}
    </>
  );
};

export default Input;
