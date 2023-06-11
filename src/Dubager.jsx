/* eslint-disable react/no-unescaped-entities */
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['green',
        'red'],
    datasets: [
        {
            label: "10 899 000 so'm of Votes",
            lable1: "17 899 000 so'm of Votes",
            data: [63, 37],
            backgroundColor: [
                '#009F8F',
                '#FF6666'
            ],
            borderColor: [
                '#009F8F',
                '#FF6666'
            ],
            borderWidth: 2,
        },
    ],
};

export function Dubager() {
    return (
        <>
            <div className='flex w-[800px] justify-around'>
                <div className='bg-[#FFFFFF] w-[350px]   h-[490px] shadow-2xl p-5 mt-10'>
                    <h3 className='text-[#555555] text-[20px] font-bold'>Talabalar statitistikasi</h3>
                    <div className='border-02 mb-3 mt-3 border-gray-200'>
                    </div>
                    <div className='flex w-300px'>
                        <Doughnut data={data} />
                    </div>
                    <div className='border-02 mb-3 mt-8 border-gray-200'>
                    </div>
                    <div className='flex gap-12 justify-center'>
                        <div className='flex'>
                            <div className='w-[25px] rounde d-[50%] h-[25px] border border-outline-solid-[4px] border-green-500 '> </div>
                            <p className=' text-[15px] font-bold p-[7px]'>To'laganlar</p>
                        </div>
                        <div className='flex'>
                            <div className='w-[25px] rounded-[50%] h-[25px] border border-outline-solid-[4px] border-red-500 '> </div>
                            <p className=' text-[15px] font-bold p-[7px]'>Qarzdorlar</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#FFFFFF] w-[350px]  h-[490px] shadow-2xl p-5 mt-10'>
                    <h3 className='text-[#555555] text-[20px] font-bold'>Talabalar statitistikasi</h3>
                    <div className='border-02 mb-3 mt-3 border-gray-200'>
                    </div>
                    <div className='flex w-300px'>
                        <Doughnut data={data} />
                    </div>
                    <div className='border-02 mb-3 mt-8 border-gray-200'>
                    </div>
                    <div className='flex gap-12 justify-center'>
                        <div className='flex'>
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

        </>
    )
}