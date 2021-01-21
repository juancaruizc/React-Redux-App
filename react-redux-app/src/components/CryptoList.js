import React, {useState} from 'react'
import { connect } from 'react-redux'
import { getCrypto } from '../actions';


const CryptoList = ({isFetching, error, getCrypto, cryptos}) => {

    const [keyword, setKeyword] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    getCrypto();
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

    return (
        <div>
             {isFetching ? <h2>Working on getting your Cryptos :)</h2> : <div></div>}
             {error ? <h2>Oh no we have a 404 error</h2> : <div></div>}
             <form>
                 <input
                    type = 'text'
                    onChange = {handleChange}
                 >
                 </input>
             </form>
             <button onClick = {handleClick}>Search</button>
            { 
                cryptos ? cryptos.map((crypto) => (
                    crypto.name.indexOf(keyword) === -1 ? '' :  
                    <div key = {crypto.id}>
                        <img width = '100'src = {crypto.image} alt = ''/>
                        <h1>{crypto.name}</h1>
                        <h2>{crypto.symbol}</h2>
                        <h3>1 {crypto.name} equals ${crypto.current_price}</h3>
                    </div>
                )) : ''
            }

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
