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
            <div className='bg-[#FFFFFF] w-[640px]  h-[464px] shadow-2xl p-5 mt-10'>
                <h3 className='text-[#555555] text-[20px] font-bold'>Talabalar statitistikasi</h3>
                <div className='border-02 mb-3 mt-3 border-gray-200'>
                </div>
                <div className='w-[600px] h-[900px] '>
                    <div className='flex w-300px'>
                        <Doughnut data={data} />
                        <Doughnut data={data} />
                    </div>
                    <div className='border-02 mb-3 mt-3 border-gray-200'>
                    </div>
                    <p className='text-[#F48221] text-[15px] font-bold'>Barcha ma’lumotlar</p>
                </div>
            </div>
        </>
    )
}