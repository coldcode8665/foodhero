
import Style from '../styles/nav.module.css';
import Image from 'next/image'

let Nav = () => {
  
    return (
        <nav className={Style.nav} id="nav">
        <div className="container">
          <div className={Style.menuContainer}>
            <h3 className={Style.logo}><a href="/">FoodHero</a></h3>

            <ul className={Style.menu}>
              <li><a href="#howitworks">How it works</a></li>
              <li><a href="/location">locations</a></li>
              <li><a href="#" id="about">About <i className="fa fa-angle-down"></i></a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Partner</a></li>
              {/* <li><a href="#" className={Style.downloadbtn} id="dbtn">Download</a></li> */}
            </ul>
            <div className={Style.hidden}>
              {/* <a href="#" className={Style.downloadbtn} id="dbtn">Download</a> */}
              <i class="fa fa-bars" id="dropdownBtn"></i>
            </div>
            
            <ul className={Style.dropdown} id="dropdown">
              <li><a href="/story">Our Story</a></li>
              <li><a href="/waste">Food waste</a></li>
              <li><a href="#">The Team</a></li>
              <li><a href="#">Press Room</a></li>
            </ul>

            <ul className={Style.dropdownHidden} id="dropdownHidden">
              <li><a href="#howitworks">How it works</a></li>
              <li><a href="/location">locations</a></li>
              <li id="aboutHid"><a href="#">About <i className="fa fa-angle-down"></i></a></li>
              <li id="aboutHidden" className={Style.aboutHidden}>
                <ul>
                  <li><a href="/story">Our Story</a></li>
                  <li><a href="/waste">Food waste</a></li>
                  <li><a href="#">The Team</a></li>
                  <li><a href="#">Press Room</a></li>
                </ul>
              </li>
              <li><a href="#">Suport</a></li>
              <li><a href="#">Partner</a></li>
            </ul>
          </div>
        </div>
        <script type="text/javascript" src="/js/index.js"></script>
    </nav>
    )
}

export default Nav