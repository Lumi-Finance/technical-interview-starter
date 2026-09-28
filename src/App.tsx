import './App.css'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('hello world')
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <img src="/src/assets/lumi-icon.svg" alt="Lumi Logo" className="w-32 mb-8" />
      <h1 className="text-[#002B5C] font-bold text-4xl m-0">Welcome</h1>
    </div>
  )
}

export default App
