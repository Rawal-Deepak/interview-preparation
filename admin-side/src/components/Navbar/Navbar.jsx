// import dark_mode_image from "../Navbar/dark_mode.png";
import user_account_logo from "../Navbar/account_circle.png";

export default function Navbar(props) {
  return (
    <>
      <div className="Navbar w-[77.4rem] bg-white h-16 py-2 px-5 top-0 left-68 z-10 fixed flex items-center justify-between drop-shadow-md">
        <div className="text-xl font-semibold">{props.name}</div>
        <div className="flex justify-center items-center">
          <img
            src={user_account_logo}
            alt="user_account_logo"
            width="36px"
            className="cursor-pointer ml-3"
          />
        </div>
      </div>
    </>
  );
}
