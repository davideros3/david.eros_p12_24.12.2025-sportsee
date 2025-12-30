import Icons from "./Icons";
import calories from "../assets/calories-icon.svg"
import protein from "../assets/protein-icon.svg";
import carbs from "../assets/carbs-icon.svg";
import lipids from "../assets/fat-icon.svg"

const Nutritions = () => {
  return (
    <div className="nutritions-layout">
      <div className="calories">
        <Icons icons={calories} alt="calories icon" />
        <h4>1935Kcl</h4>
        <p>Calories</p>
      </div>
      <div><Icons icons={protein} alt="calories icon" />
       <h4>1935Kcl</h4>
        <p>Proteins</p>
      </div>
      <div><Icons icons={carbs} alt="calories icon" />
       <h4>1935Kcl</h4>
        <p>Carbs</p>
      </div>
      <div><Icons icons={lipids} alt="calories icon" />
       <h4>1935Kcl</h4>
        <p>Lipids</p>
      </div>
      
    </div>
  );
};

export default Nutritions;
