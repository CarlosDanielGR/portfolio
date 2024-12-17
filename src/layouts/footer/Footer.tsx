import Social from "@shared/components/social/Social";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contact">
        {/* <span>
          <strong>Phone: </strong>
          +57 3116236803
        </span>
        <span>
          <strong>Email: </strong>
          carlos.d.guzman12@gmail.com
        </span> */}
        <span>© 2023 carlosdanielgr. All Rights Reserved.</span>
      </div>
      <Social />
    </footer>
  );
}
export default Footer;
