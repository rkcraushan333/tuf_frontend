import './App.css';
import Form from './components/Form.js';
import SubmissionTable from './components/SubmissionTable.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Form />} />
        <Route exact path='/table' element={<SubmissionTable />} />
      </Routes>
    </Router>
  );
}

export default App;
