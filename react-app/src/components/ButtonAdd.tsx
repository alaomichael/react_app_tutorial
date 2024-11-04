interface Props {
  children: string;
  color?: "primary" | "secondary" | "warning" | "danger";
  onClick: () => void;
}

const ButtonAdd = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonAdd;
