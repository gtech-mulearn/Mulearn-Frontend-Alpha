import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Layout from "./components/layout";
import GetInvolved from "./pages/getInvolved";
import Careers from "./pages/careers";
import Projects from "./pages/projects";
import Community from "./pages/community";
import Launchpad from "./pages/launchpad";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      {/* <Toaster position="bottom-center" reverseOrder={false} /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="get-involved" element={<GetInvolved />} />
          <Route path="careers" element={<Careers />} />
          <Route path="projects" element={<Projects />} />
          <Route path="community" element={<Community />} />
        </Route>
        <Route path="launchpad" element={<Launchpad />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
