import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css';
import SidebarComponent from "./components/sidebar/SidebarComponent";
import AboutView from "./views/about/AboutView";
import HomeView from "./views/home/HomeView";
import PortofolioView from "./views/portofolio/PortofolioView";
import ResumeView from "./views/resume/ResumeView";
import AbilityView from "./views/ability/AbilityView";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col sm={1}>
            <SidebarComponent />
          </Col>
          <Col sm={11}>
            <Routes>
              <Route path="/portofolio" element={<HomeView />} />
              <Route path="about" element={<AboutView />} />
              <Route path="porto" element={<PortofolioView />} />
              <Route path="resume" element={<ResumeView />} />
              <Route path="ability" element={<AbilityView />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
