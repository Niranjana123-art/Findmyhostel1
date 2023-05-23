
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Login from './pages/login/login';
import Landing from "./pages/landing/landing";
import SignUp from "./pages/signup/signup";
import TenantDashboard from "./pages/tenantdashboard/tenantd";
import OwnerDashboard from "./pages/ownerd/ownerd";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
    {/* <Navbar/> */}
       <Routes>    
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/tenantd" element={<TenantDashboard />} />
            <Route path="/ownerd" element={<OwnerDashboard />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
