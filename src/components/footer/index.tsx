import { LogoWhite } from "../../assets/svg";
import styles from "./index.module.css";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "./svg";
const Footer = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Footer}>
        <div className={styles.Main}>
          <LogoWhite />
          <p>
            Soaring past the confines of traditional learning, to above and
            beyond.
          </p>
          <div>
            <button>
              <Facebook />
            </button>
            <button>
              <Twitter />
            </button>
            <button>
              <Instagram />
            </button>
            <button>
              <Linkedin />
            </button>
            <button>
              <Youtube />
            </button>
          </div>
        </div>
        <div className={styles.Content}>
          <div>
            <h3>Product</h3>
            <div>
              <a href="">Features</a>
              <a href="">Pricing</a>
              <a href="">Case studies</a>
              <a href="">Reviews</a>
              <a href="">Updates</a>
            </div>
          </div>
          <div>
            <h3>Company</h3>
            <div>
              <a href="">About</a>
              <a href="">Contact us</a>
              <a href="">Careers</a>
              <a href="">Culture</a>
              <a href="">Blog</a>
            </div>
          </div>
          <div>
            {" "}
            <h3>Support</h3>
            <div>
              <a href="">Getting started</a>
              <a href="">Help center</a>
              <a href="">Server status</a>
              <a href="">Report a bug</a>
              <a href="">Chat support</a>
            </div>
          </div>
          <div>
            {" "}
            <h3>Downloads</h3>
            <div>
              <a href="">iOS</a>
              <a href="">Android</a>
              <a href="">Mac</a>
              <a href="">Windows</a>
              <a href="">Chrome</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Copyright}>
        <p>Copyright © 2024 µLearn Foundation All Rights Reserved</p>
        <div>
          <button>Terms and Conditions </button>
          {" | "}
          <button>Privacy Policy</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
