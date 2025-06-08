import { FC } from "react";
import teamBg from "../assets/images/team.jpg";
import Heading from "./common/Heading";
import ContactCard from "./ContactCard";

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  age: number;
  missions: number;
}

const Team: FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "RICHIE FARHEM",
      role: "ENGINEER",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiiurQAU61Df-4nz1ydAepZN0A-woObJ5r7g&s",
      age: 48,
      missions: 13,
    },
    {
      name: "JOHN SIRACHA",
      role: "GUNSLINGER",
      age: 47,
      missions: 13,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiiurQAU61Df-4nz1ydAepZN0A-woObJ5r7g&s",
    },
    {
      name: "BERT McNAMERA",
      role: "CAPTAIN",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiiurQAU61Df-4nz1ydAepZN0A-woObJ5r7g&s",
      age: 71,
      missions: 13,
    },
    {
      name: "AL SVERINGE",
      role: "CEO",
      age: 76,
      missions: 13,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiiurQAU61Df-4nz1ydAepZN0A-woObJ5r7g&s",
    },
  ];

  return (
    <section id="team" className="relative py-12">
      <div className="absolute inset-0 z-0">
        <img
          src={teamBg}
          alt="Space Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Heading text="THE TEAM" className="text-white" />
        <p className="text-center text-gray-300 mb-12 font-merriweather">
          Yep, that's us. Six fine fellows, eager to get on the next adventure.
          <br />
          Click on the pictures to get some more information!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col justify-between h-full bg-black/60 rounded-sm px-5 py-3">
            <p className="font-montserrat text-white text-center uppercase text-xs">
              Dick's famous quote
            </p>
            <p className="font-merriweather text-white text-center italic flex-1 flex items-center">
              „This is a small step for me, but a big step for, like, a small
              kid"
            </p>
            <div className="invisible">
              <p className="text-xs">&nbsp;</p>
            </div>
          </div>
          {teamMembers.map((member, index) => (
            <ContactCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
