import RegisterPage from "../src/Pages/RegisterPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "../src/Pages/LoginPage";
import PaymentPage from "../src/Pages/PaymentPage"

function App() {
    return (
        <main className="App">
            <Router>
                <Routes>
                    <Route path="/" exact element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/Payment" element={<PaymentPage />}  />
                </Routes>
            </Router>
        </main>
    );
}

export default App;
