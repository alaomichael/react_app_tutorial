import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
  // onClick: () => void;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxChars);

  return (
    <p>
      {text}{" "}
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "...ReadMore"}
      </button>
    </p>
  );

};

export default ExpandableText;
