import Icons from "./Icons";
import meditation from "../assets/meditaton.svg";
import swim from "../assets/swim.svg";
import bike from "../assets/bike.svg";
import dumbbell from "../assets/dumbbell.svg";


const LeftNavbar = () => {
  return (
    <div className="left-navbar">
      <Icons icons={meditation} alt="meditation icon" />
      <Icons icons={swim} alt="swiming icon" />
      <Icons icons={bike} alt="Bycicle icon" />
      <Icons icons={dumbbell} alt="dumbbell icon" />
      <p> Copiryght, SportSee 2020 </p>
    </div>
  );
};

export default LeftNavbar;
