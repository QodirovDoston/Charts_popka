import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  // Define chart data
  const data = {
    type: "doughnut",
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [10, 60, 70],
        backgroundColor: ['#58508d', '#3292b0', 'orange'],
        hoverBackgroundColor: ['#003f5c', '#6fefff', 'darkblue'],
 
      },
    ],
  };

  const options = {
    responsive: true,
  };

  const text = {
    text:"Doston"
  };

  return (
    <>
      <div className='bg-[#FFFFFF] w-[640px]  h-[464px] shadow-2xl p-5 mt-10 '>
      <h3 className='text-[#555555] text-[20px] font-bold'>Talabalar statitistikasi</h3>
      <div className='border-02 mb-3 mt-3 border-gray-200'>
        </div>
      <div className='w-[600px] h-[900px] '>
    <div className='flex'>
      <div>
      <Pie width={300} height={200}  margin={{top:5,right:30,left:20,bottom:5}} data={data}  options={options}  text={text}/>
      </div>
      <div>
      <Pie width={300} height={200}  margin={{top:5,right:30,left:20,bottom:5}} data={data}  options={options}  text={text}/>
      </div>
    </div>
        <div className='border-02 mb-3 mt-3 border-gray-200'>
        </div>
        <p className='text-[#F48221] text-[15px] font-bold'>Barcha ma’lumotlar</p>
      </div>
    </div>
    </>
  )
};

export default PieChart;