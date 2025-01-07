import './App.css';
import {Routes, Route} from "react-router-dom"
import { CandidatePerformance } from './components/CandidatePerformance';
import { Score } from './components/Score';
import { Question } from './components/Question';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CandidatePerformance/>}/>
        <Route path="/questions" element={<Question/>}/>
        <Route path="/scores" element={ <Score/>}/>
      </Routes>
    </div>
  );
}

export default App;
