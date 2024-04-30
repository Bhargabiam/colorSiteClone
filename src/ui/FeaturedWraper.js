import Featured from "../components/Featured";

const featureds = [
  "Examples of Colors from Popular Sites",
  "How to Select Colors",
  "Learn More about the Releases",
];

const FeaturedWraper = () => {
  return (
    <div className="featur-wrap">
      {featureds.map((featured, index) => (
        <Featured key={index} aBody={featured} />
      ))}
    </div>
  );
};

export default FeaturedWraper;
