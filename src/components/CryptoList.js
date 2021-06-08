import React, { useContext } from 'react'
import Crypto from './Crypto'
import {CryptoContext} from '../context/CryptoContext';

function CryptoList() {
    const [cryptos,setCryptos] = useContext(CryptoContext);

    return (
        <div className="d-flex flex-wrap me-5">
            {cryptos.map(crypto => (
                <Crypto coinImage={crypto.image} name={crypto.name} />
            ))}
        </div>
    )
}

export default CryptoList
