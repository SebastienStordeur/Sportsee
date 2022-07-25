
import Analytics from "./pages/Analytics";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/user/12" replace />}/>
        <Route path="/user/:id" element={<Analytics/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
