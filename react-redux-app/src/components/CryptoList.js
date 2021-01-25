import React, {useState} from 'react'
import { connect } from 'react-redux'
import { getCrypto } from '../actions';
import BitcoinLoading from '../images/bitcoin-gif-ashley-liu.gif'
import './CryptoList.css'

const CryptoList = ({isFetching, error, getCrypto, cryptos}) => {

    const [keyword, setKeyword] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    getCrypto();
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

//   const handleSubmit = (e) => {
//     setKeyword(e.target.value)
//   }

    return (
        <div>
            <section className = 'formSection'>
            <div className = 'formDiv'>
             <form  className = 'form'>
                 <input
                    type = 'text'
                    onChange = {handleChange}
                    placeholder = 'Crypto...'
                 >
                 </input>
             </form>
             <button onClick = {handleClick}>Search</button>
             </div> {/* Closes .formDiv */}
             </section> {/* closes .formSection */}

            <div className = 'loadingImgDiv'>
                {isFetching ? <img className = 'loadingImg' src = {BitcoinLoading} alt = ''/> : <div></div>}
                {error ? <h2>Oh no we have a 404 error</h2> : <div></div>}
             </div>

            <section className = 'cardSection'>
                {cryptos ? cryptos.map((crypto) => (
                    crypto.name.indexOf(keyword) === -1 ? '' :  
                    <div className = 'cardDiv' key = {crypto.id}>
                            <img className = 'cardImg' src = {crypto.image} alt = ''/>
                        <div className = 'cardInfoDiv'>
                            <h2>{crypto.name}</h2>
                            <h3>{crypto.symbol}</h3>
                            <h4>1 {crypto.name} equals ${crypto.current_price}</h4>
                        </div>
                    </div>
                )) : ''}
            </section>
            </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
    cryptos: state.cryptos,
    isFetching: state.isFetching,
    error: state.error,
}
}

export default connect(mapStateToProps, {getCrypto})(CryptoList)
