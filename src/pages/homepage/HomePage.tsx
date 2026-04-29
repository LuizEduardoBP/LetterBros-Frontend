import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideMenu from "../../components/SideMenu";

const HomePage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const open = isMenuOpen
    ? "flex flex-col w-[20vw] min-w-56 max-w-72 bg-[#6E50D4] pt-4 px-3 pb-3 gap-3 items-start"
    : "flex flex-col w-18 bg-[#6E50D4] pt-4 p-3 gap-3 items-center";


  return (
    <div className="flex flex-row min-h-screen bg-[#14181C] text-gray-100"> 
      <div className={sidebarClass}>
        <SideMenu isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} logout={() => navigate('/login')} />
      </div>
    </div>
  );
};

export default HomePage;
