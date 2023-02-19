import stach1 from "../public/stach1.jpg";
import stach2 from "../public/stach2.jpg";
import stach3 from "../public/stach3.jpg";
import stach4 from "../public/stach4.jpg";
import stach5 from "../public/stach5.jpg";
import stach6 from "../public/stach6.jpg";
import InstargamImg from "./InstagramImg";

export default function Instargam() {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <div className="grid grid-cols-2 md:grind-cols-3 lg:grid-cols-6 gap-2 p-4">
        <InstargamImg socialImg={stach1} />
        <InstargamImg socialImg={stach2} />
        <InstargamImg socialImg={stach3} />
        <InstargamImg socialImg={stach4} />
        <InstargamImg socialImg={stach5} />
        <InstargamImg socialImg={stach6} />
      </div>
    </div>
  );
}
