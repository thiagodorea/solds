import axios from 'axios';
import Loading from 'components/Loading';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () => {
    const [done, setDone] = useState(false);

    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });
    useEffect(() => {
        axios.get(`${BASE_URL}/vendas/soma-por-vendedor`).then((response) => {
            const data = response.data as SaleSum[];
            setDone(true);
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum);

            setChartData({
                labels: myLabels,
                series: mySeries
            });
        });
    }, []);



    // const mockData = {
    //     labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé'],
    //     series: [477138, 499928, 444867, 220426, 473088]
    // }

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <>
            {!done ? (<Loading />) : (
                <>
                    <Chart
                        options={{ ...options, labels: chartData.labels }}
                        series={chartData.series}
                        type="donut"
                        height="240"
                    />
                </>
            )}
        </>
    );
}

export default DonutChart;