import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "./components/layouts/Layouts";
import ContactUs from "./pages/ContactUs";
import DashboardLayout from "./components/layouts/DashboardLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Main Layout */}
          <Route path="/" element={<Layouts />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contact-us" element={<ContactUs />} />
          </Route>

          <Route path="/login" element={"This is our Login Page"} />

          {/* Dashboard Layout */}
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route path="overview" element={"this is OverView Page"} />
            <Route path="accounts" element={"this is Account Page"} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
