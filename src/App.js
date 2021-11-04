import './App.css';
import { HashRouter } from 'react-router-dom';
import WrapperTicTacToe from './components/WrapperTicTacToe';

function App() {
  return (
    <HashRouter>
      <WrapperTicTacToe />
    </HashRouter>
  );
}

export default App;
