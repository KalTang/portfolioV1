import "./App.css";
import About from "./components/About";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Projects from "./components/Projects";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Route path="/" exact>
                    <Landing />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Router>
        </div>
    );
}

export default App;
