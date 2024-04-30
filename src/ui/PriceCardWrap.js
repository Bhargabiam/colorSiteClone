import PriceCard from "../components/PriceCard";

const Lists = [
  {
    id: 1,
    list: ["Choose any color", "Export all you want"],
  },
  {
    id: 2,
    list: [
      "Choose any color",
      "Export all you want",
      "Get a big thank you for checking this site out",
      "Get access to dashboard",
    ],
    cardBg: "secondary",
    plan: "Pro",
    price: "$0.00 / month",
    btnBg: "primary",
    text: "tetx-white",
    btnText: "Go to Dashboard",
  },
  {
    id: 3,
    list: [
      "Choose any color",
      "Export all you want",
      "Get a big thank you for checking this site out",
      "Get access to dashboard",
      "Super duper exclusive members-only content.",
    ],
    plan: "Enterprise",
    price: "$0.00 / month",
    btnText: "Learn more",
  },
];

const PriceCardWrap = () => {
  return (
    <div className="price-cards">
      {Lists.map((list) => (
        <PriceCard
          key={list.id}
          cardBg={list.cardBg}
          plan={list.plan}
          price={list.price}
          list={list.list}
          btnBg={list.btnBg}
          text={list.text}
          btnText={list.btnText}
        />
      ))}
    </div>
  );
};

export default PriceCardWrap;
