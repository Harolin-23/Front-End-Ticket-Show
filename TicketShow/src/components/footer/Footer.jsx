import "./footer.css";
import { text } from "../header/Header";

export function FooterApp() {
  return (
    <footer className="foot">
      <div className="logo-fot">
        <a href="/" className="logo">
          {text.Text}
          <b className="RS-Logo">{text.bold}</b>
          {text.textlag}
        </a>
        <div className="met-links-fot">
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
      </div>
      <div className="more-info-fot">
        <a href="">
          <h6>More Info</h6>
        </a>
        <a href="">Enterprise</a>
        <a href="">Navegator</a>
      </div>
      <div className="more-info-fot">
        <a href="">
          <h6>Details</h6>
        </a>
        <a href="">Enterprise</a>
        <a href="">Navegator</a>
      </div>
      <div className="more-info-fot">
        <a href="">
          <h6>Shopping</h6>
        </a>
        <a href="">Stores</a>
      </div>
    </footer>
  );
}
