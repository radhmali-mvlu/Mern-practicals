import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Jobs from "./pages/Jobs";
import Statistics from "./pages/Statistics";
function App() {
  return(
    <BrowserRouter>
      <h1>M . V. L. U. Student Placement Portal</h1>
      <nav>
        <Link to="/">Dashboard</Link>
        {" | "}
        <Link to="/profile">Profile</Link>
        {" | "}
        <Link to="/jobs">Jobs</Link>
        {" | "}
        <Link to="/statistics">Statistics</Link>
      </nav>
      <hr/>
      <Routes>
        <Route path="/"element={<Dashboard/>} />
        <Route path="/profile"element={<Profile/>} />
        <Route path="/jobs"element={<Jobs/>} />
        <Route path="/statistics"element={<Statistics/>} />
      </Routes>
    </BrowserRouter>

  );
}
export default App;
