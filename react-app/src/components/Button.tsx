import React from "react";

interface Props {
  type: string;
  label: string;
}

const Button = ({ type, label }: Props) => {
  const addClass = " btn btn-" + type;
  label = label.toUpperCase();
  return (
    <>
      <button type="button" className={addClass}>
        {label}
      </button>
    </>
  );
};

export default Button;
