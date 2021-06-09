import './App.css';
import CryptoList from './components/CryptoList';
import { CryptoProvider } from './context/CryptoContext';
import Search from './components/Search';

function App() {

  return (
    <CryptoProvider>
      <div className="App">
        <div className="container">
          <div className="row">
            <Search />
          </div>
          <div className="row d-flex flex-row">
            <CryptoList />
          </div>
        </div>
      </div>
    </CryptoProvider>
  );
}

export default App;
