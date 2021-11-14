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
                label: ["찬성"],
                data: [agree],
                borderWidth: 2,
                hoverBorderWidth: 2,
                backgroundColor: [
                    "#A5D8FFB3",
                ],
                fill: true
            },
            {
                label: ["반대"],
                data: [disagree],
                borderWidth: 2,
                hoverBorderWidth: 2,
                backgroundColor: [
                    "#FFC9C9B3",
                ],
                fill: true
            }
        ]
    }


    return (
        <BarTemplate>
            <Bar type={"bar"} data={data} options={options}/>
        </BarTemplate>
    );
};

export default BarChart;
