import React, { useState, useEffect } from 'react'
import BlogIcon from "../../../public/svgs/BlogIcon";
import ContactUsIcon from "../../../public/svgs/ContactUsIcon"
import ProductsIcon from "../../../public/svgs/ProductsIcon";
import GiftCardIcon from "../../../public/svgs/GiftCardIcon";
import CommunityIcon from "../../../public/svgs/CommunityIcon";
import FFCIcon from "../../../public/svgs/FFCIcon";
import AHamburger from '../../../public/svgs/AHamburger'
import AOS from 'aos'
import { useRouter } from 'next/router'
import Link from 'next/link'

function NavBarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [openProducts, setOpenProducts] = useState(false)
  const [openGC, setOpenGC] = useState(false)
  const [openBlog, setOpenBlog] = useState(false)
  const [openCommunity, setOpenCommunity] = useState(false)
  const [openFFC, setOpenFFC] = useState(false)
  const [openContact, setOpenContact] = useState(false)

  const router = useRouter()

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleList = (list) => {
    setOpenProducts(false);
    setOpenGC(false);
    setOpenBlog(false);
    setOpenCommunity(false);
    setOpenFFC(false);
    setOpenContact(false);

    switch (list) {
      case 1:
        setOpenProducts(true);
        break;
      case 2:
        setOpenGC(true);
        break;
      case 3:
        setOpenBlog(true);
        break;
      case 4:
        setOpenCommunity(true);
        break;
      case 5:
        setOpenFFC(true);
        break;
      case 6:
        setOpenContact(true);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [router]);

  return (
    <nav className="navbar__mobile">
      <div className={isOpen ? "open_gray" : ""}>
        <button className="navbar-toggle" onClick={handleToggle}>
          <div className='grayb'>
            <AHamburger isOpen={isOpen} />
          </div>
        </button>

        {isOpen ? (
          <div className='mobile_nav_container'>
            <div className='logo_and_nav'>
              <div className='left_side_mobile_nav'>
                <div className='mobile_nav_icon' onClick={() => handleToggleList(1)}>
                  <ProductsIcon />
                  <p>Products</p>
                </div>
                <div className='mobile_nav_icon' onClick={() => handleToggleList(2)}>
                  <GiftCardIcon />
                  <p>Gift Card</p>
                </div>
                <div className='mobile_nav_icon' onClick={() => handleToggleList(3)}>
                  <BlogIcon />
                  <p>Blog and Gallery</p>
                </div>
                <div className='mobile_nav_icon' onClick={() => handleToggleList(4)}>
                  <CommunityIcon className='mobile_c_icon' />
                  <p>Community</p>
                </div>
                <div className='mobile_nav_icon' onClick={() => handleToggleList(5)}>
                  <FFCIcon />
                  <p>Frequent Flower Club</p>
                </div>
                <div className='mobile_nav_icon' onClick={() => handleToggleList(6)}>
                  <ContactUsIcon />
                  <p>Contact Us</p>
                </div>
              </div>
            </div>

            <div className='right_side_mobile_nav'>
              {openProducts && (
                <ul className='green_mn'>
                  <Link href='/sales'>
                    <li className="navbar__dropdownItem_mobile">This Week's Specials</li>
                  </Link>
                  <Link href='/promotions'>
                    <li className="navbar__dropdownItem_mobile">Promotions</li>
                  </Link>
                  <Link href='/plantcatalog'>
                    <li className="navbar__dropdownItem_mobile">Plant Catalog</li>
                  </Link>
                  <Link href='/delivery'>
                    <li className="navbar__dropdownItem_mobile">Delivery and Planting</li>
                  </Link>
                </ul>
              )}
              {openGC && (
                <ul className='brown_mn'>
                  <Link href='/giftcard'>
                    <li className="navbar__dropdownItem_mobile">Buy a Card</li>
                  </Link>
                </ul>
              )}
              {openBlog && (
                <ul className='yellow_mn'>
                  <Link href='/blog'>
                    <li className="navbar__dropdownItem_mobile">Blog and Gallery</li>
                  </Link>
                  <Link href='/videos'>
                    <li className="navbar__dropdownItem_mobile">Videos</li>
                  </Link>
                  <Link href='/instagram'>
                    <li className="navbar__dropdownItem_mobile">Instagram</li>
                  </Link>
                  <Link href='/gardeningcalendar'>
                    <li className="navbar__dropdownItem_mobile">Gardening Calendar</li>
                  </Link>
                  <Link href='/admin-login'>
                    <li className="navbar__dropdownItem_mobile">Admin Login</li>
                  </Link>
                </ul>
              )}
              {openCommunity && (
                <ul className='green_mn'>
                  <Link href='/brands'>
                    <li className="navbar__dropdownItem_mobile">Brands & Partners</li>
                  </Link>
                  <Link href='/radio'>
                    <li className="navbar__dropdownItem_mobile">Radio Show</li>
                  </Link>
                  <Link href='/workshops'>
                    <li className="navbar__dropdownItem_mobile">Workshops</li>
                  </Link>
                  <Link href='/gardenresources'>
                    <li className="navbar__dropdownItem_mobile">Garden Resources</li>
                  </Link>
                </ul>
              )}
              {openFFC && (
                <ul className='brown_mn'>
                  <Link href='/ffc'>
                    <li className="navbar__dropdownItem_mobile">Join the Frequent Flower Club</li>
                  </Link>
                  <Link href='/newsletter'>
                    <li className="navbar__dropdownItem_mobile">Newsletter and Text Alerts</li>
                  </Link>
                </ul>
              )}
              {openContact && (
                <ul className='yellow_mn'>
                  <Link href='/contact'>
                    <li className="navbar__dropdownItem_mobile">Contact Us</li>
                  </Link>
                  <Link href='/aboutus'>
                    <li className="navbar__dropdownItem_mobile">About Us</li>
                  </Link>
                  <Link href='/employment'>
                    <li className="navbar__dropdownItem_mobile">Why Work Here</li>
                  </Link>
                  <Link href='/growersassurance'>
                    <li className="navbar__dropdownItem_mobile">Grower's Assurance</li>
                  </Link>
                </ul>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}

export default NavBarMobile;
