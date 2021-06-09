import './App.css';
import React, { useState, useContext } from 'react';
import CryptoList from './components/CryptoList';
import { CryptoProvider } from './context/CryptoContext';

function App() {
  const [search, setSearch] = useState('');

  const getCryptoName = (e) => {
    setSearch(e.target.value)
  }



  return (
    <CryptoProvider>
      <div className="App">
        <div className="container">
          <div className="row">
            <form>
              <div className="col-md-12 w-50 text-center mx-auto mt-5">
                <input class="form-control" type="text" placeholder="Search" value={search} onChange={getCryptoName} />
              </div>
            </form>
          </div>
          <div className="row d-flex flex-row">
            
            <CryptoList search={search} />
          </div>
        </div>
      </div>
    </CryptoProvider>
  );
}

export default App;
