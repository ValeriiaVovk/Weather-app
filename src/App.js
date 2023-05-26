import './styles/styles.css';
import CurrentWeather from './components/CurrentWeather';
import { Routes, Route, Link } from "react-router-dom";
import AboutApp from "./components/about-app";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<CurrentWeather />} />
        <Route path="/about" element={<AboutApp />} />
      </Routes>
      {/* <CurrentWeather /> */}
    </div>
  );
}

export default App;
