import { useState} from 'react'
import { Outlet } from 'react-router-dom';
// import './App.css'
import NavTabs from './components/Nav.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavTabs />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App
