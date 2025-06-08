import rocketImage from "../assets/images/rocket.jpg";
import Button from "./common/Button";

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={rocketImage}
          alt="Space Rocket"
          className="w-full h-full object-cover object-center transform -scale-x-100"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          HEY THERE, WE ARE
          <br />
          SPACECOWBOY
        </h1>
        <h2 className="text-xl md:text-2xl mb-8 tracking-wider">
          - AN INDEPENDENT SPACE AGENCY -
        </h2>
        <Button
          onClick={() => {
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          title="LEARN MORE"
          className="!py-3 !px-8"
        />
      </div>
    </section>
  );
}
