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

    };

    const data = {
        labels: ["찬성", "반대"],
        datasets: [
            {
                data: [agree, disagree],
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
