import { useState } from "react";
import Navbar from "./Components/Navbar/Nav";
import Header from "./Components/Header/Header";
import Features from "./Components/Features/Features";
import Waitlist from "./Components/WaitList Section/Waitlist";
import SuccessModal from "./Components/SuccessModal/SuccessModal";
import Footer from "./Components/Footer/Footer";

import "./App.css";
function App() {
  const [isSuccess, setIsSuccess] = useState(false);

  // const [waitlist, setWaitList] = useState([]);
  // const getWaitlistData = (data) => {
  //   setWaitList((prev) => {
  //     console.log(data);
  //     return [data, ...prev];
  //   });
  // };

  async function postWaitList(data) {
    setIsSuccess(true);
    console.log(data);
    try {
      const res = await fetch(
        "https://whippy.onrender.com/api/save-wait-list",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        console.log("there is error");
        throw new Error("something is wrong");
      }
      const postedData = await res.json();
      console.log(postedData);
      setIsSuccess(true);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="app">
      {isSuccess && <SuccessModal />}
      <Navbar />
      <Header data={postWaitList} />
      <Features />
      <Waitlist />
      <Footer />
    </div>
  );
}

export default App;
