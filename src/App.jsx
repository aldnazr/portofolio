import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarComponent from "./components/sidebar/SidebarComponent";
import AboutView from "./views/about/AboutView";
import HomeView from "./views/home/HomeView";
import PortofolioView from "./views/project/PortofolioView";
import ResumeView from "./views/experience/ResumeView";
import AbilityView from "./views/skill/AbilityView";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="flex max-h-screen">
        {/* Sidebar (1/12) */}
        <div className="sidebar">
          <SidebarComponent />
        </div>

        {/* Content (11/12) */}
        <div className="content">
          <Routes>
            <Route path="/portofolio" element={<HomeView />} />
            <Route path="about" element={<AboutView />} />
            <Route path="porto" element={<PortofolioView />} />
            <Route path="resume" element={<ResumeView />} />
            <Route path="ability" element={<AbilityView />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
