const Card = ({ img, h3, p }) => {
  return (
    <div className="card">
      <img src={img} className="card-icon" alt="time" />
      <h3>
        {h3}
        <div className="card-underline"></div>
      </h3>
      <p>{p}</p>
    </div>
  );
};

export default Card;
