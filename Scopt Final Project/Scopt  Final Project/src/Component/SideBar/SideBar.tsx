import dashboard from '../../../public/Assets/Icons/dashboard.png';
import plateformimg from '../../../public/Assets/Icons/platform.png';
import customerimg from '../../../public/Assets/Icons/customer.png';
import dailyaction from '../../../public/Assets/Icons/dailyAction.png';
import financeimg from '../../../public/Assets/Icons/finance.png';
import logoutimg from '../../../public/Assets/Icons/user.png';
import menuimg from '../../../public/Assets/Icons/menu.png'
const SideBar = () => {
  
  return (
    <>
    <div className="sidebar-container flex flex-col items-center justify-center bg-black w-[13.3%] min-h-screen py-2 text-white border-r-2 border-light-hover h-screen  fixed">
      <div className="logo text-2xl font-bold mb-8">
        <h1>SCOPT</h1>
      </div>

      <div className="nav-bar flex flex-col items-start space-y-6">
        <div className="flex items-center space-x-2">
          <img src={dashboard} className="w-5 h-5" alt="Dashboard" />
          <li className="list-none hover:bg-gray-900">Dashboard</li>
        </div>

        <div className="flex items-center space-x-2">
          <img src={plateformimg} className="w-5 h-5" alt="Platform" />
          <li className="list-none">Platform</li>
        </div>

        <div className="flex items-center space-x-2">
          <img src={customerimg} className="w-5 h-5" alt="Customer" />
          <li className="list-none">Customers</li>
        </div>

        <div className="flex items-center space-x-2">
          <img src={dailyaction} className="w-5 h-5" alt="Daily Action" />
          <li className="list-none">Daily Action</li>
        </div>

        <div className="flex items-center space-x-2">
          <img src={financeimg} className="w-5 h-5" alt="Finance" />
          <li className="list-none">Finance</li>
        </div>
      </div>

      <div className="mt-auto flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-2">
          <img src={logoutimg} className="w-22 h-5" alt="Logout" />
          <button className="text-white">Logout</button>
        </div>

        <div className="flex items-center space-x-2">
          <img src={menuimg} className="w-5 h-5" alt="Settings" />
          <button className="text-white">Settings</button>
        </div>
      </div>
    </div>


  

    </>
  );
};

export default SideBar;















































