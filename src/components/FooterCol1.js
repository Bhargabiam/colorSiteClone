import cup from "../asset/img/cup-border.webp";
import logo from "../asset/img/logo.png";

const FooterCol1 = () => {
  return (
    <div>
      <div className="footer-logo">
        <img src={logo} alt="Logo" className="footer-logo-img" />
        <a href="#brand" className="footer-a">
          Brand Name
        </a>
      </div>
      <p className="footer-p">Visualize your color choices.</p>
      <a href="#support" className="support-btn">
        <img src={cup} alt="Support" className="support-btn-img" />
        <p>Support Me on Ko-fi</p>
      </a>
    </div>
  );
};

export default FooterCol1;
