import Schedule from "./Components/Schedule";
import Bus from "./Components/Bus";

function DasboardComponent() {
  return (
    <div className="block md:grid grid-cols-[2fr_1fr] md:gap-4 mt-6">
      <Schedule />
      <Bus />
    </div>
  );
}

export default DasboardComponent;
