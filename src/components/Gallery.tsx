import { useEffect, useState } from "react";
import { GalleryImage } from "../types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import hmlovina from "../assets/images/orlia-hmlovina.webp";
import space from "../assets/images/space.jpg";
import space2 from "../assets/images/space2.jpg";
import "../styles/swiper.css";
import Heading from "./common/Heading";

function Gallery() {
  const images: GalleryImage[] = [
    {
      src: hmlovina,
      alt: "Space fj",
    },
    {
      src: space2,
      alt: "Space nebjsiula",
    },
    {
      src: hmlovina,
      alt: "Space neaijskjbula",
    },
    {
      src: hmlovina,
      alt: "Space neaijskjbula",
    },
    {
      src: space,
      alt: "Space neaijskjbula",
    },
    {
      src: hmlovina,
      alt: "Space neaijskjbula",
    },
    {
      src: hmlovina,
      alt: "Space neaijskjbula",
    },
    {
      src: hmlovina,
      alt: "Space neaijskjbula",
    },
    {
      src: hmlovina,
      alt: "Space neaijskjbula",
    },
    {
      src: hmlovina,
      alt: "Space neaijskjbula",
    },
    {
      src: space,
      alt: "Space neaijskjbula",
    },
    {
      src: hmlovina,
      alt: "Space neaijskjbula",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <section id="impressions" className="relative bg-background-dark py-12">
      <div>
        <Heading text="Look at all those stars!" className="text-white" />
        <p className="font-merriweather text-center text-white my-8">
          Some impressions from our trips to frickin outer space, enjoy!
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-4 gap-4 px-8">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`image-${index}`}
              className="aspect-square w-full object-cover rounded shadow-md cursor-pointer hover:scale-105 transition"
              onClick={() => {
                setInitialSlide(index);
                setIsOpen(true);
              }}
            />
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="absolute inset-0 z-20 bg-black/90 flex items-center justify-center">
          <div className="relative w-full max-w-5xl px-4">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute left-1/2 -translate-x-1/2 -top-12 text-sm text-arrow-navigation hover:text-white text-3xl font-bold z-30 w-8 h-8 flex items-center justify-center rounded-full border-2 border-arrow-navigation hover:border-white/100 transition-colors"
            >
              ×
            </button>

            <Swiper
              modules={[Navigation]}
              navigation
              initialSlide={initialSlide}
              spaceBetween={30}
              slidesPerView={1}
              className="w-full max-h-[80vh]"
            >
              {images.map((image, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center"
                >
                  <img
                    src={image.src}
                    alt={`Slide ${index}`}
                    className="max-h-[80vh] w-full object-contain rounded"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
