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
                        color: '#ffff',
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
                states: {
                    hover: {
                        filter: 'none'
                    }
                },
                theme: {
                    palette: 'palette2'
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
                <div className='flex '>
                    <div className='bg-[#FFFFFF] w-[440px] h-[510px] shadow-2xl p-5 mt-10'>
                        <h3 className='text-[#555555] text-[20px] justify-center text-center font-bold'>Talabalar statitistikasi</h3>
                        <div className='border-02 mb-3 mt-3 border-gray-200'>
                        </div>
                        <div className='flex  mt-8'>
                            <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={420} />

                        </div>
                        <div className='border-02 mb-3 mt-8 border-gray-200'>
                        </div>
                        <div className='flex gap-24 justify-evenly'>
                            <div className='flex '>
                                <div className='w-[25px] rounded-[50%] h-[25px] border border-outline-solid-[4px] border-green-500 '> </div>
                                <p className=' text-[15px] font-bold p-[7px]'>To'laganlar</p>
                            </div>
                            <div className='flex'>
                                <div className='w-[25px] rounded-[50%] h-[25px] border border-outline-solid-[4px] border-red-500 '> </div>
                                <p className=' text-[15px] font-bold p-[7px]'>Qarzdorlar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ApexChart;