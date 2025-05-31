import NavbarCard from "../../Components/Navbar/NavbarCard";
import BusSearchCard from "./Components/BusSearchCard";

const Index = () => {
  return (
    <div>
      <NavbarCard />
      <div className="p-6">
        <BusSearchCard />
      </div>
    </div>
  );
};

export default Index;
