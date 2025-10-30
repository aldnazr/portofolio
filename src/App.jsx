import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Sidebar } from "./components/sidebar/SidebarComponent";
import AboutView from "./views/about/AboutView";
import ResumeView from "./views/experience/ResumeView";
import HomeView from "./views/home/HomeView";
import PortofolioView from "./views/project/portofolio-view";
import SkillView from "./views/skill/SkillView";

function App() {
  return (
    <BrowserRouter
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <div className="flex max-h-screen">
        {/* Sidebar (1/12) */}
        <div className="sidebar">
          <Sidebar />
        </div>

        {/* Content (11/12) */}
        <div className="content">
          <Routes>
            <Route path="/portofolio" element={<HomeView />} />
            <Route path="about" element={<AboutView />} />
            <Route path="porto" element={<PortofolioView />} />
            <Route path="resume" element={<ResumeView />} />
            <Route path="ability" element={<SkillView />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
