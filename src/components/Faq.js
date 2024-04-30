import { useState } from "react";

const Faq = ({ data, active }) => {
  const [className, setClassName] = useState("collapsible");
  const toggleClass = () => {
    setClassName((prev) =>
      prev === "collapsible" ? "collapsible active" : "collapsible"
    );
  };

  return (
    <div onClick={toggleClass} className={className}>
      <h5>{data.q}</h5>
      <div className="content">
        <p>{data.ans}</p>
      </div>
    </div>
  );
};

export default Faq;
