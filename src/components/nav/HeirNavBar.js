import { Link, useNavigate } from "react-router-dom"
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css"
import LL2 from "../../images/LL2.svg";

export const HeirNavBar = () => {
    const navigate = useNavigate()
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
      };
 
    return (
        <header className="nav__header">
        
      <Link className="navbar__item navbar_home" to="/"><img className="navbar__img" src={LL2} /></Link>
      <nav ref={navRef}>
      

      <Link className="navbar__item navbar_about" to="/">LL Information</Link>

      <Link className="navbar__item navbar_treasures" href="/family_tree">
          Family
        </Link>

        <Link className="navbar__item navbar_treasures" href="/treasure">
          Treasures
        </Link>

        <Link className="navbar__item navbar_requests" to="/requests">
          My Requests
        </Link>

        <Link className="navbar__item navbar_profile" to="/profile">Profile</Link>

        <Link className="navbar__item navbar__link" to="" onClick={() => {
                    localStorage.removeItem("family_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
    )
}

