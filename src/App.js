import RegisterPage from "../src/Pages/RegisterPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "../src/Pages/LoginPage";
function App() {
    return (
        <main className="App">
            <Router>
                <Routes>
                    <Route path="/" exact element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </Router>
        </main>
    );
}

export default App;
