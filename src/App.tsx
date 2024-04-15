import { Routes, Route } from "react-router-dom";
import "./App.css";
import FooterNavbar from "./components/FooterNavbar";
import { Feed } from "./pages/Feed";
import { Team } from "./pages/Team";
import { Quests } from "./pages/Quests";
import { Profile } from "./pages/Profile";
import { useEffect } from "react";

function App() {
  // const navigate = useNavigate();

  useEffect(() => {
    // window.scrollTo(0, 0);
    // navigate("/feed");
  }, []);

  return (
    <div className="w-screen h-screen">
      <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/team" element={<Team />} />
        <Route path="/quest" element={<Quests />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <FooterNavbar />
    </div>
  );
}

export default App;
