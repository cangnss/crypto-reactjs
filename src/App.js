import './App.css';
import Search from './components/Search';
import CryptoList from './components/CryptoList';
import { CryptoProvider } from './context/CryptoContext';

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
