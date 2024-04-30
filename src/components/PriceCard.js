const PriceCard = ({
  cardBg,
  plan = "Basic",
  price = "Free",
  list = ["Choose any color"],
  btnBg = "bg-secondary",
  text,
  btnText = "Get Started",
}) => {
  return (
    <div className={`price-card ${cardBg} && ${cardBg}`}>
      <h3>{plan}</h3>
      <p>{price}</p>
      {list.map((item, index) => (
        <div className="price-list" key={index}>
          <div className="price-svg">
            <svg
              viewBox="0 0 24.00 24.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(0)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 12.6111L8.92308 17.5L20 6.5"
                  stroke="#e92fa6"
                  stroke-width="2.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className="price-para">
            <p>{item}</p>
          </div>
        </div>
      ))}
      <a className={`price-btn ${btnBg} ${text} && ${text}`} href="#none">
        {btnText}
      </a>
    </div>
  );
};

export default PriceCard;
