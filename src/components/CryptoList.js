import React, { useContext } from 'react'
import Crypto from './Crypto'
import {CryptoContext} from '../context/CryptoContext';

function CryptoList() {
    const [cryptos,setCryptos] = useContext(CryptoContext);
    
    return (
        <div className="d-flex flex-wrap justify-content-center mt-5 mx-auto">
            {cryptos.map(crypto => (
                <Crypto key={crypto.id} coinImage={crypto.image} name={crypto.name} symbol={crypto.symbol} price={crypto.price_change_percentage_24h} lastUpdated={crypto.last_updated} />
            ))}
        </div>
    )
}

export default CryptoList
