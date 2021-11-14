import React from 'react';
import {Bar} from "react-chartjs-2";
import styled from 'styled-components';

const BarTemplate = styled.div`
  box-sizing: border-box;
  width: 18vw;
  height: 10vw;
  margin: 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const BarChart = ({agree, disagree}) => {
    const options = {
        responsive: false,
        legend: {
            display: false,
            position: "right"
        },
        elements : {
            bar : {
                borderWidth : 0,
                borderRadius : 100
            }
        },
        scales: {
            x: {
                grid: {
                    offset: false
                }
            },
            y: {
                grid: {
                    offset: false
                }
            },

        },

        plugins : {
            dataLabels : {
                display: false
            }
        },

        indexAxis: 'y',
    };

    const data = {
        labels: ["찬성", "반대"],
        datasets: [
            {
                label : '찬성',
                data: [agree, disagree],
                barThickness : 30,
                categoryPercentage : 1.0,
                backgroundColor: [
                    "#A5D8FFB3",
                    "#FFC9C9B3",
                ],
                fill: true
            },
        ]
    }


    return (
        <BarTemplate>
            <Bar data={data} options={options} />
        </BarTemplate>
    );
};

export default BarChart;
