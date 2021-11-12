import React from 'react';
import {Bar} from "react-chartjs-2";
import styled from 'styled-components';

const BarTemplate = styled.div`
  box-sizing: border-box;
  width: 15vw;
  margin: 1vw;
`;


const BarChart = ({agree, disagree}) => {
    const options = {
        legend: {
            display: false,
            position: "right"
        },
        indexAxis: 'y',
        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: true,
                        drawBorder: false,
                        borderDash: [3, 3],
                        zeroLineColor: "blue"
                    },
                    categoryPercentage: 0.7,
                    barPercentage: 0.9,
                    ticks: {
                        beginAtZero: true
                    }
                }
            ],
            yAxes: [
                {
                    display: false,
                    gridLines: {
                        display: false,
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    };

    const data = {
        labels: ["찬성", "반대"],
        datasets: [
            {
                data: [60, 40],
                borderWidth: 2,
                hoverBorderWidth: 2,
                backgroundColor: [
                    "#A5D8FFB3",
                    "#FFC9C9B3",
                ],
                fill: true
            }
        ]
    }

    const plugins = {
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false
                }
            }]
        }
    }

    return (
        <BarTemplate>
            <Bar type={"bar"} data={data} options={options}/>
        </BarTemplate>
    );
};

export default BarChart;
