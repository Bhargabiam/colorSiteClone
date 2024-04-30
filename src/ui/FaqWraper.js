import Faq from "../components/Faq";

const faqs = [
  {
    q: "How many colors should I choose?",
    ans: "Normally, 3 colors are absolutely fine (meaning background, text, and one accent color). However, if you want, you can have more. Usually, we don’t add more than 6 colors across a platform. It would just make things too... complicated. Plus, it makes it hard to keep the colors consistent throughout the design.",
  },
  {
    q: "How does the contrast checker work?",
    ans: `The contrast checker shows the contrast ratio between the selected color and its background/foreground.

    The contrast checker has 3 lights:
    
    x / Red: The contrast ratio does not pass either AAA or AA. Therefore, both large and normal texts are hardly readable.
    - / Yellow: The contrast ratio might pass AA but won't pass AAA. Large texts might be readable but normal texts are probably not readable.
    ✓ / Green: The contrast ratio passes both AA and AAA. Both large and normal texts are readable.
    Learn more about the contrast checker.`,
  },
  {
    q: "What does the hero image represent?",
    ans: `The hero image is inspired by Piet Mondrian's Composition with Large Red Plane, Yellow, Black, Grey and Blue. This composition keeps the ratio of the main colors (red, blue, and yellow) very close to the 60-30-10 rule of UI design. This is mainly why I've chosen this composition to visualize the distribution of the colors on the page.`,
  },
  {
    q: "How can I set up the fonts?",
    ans: `You can enter the name of a font from Google Fonts or the fonts installed on your device. Read more about Font Setup.`,
  },
  {
    q: "How can I learn more about this tool?",
    ans: `You can find more information about Realtime Colors on the Docs. You can also contact me for any questions you might have.`,
  },
];

const FaqWraper = () => {
  return (
    <>
      {faqs.map((faq, index) => (
        <Faq key={index} data={faq} />
      ))}
    </>
  );
};

export default FaqWraper;
