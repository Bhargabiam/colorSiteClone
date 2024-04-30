import ReviewCard from "../components/ReviewCard";
import user1 from "../asset/img/user1.png";
import user2 from "../asset/img/user3.png";

const users = [
  {
    id: 1,
    name: "John Smith",
    designation: "Product Owner",
    img: user1,
    star: 4,
    comment:
      '"Wow! I love this site. Realtime Colors is all websites at the same time."',
  },
  {
    id: 2,
    name: "Bhargab Chatterjee",
    designation: "Product Designer",
    img: user2,
    star: 5,
    comment:
      '"Amazing. I found my favorite colors in literally... 2 minutes? Woah! Totally real review."',
  },
  {
    id: 3,
    name: "jackson",
    designation: "Developer",
    star: 5,
    comment:
      '"Astonished. This product is so cool. You should try it and upgrade to Enterprise plan. No kidding."',
  },
];

const ReviewCardWrap = () => {
  return (
    <div className="test-div">
      {users.map((user) => (
        <ReviewCard key={user.id} users={user} />
      ))}
    </div>
  );
};

export default ReviewCardWrap;
