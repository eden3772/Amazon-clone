import React, { useContext } from "react";
import classes from "../Header/Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from "./LowerHeader";
import { BiCart } from "react-icons/bi";
import log from "../../assets/image/logo._TTD.png";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utilis/firbase";
function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            <Link to="/">
              <img src={log} className={classes.logo} />
            </Link>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Aurora co</span>
              </div>
            </div>
          </div>
          {/* search */}
          <div className={classes.search}>
            <select name="" id="" className={classes.all}>
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Amazon" />
            <BsSearch size={38} />
          </div>
          <div className={classes.order_container}>
            <Link to="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>p
              </select>
            </Link>
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]} </p>
                    <select
                      className={classes.acc}
                      value=""
                      onClick={() => auth.signOut()}
                    >
                      {" "}
                      <option>Sign Out</option>
                    </select>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <select className={classes.acc}>
                      {" "}
                      <option value="">Account and Lists</option>
                    </select>
                  </>
                )}
              </div>
            </Link>
            <Link to="/Orders">
              <p>returns</p>
              <span className={classes.acc}> & Order</span>
            </Link>
            <Link to="/Cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
              <p className={classes.cart_text}>Cart</p>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}
export default Header;
