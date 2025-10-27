import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    // you can remove the gradient and return the bg to 500
    <header className="flex items-center justify-between border-b border-stone-200 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
