import React from "react";
import { logoblack } from "../assets";
import "../css/Header.css";
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img alt="" src={logoblack} />
        
      </div>
      <ul className="menu">
        <li>
          <a href="#">Bản tin</a>
        </li>
        <li>
          <div className="search">
            <input className="box_Input"></input>
            <button type="submit" class="search_Button">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            
          </div>
        </li>
        <li>
          <a href="#">Hợp Tác Với Chúng Tôi</a>
        </li>
        <li>
          <a href="#">Đặt Lịch Của Tôi</a>
        </li>
        <li>
          <a href="#">Đã Lưu</a>
        </li>
      </ul>

      <div className="header_Auth">
        <a href="#" className="signin_Btn">
          <i class="fa-solid fa-user"></i>
          Đăng Nhập
        </a>
        <a href="#" className="signup_Btn">
          Đăng Kí
        </a>
      </div>
    </header>
  );
}

export default Header;
