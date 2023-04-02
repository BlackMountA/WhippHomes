import { useState } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar/Nav";
import Header from "./Components/Header/Header";
import Features from "./Components/Features/Features";
import Waitlist from "./Components/WaitList Section/Waitlist";
import SuccessModal from "./Components/SuccessModal/SuccessModal";
import Footer from "./Components/Footer/Footer";

import "./App.css";
function App() {
  const [isSuccess, setIsSuccess] = useState(true);

  async function postWaitList(data) {
    try {
      const res = await axios.post(
        "https://whippy.onrender.com/api/save-wait-list",
        data
      );
      console.log(res);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 10000);
    } catch (err) {
      console.log(err);
    }
  }
  const closeModal = () => {
    setIsSuccess(false);
  };
  return (
    <div className="app">
      {isSuccess && <SuccessModal onCloseModal={closeModal} />}
      <Navbar />
      <Header data={postWaitList} />
      <Features />
      <Waitlist />
      <Footer />
    </div>
  );
}

export default App;
