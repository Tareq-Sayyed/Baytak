// Packages
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// Components & Styling
import Users from "./User/Pages/Users.js";
import NewPlace from "./Places/Pages/NewPlace.js";
import MainNavigation from "./Shared/Components/Navigation/MainNavigation.js";
import UserPlaces from "./Places/Pages/UserPlaces.js";
function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} exact />
          <Route path="/places/new" element={<NewPlace />} exact />
          <Route path="/:uid/places" element={<UserPlaces />} exact />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;