import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="flex flex-col bg-black">
      <div
        className={
          "bg-gray  px-8 py-2 flex flex-row justify-between text-yellow"
        }
      >
        <div className="">
          <a
            href="https://www.facebook.com/Henry4film/"
            target={"_blank"}
            rel="noreferrer"
            className="p-2"
          >
            f
          </a>
          <a
            href="https://www.instagram.com/the_artoffilm/?utm_medium=copy_link"
            target={"_blank"}
            rel="noreferrer"
            className="p-2"
          >
            i
          </a>
          <a
            href="https://www.youtube.com/channel/UCYDDoM6EPQryVyCzW9G-Ryg"
            target={"_blank"}
            rel="noreferrer"
            className="p-2"
          >
            y
          </a>
        </div>
        <div className={"flex flex-row "}>
          <div className="text-white px-4">
            <select className={"bg-[transparent]"} onChange={(e) => {}}>
              <option value="GBP">GBP</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="JPY">JPY</option>
            </select>
          </div>

          <Link className={"ml-2"} to="/profile">
            My Account
          </Link>
        </div>
      </div>
      <div className="flex flex-row text-yellow px-8 py-4">
        <div className={"flex-none"}>
          <Link className="flex center brand" to="/">
            <img
              width={270}
              src={"http://theartoffilm.herokuapp.com/images/logo.png"}
              alt={"theartoffilms"}
            />
          </Link>
        </div>
        <div className={"flex flex-row flex-auto items-center justify-center"}>
          <Link className="p-4" to="/">
            Home
          </Link>
          <Link className="p-4" to="/sellers">
            Showcase
          </Link>
          <Link className="p-4" to={"/shop/name"}>
            Shop
          </Link>
          <Link className="p-4" to="/faq">
            FAQ
          </Link>
          <Link className="p-4" to="/page/subscriptions">
            Subscriptions
          </Link>
          <Link className="p-4" to={`/seller/:id`}>
            My ShowCase
          </Link>
          <Link className="p-4" to="/signin">
            Sign In
          </Link>
        </div>
        <div className={"flex flex-row   justify-end items-center"}>
          <Link className={"flex"} to="/cart">
            <i className="fa-solid fa-cart-shopping">cart</i>
            <sup className="badge">2</sup>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
