import { Outlet } from 'react-router-dom';
import './App.css'
import TopSection from './components/TopSection';
import BottomSection from './components/BottomSection';
import NavTabs from './components/Nav'
import Footer from './components/Footer'

// returns the created page components
function App() {
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
