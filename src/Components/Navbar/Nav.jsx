import companyLogo from "./company-logo.svg";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <img src={companyLogo} alt="company-logo" />
      </div>
    </nav>
  );
};
export default Navbar;
