import "../asset/css/styles.css";

const FunCard = ({ bg, size, h3, p, img }) => {
  return (
    <div className={`fun-card ${bg}`}>
      <h3 className={size && size}>{h3}</h3>
      <p className="uline">{p}</p>
      {img && <img src={img} alt="img" className="fun-card-img" />}
    </div>
  );
};

export default FunCard;
