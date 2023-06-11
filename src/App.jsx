import MyChart from "./BarChart"
import { Dubager } from "./Dubager";
import PieChart from "./PieChart";
import LineGraph from "./ReChart";

function App() {
  return (
    <>
      <div className="w-[1960px]  mx-auto ">
        <div className="flex gap-5 sm:flex grid ">
          <div>
            <LineGraph />
          </div>
          <div>
            <Dubager />
          </div>
          <div>
        <PieChart />
          </div>
        </div>
        <div className="flex gap-5">
          <div>
        <MyChart />
          </div>
        </div >
      </div>
    </>
  )
}

export default App;
