import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideMenu from "../../components/SideMenu";

const HomePage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const open = isMenuOpen ? "flex flex-col w-66 bg-[#6E50D4] pt-5 pl-8 p-3 gap-5 items-start" : "flex flex-col w-22 bg-[#6E50D4] pt-5 p-3 gap-5 items-center";


  return (
    <div className="flex flex-row min-h-screen bg-[#14181C] text-gray-100"> 
      <div className={open}>
        <SideMenu isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} logout={() => navigate('/login')}></SideMenu>
      </div>
    </div>
  )
};

export default HomePage;