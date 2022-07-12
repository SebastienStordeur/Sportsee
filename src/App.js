import { useEffect } from "react";
import Analytics from "./pages/Analytics";
import { getUserInfos } from "./services/APICall";


function App() {
  
  useEffect(() => {
    getUserInfos()
  }, [])
  return (
    <div className="App">
      <Analytics />
    </div>
  );
}

export default App;
