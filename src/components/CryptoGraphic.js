import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';


function CryptoGraphic({ coinId }) {

    const [firstX, setFirstX] = useState([]);
    const [secondY, setSecondY] = useState([]);

    useEffect(async () => {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=30&interval=daily`)
        const data = response.data;
        setFirstX(data.prices.map((e)=>{
            return new Date(e[0]).toDateString();
        }));
        setSecondY(data.prices.map((e)=>{
            return e[1];
        }));
        console.log(data);
    }, [coinId])

    const data = {
        labels:firstX,
        datasets: [
          {
            label: `Graph of ${coinId.toUpperCase()}`,
            data: secondY,
            fill: false,
            backgroundColor: '#E5ECF4',
            borderColor: '#92bcea',
          },
        ],
      };
      
    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    )
}

export default CryptoGraphic
