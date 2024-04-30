import FunCard from "../components/FunCard";
import men from "../asset/img/man.png";
import figma from "../asset/img/figma.png";
const Datas = [
  {
    id: 1,
    bg: "primary",
    h3: "300K+ Users",
    p: "and counting...",
    img: men,
    size: "",
  },
  {
    id: 2,
    bg: "secondary",
    h3: "100% Free!",
    p: "Forever.",
    img: "",
    size: "",
  },
  {
    id: 3,
    bg: "black",
    h3: "19K+ Plugin Users",
    p: "Check it out on Figma",
    img: figma,
    size: "fun-card-h3",
  },
  {
    id: 4,
    bg: "info",
    h3: "200+ ProductHunt Upvotes",
    p: "Leave a review",
    img: "",
    size: "fun-card-h3",
  },
];

const FunCardWrap = () => {
  return (
    <div className="fun-card-wrap">
      {Datas.map((data) => (
        <FunCard
          key={data.id}
          bg={data.bg}
          size={data.size}
          h3={data.h3}
          p={data.p}
          img={data.img}
        />
      ))}
    </div>
  );
};

export default FunCardWrap;
