import { Fragment } from "react";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.png";
import img8 from "../../assets/8.png";
import img9 from "../../assets/9.png";
import img10 from "../../assets/10.png";
import img11 from "../../assets/11.png";

const ImagesGrid = ({ activeTab }) => {
  const photos = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
    { src: img6 },
    { src: img7 },
    { src: img8 },
    { src: img9 },
    { src: img10 },
    { src: img11 },
  ];

  return (
    <>
      {activeTab && (
        <div className="p-4">
          <div className="columns-2 md:columns-3 lg:columns-5 gap-4">
            {photos.map((item, index) => (
              <Fragment key={index}>
                <img
                  src={item.src}
                  alt={`Image ${index + 1}`}
                  className="w-full mb-4 rounded-lg shadow-md"
                />
              </Fragment>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ImagesGrid;
