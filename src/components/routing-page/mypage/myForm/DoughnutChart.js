import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import styled from 'styled-components';

const ChartTemplate = styled.div`
  box-sizing: border-box;
  width: 12vw;
  margin: 1vw;

`;

const DoughnutChart = ({voteRate}) => {
    const vote = voteRate;
    const notVote = 100 - voteRate

    const option = {
        legend: {
            display: false,
            position: "right"
        },

    };

    const data = {
        labels: ["미참여", "참여"],
        datasets: [
            {
                labels: ["미참여", "참여"],
                data: [notVote, vote],
                borderWidth: 1,
                hoverBorderWidth: 5,
                backgroundColor: [
                    "#F2F1F1",
                    "#FFE9D0",
                ],
                fill: true
            }
        ]
    };

    const plugins = [{
        beforeDraw: function (chart) {
            let width = chart.width;
            let height = chart.height;
            let ctx = chart.ctx;
            ctx.restore();
            let fontSize = (height / 200).toFixed(2);
            ctx.font = fontSize + "em LotteMartDream";
            ctx.textBaseline = "middle";
            ctx.fontColor = "#123456";
            let text = `투표 참여율\n ${voteRate}`,
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;
            ctx.fillText(text, textX, textY);
            ctx.save();
        },
    }]

    return (
        <ChartTemplate>
            <Doughnut type={'doughnut'} data={data} options={option} plugins={plugins}/>
        </ChartTemplate>
    );
};

export default DoughnutChart;
