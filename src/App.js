import RegisterPage from "../src/Pages/RegisterPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "../src/Pages/LoginPage";
import PaymentPage from "../src/Pages/PaymentPage";
import MomoPaymentPage from "../src/Pages/MomoPaymentPage";
import BookingPage from "../src/Pages/BookingPage";
import BanUser from "../src/components/BanUser";
function App() {
    return (
        <main className="App">
            <Router>
                <Routes>
                    <Route path="/" exact element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/Payment" element={<PaymentPage />}  />
                    <Route path="/momo_Payment" element={<MomoPaymentPage />}  />
                    <Route path="/booking" element={<BookingPage />}  />
                    <Route path="/banUser" element={<BanUser />}  />
                </Routes>
            </Router>
        </main>
    );
}

export default App;
