

import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto'
Chart.register(CategoryScale);
import { Bar } from 'react-chartjs-2';
   
   export function ShowChart({ chartData }) {
    
    if(chartData){
    const options = {
        responsive: true,
        plugins:{
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'TASK CHART',
            },
        },
    };

    let Intensity1 = chartData?.map((i)=>i.country && i.intensity).filter((i)=>i)

    let Likelihood1 = chartData?.map((i)=>i.country && i.likelihood).filter((i)=>i)

    let Relevance1 = chartData?.map((i)=>i.country && i.relevance).filter((i)=>i)

    const country = chartData?.map((i)=>i.country);
    const  labels = [...new Set(country)]

    const data = {
        labels,
        datasets: [
            {
                label: 'intensity',
                data:Intensity1,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },

            {
                label: 'Likelihood',
                data: Likelihood1,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Relevance',
                data: Relevance1,   
                backgroundColor: 'rgb(0,128,128)',
            }

        ],
    };
   
return (
    <>
  
    <Bar options={options} data={data} />;
    </>
)
}
}