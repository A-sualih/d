import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import User from "./user/pages/User";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";

function App() {
  return (
    <Router>
      <MainNavigation/>
      <main>
      <Routes>
       
        <Route path="/ahmed" element={<User />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/:userId/places" element={<NewPlace />} />

        {/* catch-all route */}
        <Route path="*" element={<Navigate to="/ahmed" replace />} />
      </Routes>
      </main>
    </Router>
  );
}

export default App;
