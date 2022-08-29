import {
  useEffect,
  useState,
  useReducer,
  createContext,
  useCallback,
} from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./1.Navbar/Navbar";
import ScrollButton from "./8.Scroll-To-Top/ScrollButton";
import Footer from "./9.Footer/Footer";
import reducer from "./reducer";
import axios from "axios";
import ScrollToTop from "./8.Scroll-To-Top/ScrollToTop";
import ApplyForm from "./10.ApplyJob/ApplyForm";
import Home from "./2.HomePage/Home";
import AboutUs from "./3.About/AboutUs";
import Services from "./4.Services/Services";
import Technologies from "./5.Technologies/Technologies";
import Careers from "./6.Careers/Careers";
import ContactUs from "./7.Contact/ContactUs";
import ResouceHome from "./12.Resouce-section/resouceHome";
import LinkPage from "./12.Resouce-section/12.1.link/AllLink";
import PolicyDocuments from "./12.Resouce-section/12.2.PolicyDocuments/PolicyDocuments";
import PeoplePractice from "./12.Resouce-section/12.2.PolicyDocuments/PeoplePractice";
import HolidayCalender from "./12.Resouce-section/12.2.PolicyDocuments/HolidayCalender";
import Formates from "./12.Resouce-section/12.3.Formates/AllFormates";
import LoginPage from "./13.login section/LoginPage";
import CreateResourcePage from "./14.CreateResource/CreateResourcePage";
import Csr from "./Csr";
export const resourceData = createContext();

function App() {
  const location = useLocation();
  const initialState = {
    resource: null,
  };

  const [scrollTop, setScrollTop] = useState(0);
  const [oldPath, setOldPath] = useState(undefined);
  const [state, dispatch] = useReducer(reducer, initialState);

  const getResources = async (type) => {
    try {
      const { data } = await axios.get(`/resource/data/${type}`);
      dispatch({ type: "Resource get success", payload: data });
    } catch (error) {
      dispatch({ type: "Resource get fail" });
    }
  };

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = (windowHeight * 2) / 10;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }

  const removeRevealActive = useCallback(() => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      if (reveals[i].classList.contains("active")) {
        reveals[i].classList.remove("active");
      }
    }
    setOldPath(location.pathname);
  }, [location]);
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    window.addEventListener("scroll", reveal);
    if (location.pathname !== oldPath) {
      setTimeout(() => removeRevealActive(), 601);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", reveal);
    };
  }, [location, removeRevealActive, oldPath]);

  return (
    <>
      <resourceData.Provider value={{ ...state, getResources }}>
        <ToastContainer autoClose={2000} className="toast-container" />
        <Navbar />
        <div
          className={`progress fixed-top  ${scrollTop === 0 ? "d-none" : ""}`}
          style={{ height: "2px" }}
        >
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${scrollTop}%`, background: "#01368a" }}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/applyform" element={<ApplyForm />} />
            <Route path="/resources" element={<ResouceHome />} />
            <Route path="/resources/links" element={<LinkPage />} />
            <Route path="/resources/policy" element={<PolicyDocuments />} />
            <Route path="/csr" element={<Csr />} />

            <Route
              path="/resources/policy/practice"
              element={<PeoplePractice />}
            />
            <Route
              path="/resources/policy/holiday-cal"
              element={<HolidayCalender />}
            />
            <Route path="/resources/formats" element={<Formates />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/resources/create-form/:create"
              element={<CreateResourcePage />}
            />
          </Routes>
        </ScrollToTop>
        <ScrollButton />
        <Footer />
      </resourceData.Provider>
    </>
  );
}

export default App;
