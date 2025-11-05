import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SubmitPage } from './pages/SubmitPage';
import ConfirmationPage from './pages/ConfirmationPage';

function App() {
  return (
    <BrowserRouter>
      {/* Header and Footer are outside <Routes> so they appear on every page */}
      <Header />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/submit" element={<SubmitPage />} />
          <Route path="/success" element={<ConfirmationPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;