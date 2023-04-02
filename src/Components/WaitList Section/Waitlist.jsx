import Form from "../Form/Form";
import waitlistImg from "./waitlist.png";
import "./Waitlist.css";
const Waitlist = () => {
  return (
    <section className="waitlist-section">
      <img src={waitlistImg} alt="waitlistImg" />
      <div className="waitlist-section__content">
        <p className="waitlist-section__description">
          Become a founding member and enjoy amazing benefits
        </p>
        <p className="waitlist-section__title">Join the Waitlist</p>
        <Form className="" />
      </div>
    </section>
  );
};
export default Waitlist;
