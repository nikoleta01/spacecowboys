import { ReactNode } from "react";
import { PiCowboyHatLight } from "react-icons/pi";
import { RiToolsFill } from "react-icons/ri";
import { PiPlanet } from "react-icons/pi";
import Heading from "./common/Heading";

interface Fact {
  icon: ReactNode;
  title: string;
  description: string;
}

function Facts() {
  const facts: Fact[] = [
    {
      icon: <PiCowboyHatLight size={30} />,
      title: "WE ARE COWBOYS",
      description:
        "Yes, might have guessed that from our company name, but the fact is we're not your typical cowboys. We know who'd like to go to space. Deal with it.",
    },
    {
      icon: <RiToolsFill size={30} />,
      title: "WE LIKE TO TINKER",
      description:
        "There are a lot of things lying around in a typical Cowboy Ranch. So we started putting them together, and got really good at rocket building.",
    },
    {
      icon: <PiPlanet size={30} />,
      title: "WE EXPLORE SPACE",
      description:
        "Once we got our first proper rocket, everything went quite fast. And now we are exploring every corner of the world! Who would have guessed?",
    },
  ];

  return (
    <section id="about" className="bg-about-us py-12">
      <div className="container mx-auto px-4 text-center">
        <Heading text="A few facts about us" />
        <p className="text-center text-gray-600 my-8">
          Before you do business with us,
          <br />
          you might want to know a little bit more about our company.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facts.map((fact, index) => (
            <div key={index} className="relative my-6">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <div className="rounded-full bg-primary size-16 flex items-center justify-center shadow-lg">
                  <div>{fact.icon}</div>
                </div>
              </div>
              <div className="bg-white p-8 pt-16 rounded-sm shadow-md">
                <h3 className="text-xl font-bold mb-8">{fact.title}</h3>
                <p className="font-merriweather text-gray-600 mb-8">
                  {fact.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facts;
