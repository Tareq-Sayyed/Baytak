import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Users from "./User/Pages/Users.js";
import NewPlace from "./Places/Pages/NewPlace.js";
import MainNavigation from "./Shared/Components/Navigation/MainNavigation.js";
function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} exact />
          <Route path="/places/new" element={<NewPlace />} exact />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
