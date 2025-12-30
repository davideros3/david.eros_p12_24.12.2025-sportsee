import Greeting from "../components/Greeting";
import Nutritions from "../components/Nutritions";
import PerformanceRader from "../components/PerformanceRadar";



const Home = () => {
  return (
    <div className="home">
      <Greeting />
      <div className="home-content">
        <div className="daily-activity">
          
        </div>
        <div className="nutritions">
            <Nutritions />
        </div>
        <div className="average-session">
        

        </div>
        <div className="performance">
          <PerformanceRader />
        </div>
        <div className="today-score">
          5
          </div>
      </div>
    </div>
  );
};

export default Home;
