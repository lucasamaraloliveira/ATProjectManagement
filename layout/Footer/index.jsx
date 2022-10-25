import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a target="blank" href="https://www.facebook.com/alriontech">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a target="blank" href="https://www.instagram.com/alriontech/">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            target="blank"
            href="https://www.linkedin.com/company/alrion-tech-inovações-em-tecnologia/about/?viewAsMember=true"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Alrion Tech</span>&copy;2022
      </p>
    </footer>
  );
};

export default Footer;
