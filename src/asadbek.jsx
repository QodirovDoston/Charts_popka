import ReactApexChart from "react-apexcharts";
import { Component } from 'react'

class ApexChart extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [44, 55],
            options: {
                chart: {
                    width: 480,
                    type: 'donut',
                    dropShadow: {
                        // enabled: true,
                        color: '#111',
                        top: -1,
                        left: 3,
                        blur: 3,
                        opacity: 0.2
                    }
                },
                stroke: {
                    width: 0,
                },
                plotOptions: {
                    pie: {
                        donut: {
                            labels: {
                                show: true,
                                total: {

                                    // showAlways: true,
                                    show: 'Tolaganlar',

                                }
                            }
                        }
                    }
                },
                labels: ["Comedy", "Action"],
                dataLabels: {
                    dropShadow: {
                        blur: 3,
                        opacity: 0.8
                    }
                },
                fill: {
                    type: 'pattern',
                    opacity: 1,
                    pattern: {
                        enabled: true,
                        style: ['verticalLines', 'squares'],
                    },
                },
                states: {
                    hover: {
                        filter: 'none'
                    }
                },
                theme: {
                    palette: 'palette2'
                },
                title: {
                    text: "Favourite Movie Type"
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
        };
    }
    render() {
        return (
            <div id="chart">    
                <div className='bg-[#FFFFFF] w-[540px]  h-[464px] shadow-2xl p-5 mt-10'>
                    <h3 className='text-[#555555] text-[20px] font-bold'>Talabalar statitistikasi</h3>
                    <div className='border-02 mb-3 mt-3 border-gray-200'>
                    </div>
                        <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={380} />
                        <div className='border-1 mb-3 mt-3 border-gray-200'>
                        </div>
                        <p className='text-[#F48221] text-[15px] font-bold'>Barcha ma’lumotlar</p>
                    </div>
                </div>
        );
    }
}

export default ApexChart;