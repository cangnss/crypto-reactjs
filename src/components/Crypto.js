import React, { useState } from 'react'
import axios from 'axios'
import { Modal, Button } from 'react-bootstrap'
// import {
//     XYPlot,
//     XAxis,
//     YAxis,
//     HorizontalGridLines,
//     VerticalGridLines,
//     LineSeries
// } from 'index';


function Crypto({ coinId, coinImage, name, symbol, price, lastUpdated, totalVolume, currentPrice, high24h, low24h, marketCapChange }) {

    const [graph, setGraph] = useState([]);
    const getGraph = () => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart/range?vs_currency=usd&from=1392577232&to=1422577232`)
            .then(response => {
                setGraph(response.data)
            })
            .catch(err => {
                console.log(err);
            })
    }
    const executeFunctions = () => {
        getGraph();
        handleShow();
    };

    // const getRandomData = () => {
    //     const randomYData = [...new Array(100)].map(() =>
    //         Math.round(Math.random() * 40)
    //     );
    //     return randomYData.map((val, idx) => {
    //         return { x: idx, y: val };
    //     });
    // }

    // const firstData = this.getRandomData(graph.prices);
    // const secondData = this.getRandomData();


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cardStyle = {
        borderRadius: '15px',
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
                            <p className="fs-4" style={{ color: 'green' }}>{price.toFixed(2)}</p>
                            :
                            <p className="fs-4" style={{ color: 'red' }}>{price.toFixed(2)}</p>
                        }
                    </div>
                </div>
                <p class="card-text"><small class="text-muted">Last updated {lastUpdated} </small></p>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <img src={coinImage} className="img-fluid" alt="..." style={{ width: '30px', height: '30px' }} />
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-wrap">
                        <div className="mb-2 me-4">
                            <span className="fw-bold">Total Volume</span>
                            <p>{totalVolume}</p>
                        </div>
                        <div className="mb-2 me-4">
                            <span className="fw-bold">Current Price</span>
                            <p>{currentPrice}</p>
                        </div>
                        <div className="mb-2 me-4">
                            <span className="fw-bold">High 24hour</span>
                            <p>{high24h}</p>
                        </div>
                        <div className="mb-2 me-4">
                            <span className="fw-bold">Low 24hour</span>
                            <p>{low24h}</p>
                        </div>
                        <div className="mb-2 me-4">
                            <span className="fw-bold">Market Cap Change</span>
                            <p>{marketCapChange}</p>
                        </div>
                    </div>
                    {/* <div style={{ display: 'flex' }}>
                        <XYPlot width={300} height={300}>
                            <HorizontalGridLines />
                            <VerticalGridLines />
                            <XAxis title="X Axis" />
                            <YAxis title="Y Axis" />
                            <LineSeries className="first-series" data={firstData} />
                            <LineSeries className="second-series" data={secondData} />
                        </XYPlot>
                        <XYPlot yPadding={60} width={300} height={300}>
                            <HorizontalGridLines />
                            <VerticalGridLines />
                            <XAxis title="X Axis" />
                            <YAxis title="Y Axis" />
                            <LineSeries className="first-series" data={firstData} />
                            <LineSeries className="second-series" data={secondData} />
                        </XYPlot>
                    </div> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="card-footer">
                <Button variant="primary" onClick={executeFunctions}>Learn more <strong>{name}</strong></Button>
            </div>
        </div>
    )
}

export default Crypto
