import { AiOutlineSplitCells } from "react-icons/ai";
import { SliderData } from "./SliderData";
import Image from "next/image";
export default function Slider({ slides }) {
  return (
    <div id="gallery">
      <h1>Gallery</h1>
      <div>
        {SliderData.map((slide, index) => {
          return (
            <Image
              key={index}
              src={slide.image}
              alt="/"
              width="1440"
              height="600"
              objectFit="cover"
            />
          );
        })}
      </div>
    </div>
  );
}
