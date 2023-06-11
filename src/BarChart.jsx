import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MyChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: ['red', 'blue', 'yellow'],
          },
        ],
      },
      options: {
        // Configure options as needed
      },
    });

    return () => {
      // Cleanup chart instance if necessary
      myChart.destroy()
    }
  }, []);

  return (
    <div className='bg-[#FFFFFF] w-[890px]  h-[564px] shadow-2xl p-5 mt-10 '>
      <h3 className='text-[#555555] text-[20px] font-bold'>Talabalar statitistikasi</h3>
      <div className='border-02 mb-3 mt-3 border-gray-200'>
      </div>
        <div className='w-[800px]'>
          <canvas ref={chartRef} id="myChart" />
        </div>
        <div className='border-02 mb-3 mt-3 border-gray-200'>
        </div>
        <p className='text-[#F48221] text-[15px] font-bold'>Barcha ma’lumotlar</p>
      </div>
  )
}

export default MyChart;