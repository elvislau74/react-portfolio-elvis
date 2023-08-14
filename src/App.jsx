import { useState} from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import TopSection from './components/TopSection';
import BottomSection from './components/BottomSection';
import NavTabs from './components/Nav'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavTabs />
      <TopSection />
      <Outlet />
      <BottomSection />
      <Footer />
    </>
  );
}

export default App
