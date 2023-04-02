import "./SuccessModal.css";
const SuccessModal = () => {
  return (
    <div className="success-modal">
      <div className="cancel-btn">&times;</div>

      <main className="success-modal__main">
        <img></img>
        <h1>You Joined The WaitList</h1>
        <p>
          We will send you updates and newsletter on available apartments for
          your viewing
        </p>
      </main>
      <p>Contact us</p>
    </div>
  );
};

export default SuccessModal;
