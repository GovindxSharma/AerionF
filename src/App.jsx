import { useEffect } from "react";
import './App.css';
import Homepage from './pages/Homepage';

function App() {
  useEffect(() => {
    // Wake up backend on app load
    const wakeServer = async () => {
      try {
        const backendUrl = import.meta.env.VITE_API_BASE_URL ;
        const res = await fetch(backendUrl); // hit health check
        const text = await res.text(); // backend returns plain text
        console.log("✅ Backend wake-up response:", text);
      } catch (err) {
        console.error("❌ Failed to wake backend:", err);
      }
    };

    wakeServer();
  }, []);

  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
