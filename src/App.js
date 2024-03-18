import './App.css';
import Form from './components/Form.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
