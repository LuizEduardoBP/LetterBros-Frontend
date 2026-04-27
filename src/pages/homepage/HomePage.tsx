import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideMenu from "../../components/SideMenu";

const HomePage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarClass = isMenuOpen 
    ? "flex flex-col w-66 bg-[#6E50D4] text-gray-100 transition-all duration-300 ease-in-out min-h-screen overflow-x-hidden" 
    : "flex flex-col w-22 bg-[#6E50D4] text-gray-100 transition-all duration-300 ease-in-out min-h-screen overflow-x-hidden";

  return (
    <div className="flex flex-row min-h-screen bg-[#14181C] text-gray-100"> 
      <div className={sidebarClass}>
        <SideMenu isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} logout={() => navigate('/login')} />
      </div>
    </div>
  );
};

export default HomePage;