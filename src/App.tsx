import { useState, useEffect } from 'react'
import CountdownTimer from './components/CountdownTimer'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading to ensure everything is rendered
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`app ${loading ? 'loading' : 'loaded'}`}>
      <div className="stars"></div>
      <div className="twinkling"></div>
      
      <div className="content">
        <header>
          <h1>The End of Kali Yuga</h1>
          <p className="subtitle">The final age in Hindu cosmology</p>
        </header>
        
        <CountdownTimer />
        
        <footer>
          <p>According to Hindu cosmology, we are currently in the Kali Yuga, the last of four ages (Yugas) in a cycle.</p>
          <p>© {new Date().getFullYear()} | Kali Yuga Countdown</p>
        </footer>
      </div>
    </main>
  )
}

export default App
