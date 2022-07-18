
import Analytics from "./pages/Analytics";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:id" element={<Analytics/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
