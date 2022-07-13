
import Analytics from "./pages/Analytics";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/user/:id" element={<Analytics/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
