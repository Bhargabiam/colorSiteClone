import Card from "../components/card";
import time from "../asset/img/clock.png";
import resume from "../asset/img/resume.png";
import easy from "../asset/img/easy.png";

const Datas = [
  {
    id: 1,
    img: time,
    h3: "It’s Fast",
    p: "No need to spend hours implementing different variations of colors. Decide right away!",
  },
  {
    id: 2,
    img: resume,
    h3: "It’s Realistic",
    p: "Color Palettes make it hard to pick. This tool distributes the colors on a real website.",
  },
  {
    id: 3,
    img: easy,
    h3: "It’s simple",
    p: "Push a few buttons, and there you have it! Your very own branding colors, ready to export.",
  },
];

const CardWrap = () => {
  return (
    <>
      {Datas.map((data) => (
        <Card key={data.id} img={data.img} h3={data.h3} p={data.p} />
      ))}
    </>
  );
};

export default CardWrap;
