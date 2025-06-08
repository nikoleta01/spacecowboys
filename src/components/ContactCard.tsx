import { TeamMember } from "./Team";

interface ContactCardProps {
  member: TeamMember;
}

function ContactCard({ member }: ContactCardProps) {
  return (
    <div className="flex">
      <div className="max-w-40 flex-shrink-0">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover rounded-sm"
        />
      </div>

      <div className="flex-1 bg-white/10 rounded-tr-sm rounded-br-sm p-4">
        <div className="flex flex-col justify-center h-full">
          <h3 className="text-white text-xl font-bold">{member.name}</h3>
          <p className="text-white my-2">{member.role}</p>
          <div className="text-gray-400 space-y-1 text-sm">
            <p className="text-white uppercase">Age: {member.age}</p>
            <p className="text-white uppercase">Missions: {member.missions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
