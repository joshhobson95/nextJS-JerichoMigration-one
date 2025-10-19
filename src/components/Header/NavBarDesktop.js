import React from "react";
import Link from "next/link";
import RotatingBanner from "../RotatingBanner/RotatingBanner";
import logo from '../../../public/assets/Logo.png';
import BlogIcon from "../../../public/svgs/BlogIcon";
import ContactUsIcon from "../../../public/svgs/ContactUsIcon"
import ProductsIcon from "../../../public/svgs/ProductsIcon";
import GiftCardIcon from "../../../public/svgs/GiftCardIcon";
import CommunityIcon from "../../../public/svgs/CommunityIcon";
import FFCIcon from "../../../public/svgs/FFCIcon";



const NavBarDesktop = () => {
  return (
    <div className="header">
      <div className="photo_banner">
        <RotatingBanner />
        <Link href="/">
          <div className="logo_div">
            <img className="logo" src={logo.src} alt="logo" priority />
          </div>
        </Link>
      </div>
      <nav className="navbar">
        <ul className="navbar__menu">
          {/* Products */}
          <li className="navbar__menuItem navbar__menuItem--hasDropdown">
            <div className="nav_svg_and_p">
              <div className="nav_svg">
                <ProductsIcon />
              </div>
              <p>Products</p>
            </div>
            <ul className="navbar__dropdownMenu_green">
              <li className="navbar__dropdownItem">
                <Link href="/sales">Sales & Promotions</Link>
              </li>
              {/* <li className="navbar__dropdownItem">
                <Link href="/plantcatalog">Plant Catalog</Link>
              </li> */}
              <li className="navbar__dropdownItem">
                <Link href="/delivery">Delivery and Planting</Link>
              </li>
            </ul>
          </li>

          {/* Giftcard */}
          <li className="navbar__menuItem navbar__menuItem--hasDropdown">
            <div className="nav_svg_and_p">
              <div className="nav_svg">
                <GiftCardIcon />
              </div>
              <p>Giftcard</p>
            </div>
            <ul className="navbar__dropdownMenu_brown">
              <li className="navbar__dropdownItem">
                <Link href="/giftcard">Buy a Card</Link>
              </li>
            </ul>
          </li>

          {/* Blog and Gallery */}
          <li className="navbar__menuItem navbar__menuItem--hasDropdown">
            <div className="nav_svg_and_p">
              <div className="nav_svg">
                <BlogIcon />
              </div>
              <p>Blog and Gallery</p>
            </div>
            <ul className="navbar__dropdownMenu_yellow">
                <li className="navbar__dropdownItem"><Link href="/blog">Blog and Gallery</Link></li>
                <li className="navbar__dropdownItem"><Link href="/videos">Videos</Link></li>
                <li className="navbar__dropdownItem"><Link href="/instagram">Instagram</Link></li>
                <li className="navbar__dropdownItem"><Link href="/gardeningcalendar">Gardening Calendar</Link></li>
                <li className="navbar__dropdownItem"><Link href="/admin-login">Admin Login</Link></li>
            </ul>
          </li>

          {/* Community */}
          <li className="navbar__menuItem navbar__menuItem--hasDropdown">
            <div className="nav_svg_and_p">
              <div className="nav_svg">
                <CommunityIcon />
              </div>
              <p>Community</p>
            </div>
            <ul className="navbar__dropdownMenu_green">
                <li className="navbar__dropdownItem"><Link href="/brands">Brands & Partners</Link></li>
                <li className="navbar__dropdownItem"><Link href="/radio">Radio Show</Link></li>
                <li className="navbar__dropdownItem"><Link href="/workshops">Workshops</Link></li>
                <li className="navbar__dropdownItem"><Link href="/gardenresources">Garden Resources</Link></li>
            </ul>
          </li>

          {/* Frequent Flower Club */}
          <li className="navbar__menuItem navbar__menuItem--hasDropdown">
            <div className="nav_svg_and_p">
              <div className="nav_svg">
                <FFCIcon />
              </div>
              <p>Frequent Flower Club</p>
            </div>
            <ul className="navbar__dropdownMenu_brown_ffc">
                <li className="navbar__dropdownItem"><Link href="/ffc">Join the Frequent Flower Club</Link></li>
                <li className="navbar__dropdownItem"><Link href="/newsletter">Newsletter and Text Alerts</Link></li>
            </ul>
          </li>

          {/* Contact Us */}
          <li className="navbar__menuItem navbar__menuItem--hasDropdown">
            <div className="nav_svg_and_p">
              <div className="nav_svg">
                <ContactUsIcon />
              </div>
              <p>Contact Us</p>
            </div>
            <ul className="navbar__dropdownMenu_yellow">
                <li className="navbar__dropdownItem"><Link href="/contact">Contact Info</Link></li>
                <li className="navbar__dropdownItem"><Link href="/aboutus">About Us</Link></li>
                <li className="navbar__dropdownItem"><Link href="/employment">Why Work Here</Link></li>
                <li className="navbar__dropdownItem"><Link href="/growersassurance">Grower's Assurance</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBarDesktop;
