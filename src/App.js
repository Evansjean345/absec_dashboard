import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import About from "./components/About";
import Faq from "./components/Faq";
import Courses from "./components/Courses";
import Blog from "./components/Blog";
import AllCourses from "./components/AllCourses";
import Contact from "./components/Contact";
import EventRecent from "./components/EventRecent";
import FuturEvent from "./components/FuturEvent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/all_courses" element={<AllCourses />} />
        <Route path="/event_recent" element={<EventRecent />} />
        <Route path="/event_futur" element={<FuturEvent />} />
{/**
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
