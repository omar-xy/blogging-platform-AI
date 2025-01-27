import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function MainWrapper({ children } : { children: any }) {
    return (<div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
    <div className="sm:flex hidden mr-10 relative">
      <Sidebar />
    </div>

    <div className="flex-1 max-sm:w-full max-w-[1517px] mx-auto sm:pr-5">
      <Navbar />
      {children}
    </div>
  </div>);
}
