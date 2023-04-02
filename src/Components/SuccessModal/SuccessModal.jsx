import "./SuccessModal.css";
import circledTick from "./Vector.svg";
const SuccessModal = (props) => {
  const closeModal = () => {
    props.onCloseModal();
  };
  return (
    <div className="success-modal">
      <div className="cancel-btn" onClick={closeModal}>
        &times;
      </div>

      <main>
        <img src={circledTick} alt="circledTick" />
        <h1>You Joined The WaitList</h1>
        <p>
          We will send you updates and newsletter on available apartments for
          your viewing
        </p>
      </main>
      <p className="contact-navigation__link">Contact us</p>
    </div>
  );
};

export default SuccessModal;
