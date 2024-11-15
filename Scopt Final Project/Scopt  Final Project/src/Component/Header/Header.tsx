import image from '../../../public/Assets/Icons/bell.png';

const Header = () => {
  return (
    <div className="header-container h-[5%] w-[87%] bg-black text-white flex items-center justify-between fixed top-0 left-[13%] z-50 px-4 border-b-2 border-light-hover border-l-2 border-light-hover">
      <div className="heading">
        <h1 className=" font-semibold text-xl pl-2 dark:text-white light:text-black serifFont truncate lg:text-2xl lg:pl-4 sm:text-3xl sm:pl-4">Sales & Customers Operation Performance Tool</h1>
      </div>
      <div className="icons">
        <img src={image} className="w-5" alt="Notification Icon" />
      </div>
    </div>
  );
};

export default Header;
















