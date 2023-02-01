import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './pages/Shared/Header/Header';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home/Home';
import ScheduleACall from './pages/ScheduleACall/ScheduleACall';
import TopScroll from './pages/Shared/TopScroll/TopScroll';
import Footer from './pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/schedule-a-call" element={<ScheduleACall />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer/>
            <TopScroll/>
        </Router>
    </div>
  );
}

export default App;