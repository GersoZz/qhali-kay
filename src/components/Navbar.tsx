
import EstarBienLogo from "./svgs/estar-bien-logo";
import RimacLogo from "./svgs/RimacLogo";

function Navbar() {
  return (
      <div className="wrapper flex gap-16 items-center min-h-20 w-full ">
      <div className="logos flex  gap-8 justify-center items-center">
        <EstarBienLogo />
        <RimacLogo />
      </div>
      <nav className="flex items-center justify-between w-full">
  
          <ul className="flex gap-8 font-bold">
            
            <li><a href="">Rutas de bienestar</a></li>
            <li><a href="">Aprende y actívate</a></li>
            <li><a href="">Agenda una sesión</a></li>
          </ul>

        <div className="profile flex gap-4 items-center">
          <div className="avatar rounded-full p-2 bg-green-400 min-h-14 min-w-14 justify-center items-center">
          </div>

          <div className="name">
            <p>John Doe</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
