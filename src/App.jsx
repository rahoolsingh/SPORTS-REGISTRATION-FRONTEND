import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound"; // Create this component to handle 404 errors
import AthleteForm from "./components/AtheleteForm";
import CoachForm from "./components/CoachForm";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<AthleteForm />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<AthleteForm />} />
                <Route path="/register-coach" element={<CoachForm />} />
                <Route path="*" element={<NotFound />} />{" "}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
