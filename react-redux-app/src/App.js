import React from 'react'
import CryptoList from './components/CryptoList'
import BitcoinLogo from './images/Bitcoin-Logo.png'

function App() {

  return (
    <div className="App">
      <h1>What Cryptocurrency Do You Want To See Today?</h1>
      <img width = '85'src = {BitcoinLogo} alt = ''/>
      <CryptoList />
    </div>
  );
}

export default App;
 