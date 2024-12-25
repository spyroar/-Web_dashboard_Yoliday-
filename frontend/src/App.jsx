import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Portfolio from './pages/Portfolio';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/inputs" element={<div>Inputs</div>} />
          <Route path="/profile" element={<div>Profile</div>} />
          <Route path="/saved" element={<div>Saved</div>} />
          <Route path="/shared" element={<div>Shared</div>} />
          <Route path="/achievement" element={<div>Achievement</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;