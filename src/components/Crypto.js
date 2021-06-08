import React from 'react'

function Crypto({ coinImage, name }) {
    return (
        <div>
            <img src={coinImage} className="img-fluid" width="50" height="50" />
            <span>{name}</span>
        </div>
    )
}

export default Crypto
