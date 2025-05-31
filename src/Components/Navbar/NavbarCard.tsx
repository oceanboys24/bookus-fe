
import { useLocation } from "@tanstack/react-router";
import { Bus } from "lucide-react";
import { NAVBAR_LINK } from "./NavbarMenuList";

const NavbarCard = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex justify-between items-center h-18 pl-6 pr-6 bg-primary">
      <div>
        <Bus color="#FFFFFF" size={"32px"} />
      </div>
      <div className="flex gap-4">
        {NAVBAR_LINK.map(({ label, path }, index) => (
          <a
            href={path}
            key={index}
            className="text-white inline-block hover:border-b-3"
          >
            {pathname === path ? (
              <h1 className="font-bold border-b-3 inline-block">{label}</h1>
            ) : (
              <h1>{label}</h1>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavbarCard;
