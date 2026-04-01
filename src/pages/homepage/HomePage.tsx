import { useState } from "react";
import { Menu, Popcorn, House, Calendar, User, LogOut } from "lucide-react";
import SideMenu from "../../components/SideMenu";

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-row min-h-screen bg-[#14181C] text-gray-100"> 
      <div className="flex flex-col w-22 bg-[#6E50D4] pt-5 p-3 gap-5 items-center">
        <Menu></Menu>
        <div className="m-2 h-0.5 w-10 bg-[#583FAA]"></div>
        <House></House>
        <Popcorn></Popcorn>
        <Calendar></Calendar>
        <User></User>
        <div className="m-2 h-0.5 w-10 bg-[#583FAA]"></div>
        <LogOut></LogOut>
      </div>
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(!isMenuOpen)} />
    </div>
  )
};

export default HomePage;