import React, { useContext, useState } from 'react'
import Crypto from './Crypto'
import {CryptoContext} from '../context/CryptoContext';

function Search() {

    const [search, setSearch] = useState('');
    const [cryptos,setCryptos] = useContext(CryptoContext);

    const getCryptoName = (e) => {
        setSearch(e.target.value)
    }

    // const searchingCrypto = cryptos.filter(crypto =>
    //     crypto.name.toLowerCase().includes(search.toLowerCase())
    // );
    return (
        <form>
            <div className="col-md-12 w-50 text-center mx-auto mt-5">
                <input class="form-control" type="text" placeholder="Search" value={search} onChange={getCryptoName} />
                
            </div>
        </form>
    )
}

export default Search
