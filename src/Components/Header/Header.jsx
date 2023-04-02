import heroImg from "./heroImg.png";
import Form from "../Form/Form";
import "./Header.css";
const Header = (props) => {
  return (
    <header>
      <img src={heroImg} alt="hero-image" className="hero-image" />
      <div className="content">
        <p className="heading">
          Frictionless way to list, manage and rent your apartments
        </p>
        <p className="description">
          Be among our founding member and <span>join the waitlist </span>
        </p>
        <Form data={props.data} />
      </div>
    </header>
  );
};
export default Header;
