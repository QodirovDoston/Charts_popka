import Chart from 'react-apexcharts';

function Donutchart() {
    return (
        <>
            <div className='container-fluid mt-3 mb-3'>
                <h2 className="text-left">Donut Chart</h2>
                <Chart
                    type="donut"
                    width={1349}
                    height={550}
                    // series={medal}
                    options={{
                        labels: ["red","blue"],
                        title: {
                            text: "Medal Country Name",
                            align:"center",
                        },
                        plotOptions: {
                            pie: {
                                donut: {
                                    labels: {
                                        show: true,
                                        total: {
                                            show: true,
                                            showAlways: true,
                                            formatter: () => '343',
                                            fontSize: 30,
                                            color: '#f90000',
                                        }
                                    }
                                }
                            }

                        },
                        dataLabels: {
                            enabled: true,
                        }
                    }} 
                />
            </div>
        </>
    )
}
export default Donutchart;