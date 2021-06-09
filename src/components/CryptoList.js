import React, { useContext } from 'react'
import Crypto from './Crypto'
import {CryptoContext} from '../context/CryptoContext';

function CryptoList({ search }) {
    const [cryptos,setCryptos] = useContext(CryptoContext);

    const searchingCrypto = cryptos.filter(crypto => crypto.name.toLowerCase().includes(search.toLowerCase()))
    
    return (
        <div className="d-flex flex-wrap justify-content-center mt-5 mx-auto">
            {searchingCrypto.map(crypto => (
                <Crypto key={crypto.id} coinId={crypto.id} coinImage={crypto.image} name={crypto.name} symbol={crypto.symbol} price={crypto.price_change_percentage_24h} lastUpdated={crypto.last_updated} totalVolume={crypto.total_volume} currentPrice={crypto.current_price} high24h={crypto.high_24h} low24h={crypto.low_24h} marketCapChange={crypto.market_cap_change_24h} />
            ))}
        </div>
    )
}

export default CryptoList
