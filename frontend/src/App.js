import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Users from './User/Pages/Users.js';
import NewPlace from './Places/Pages/NewPlace.js';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} exact />
        <Route path="/places/new" element={<NewPlace />} exact />

        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


