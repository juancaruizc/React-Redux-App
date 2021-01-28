import React from 'react'
import CryptoList from './components/CryptoList'
import BitcoinLogo from './images/Bitcoin-Logo.png'
import './App.css'

function App() {

  return (
    <div className="App">
      <div className = 'header'>
      <h1>Crypto Finder</h1>
      <img className = 'headerImg' src = {BitcoinLogo} alt = ''/>
      </div>
      <CryptoList />
      <div className = 'builtDiv'>
      <p>Built By: Juan Ruiz</p>
      </div>
    </div>
  );
}

export default App;
 