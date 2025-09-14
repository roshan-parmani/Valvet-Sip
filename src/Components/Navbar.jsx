export default function Navbar(){
    return(
        <div className="navbar bg-black flex flex-wrap justify-between w-[100%] p-10 items-center">
            <div className="logo text-white text-3xl font-bold">
                <span className="text-red-600">V</span>ELVET  <span className="text-red-600">S</span>IP
            </div>
            <div className="rig-side text-white text-2xl flex flex-wrap gap-14">
              <ul className="flex gap-8 flex-wrap items-center justify-center">
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
              <button className="cursor-pointer bg-blue-950 rounded-2xl h-[45px] w-[140px] ">Sign In</button>
            </div>
        </div>
    )
}