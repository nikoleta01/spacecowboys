import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <footer className="bg-background-dark py-8 text-font-footer">
      <div className="flex-col text-center">
        <p>Copyright © 2025</p>
        <div className="flex justify-center items-center gap-2">
          <p className="text-2xl font-bold uppercase">Space</p>
          <IconContext.Provider value={{ color: "#484d51", size: "30" }}>
            <BsFillRocketTakeoffFill />
          </IconContext.Provider>
          <p className="text-2xl font-bold uppercase">Cowboy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
