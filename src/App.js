import './App.css';
import { BrowserRouter } from 'react-router-dom';
import WrapperTicTacToe from './components/WrapperTicTacToe';

function App() {
  return (
    <BrowserRouter>
      <WrapperTicTacToe />
    </BrowserRouter>
  );
}

export default App;
