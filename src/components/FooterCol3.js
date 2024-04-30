import uparrow from "../asset/img/up-arrow.svg";
const FooterCol3 = () => {
  return (
    <div>
      <h4 className="footter-h4">Explore</h4>
      <a href="#none" className="footter-a">
        Docs
      </a>
      <a href="#none" className="footter-a">
        Figma Plugin
        <img src={uparrow} alt="Uparrow" />
      </a>
      <a href="#none" className="footter-a">
        VS Code Theme Editor
        <img src={uparrow} alt="Uparrow" />
      </a>
      <a href="#none" className="footter-a">
        Dashboard template
      </a>
      <a href="#none" className="footter-a">
        Color Game
      </a>
    </div>
  );
};

export default FooterCol3;
