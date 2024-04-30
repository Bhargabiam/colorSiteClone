import Nav from "../components/nav";
import heroImg from "../asset/img/coding.png";
import CardWrap from "../ui/CardWrap";
import FunCardWrap from "../ui/FunCardWrap";
import List from "../components/List";
import PriceCardWrap from "../ui/PriceCardWrap";
import ReviewCardWrap from "../ui/ReviewCardWrap";
import FaqWraper from "../ui/FaqWraper";
import FeaturedWraper from "../ui/FeaturedWraper";
import StayTuned from "../components/StayTuned";
import FooterWrap from "../ui/FooterWrap";

const Index = () => {
  return (
    <>
      <Nav />
      <main>
        <div className="container">
          <section id="hero">
            <div className="hero">
              <div className="landin-img">
                <div className="hero-img-div">
                  <img src={heroImg} className="hero-img" alt="hero" />
                </div>
              </div>
              <div className="landing-body">
                <div>
                  <p className="hero-p">
                    Best Way <br /> to Create your
                  </p>
                  <p className="hero-span">
                    <span>website</span> & <span>Resume</span>
                  </p>
                </div>
                <div className="hero-btn-div">
                  <a className="hero-btn primary" href="#create">
                    Get Started
                  </a>
                  <a className="hero-btn secondary" href="#work">
                    How does it work?
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section id="about">
            <div className="about">
              <div className="about-h-div">
                <h3 className="about-h3">
                  Why Newbie
                  <br />
                  Developer?
                  <div className="underline"></div>
                </h3>
              </div>
              <div className="about-card-wrap">
                <CardWrap />
              </div>
            </div>
          </section>
          <section id="function">
            {/* <div className="function-card-wrap"> */}
            <FunCardWrap />
            {/* </div> */}
          </section>
          <section id="work">
            <div className="work">
              <div className="work-heading">
                <h3 className="work-h3">How Does it Work?</h3>
                <p className="work-p">
                  Get your personalized color palette in 4 steps.
                </p>
              </div>
              <div className="work-lists">
                <List
                  no="1"
                  p="Start with two neutral colors for the text and the background."
                />
                <List
                  no="2"
                  p="Choose your primary and secondary colors. Primary is for main CTAs and sections, and Secondary is for less important buttons and info cards."
                />
                <List
                  no="3"
                  p="Accent color is an additional color. It appears in images, highlights, hyperlinks, boxes, cards, etc."
                />
                <List
                  no="4"
                  p="Happy with the results? Press on “Export” and choose among different options to export in various formats, like .zip, .png, CSS, SCSS, QR Code, and more."
                />
              </div>
            </div>
          </section>
          <section id="price">
            <div className="price">
              <h3 className="price-h3">Plans & Pricing</h3>
              <p className="price-p">
                The tool is 100% free! This is just a generic section.
              </p>
              <PriceCardWrap />
            </div>
          </section>
          <section id="testimonials">
            <div className="price">
              <h3 className="price-h3">Testimonials</h3>
              <p className="price-p">What people are saying about us.</p>
            </div>
            <ReviewCardWrap />
          </section>
          <section id="faq">
            <div className="faqs">
              <div className="faq-heading">
                <h3 className="price-h3">FAQ</h3>
                <p className="price-p">
                  Answers to some questions you might have.
                </p>
              </div>
              <div className="faq-list">
                <FaqWraper />
              </div>
            </div>
          </section>
          <section id="testimonials">
            <div className="price">
              <h3 className="price-h3">Featured Articles</h3>
              <p className="price-p">Just some interesting guides and posts.</p>
            </div>
            <FeaturedWraper />
          </section>
          <section id="end">
            <StayTuned />
          </section>
          <section id="footer">
            <div className="footer">
              {/* <div className="footer"> */}
              <FooterWrap />
              <hr />
              <div className="footer-cc">
                <p>
                  Made with ❤ by <span>@Bhargab</span>
                </p>
                <p>
                  Copyright © 2023 All Rights Reserved. <span>Bhargab</span>
                </p>
              </div>
              {/* </div> */}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Index;
