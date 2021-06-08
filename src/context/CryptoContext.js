import axios from 'axios';
import React, { useState, useEffect, createContext } from 'react'


export const CryptoContext = createContext();

export const CryptoProvider = (props) => {
    const [cryptos, setCryptos] = useState([]);

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
                .then(response => {
                    setCryptos(response.data)
                })
    }, [])

    return (
        <div>
            <CryptoContext.Provider value={[cryptos, setCryptos]}>
                {props.children}
            </CryptoContext.Provider>
        </div>
    )
}

export default CryptoContext
