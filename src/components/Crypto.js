import React from 'react'

function Crypto({ coinImage, name, symbol, price, lastUpdated }) {
    const cardStyle = {
        borderRadius: '5px',
        backgroundColor: 'white',
        width: '18rem'
    }
    return (
        <div className="card me-2 mb-2" style={cardStyle}>
            <div className="d-flex p-3">
                <img src={coinImage} className="card-img-top img-fluid" alt="..." style={{ width: '30px', height: '30px' }} />
                <h5 className="card-title ms-3">{name}</h5>
                <h5 className="ms-4">{symbol.toUpperCase()}</h5>
            </div>
            <div className="card-body">
                <div className="d-flex">
                    <div>
                        <p className="fs-5 fw-bold">Change percentage 24h</p>
                        {price.toFixed(2) > 0 
                            ?
                            <p className="fs-4" style={{color:'green'}}>{price.toFixed(2)}</p>
                            :
                            <p className="fs-4" style={{color:'red'}}>{price.toFixed(2)}</p>
                        }
                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    <p class="card-text"><small class="text-muted">Last updated {lastUpdated} </small></p>
                </div>
            </div>
            <div className="card-footer">
                <button type="button" className="btn btn-primary">Learn more <strong>{name}</strong></button>
            </div>
        </div>
    )
}

export default Crypto
