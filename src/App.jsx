import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/AdminLogin/Login";
import Dashboard from "./components/AdminDashboard/Dashboard";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


