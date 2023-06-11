import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

const LineGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartCanvas = chartRef.current;

    new Chart(chartCanvas, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', "june"],
        datasets: [
          {
            label: 'My Dataset',
            data: [10, 20, 30, 40, 51, 75],
            borderColor: 'rgb(75, 192, 192)',
            pointBackgroundColor: [
              'rgb(4, 255, 0)',
              'rgb(4, 255, 0)',
              'rgb(4, 255, 0)',
              'rgb(4, 255, 0)',
              'rgb(4, 255, 0)',
              '#FF0000',
            ],
            pointRadius: 10,
            tension: 0.1,
          },
        ],
      },
    });
  }, []);
  return (
    <div className='bg-[#FFFFFF] w-[640px] rounded-[10px]  h-[464px] shadow-2xl p-5 mt-10'>
      <h3 className='text-[#555555] text-[20px] font-bold'>Talabalar statitistikasi</h3>
      <div className='border-02 mb-3 mt-3 border-gray-200'>
        </div>
      <div className='w-[600px] h-[900px] '>
        <canvas className='h-[700px]' ref={chartRef}></canvas>
        <div className='border-02 mb-3 mt-3 border-gray-200'>
        </div>
        <p className='text-[#F48221] text-[15px] font-bold'>Barcha ma’lumotlar</p>
      </div>
    </div>
  )
};

export default LineGraph;
