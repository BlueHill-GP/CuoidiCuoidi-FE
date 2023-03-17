import axios from "axios";
import React, { useEffect, useState } from "react";
import { logoblack } from "../assets";
import "../css/Header.css";

function Header() {
  // search
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Kiểm tra ô input search có rỗng hay không
    if (query === "") {
      // Nếu rỗng, đặt kết quả tìm kiếm thành mảng rỗng
      setResults([]);
    } else {
      // Nếu không rỗng, thực hiện tìm kiếm và đặt kết quả tìm kiếm vào state
      // ...
    }
  }, [query]);

  const handleSearch = () => {
    axios
      .get(
        `https://61bc10bdd8542f001782451e.mockapi.io/Packages?TitlePackage=${query}`
      )
      .then((response) => {
        setResults(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  // model search

  return (
    <div>
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
              <input
                className="box_Input"
                onKeyDown={handleKeyDown}
                value={query}
                onChange={handleInputChange}
              ></input>

              <button
                type="submit"
                className="search_Button"
                onClick={handleSearch}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
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
            <i className="fa-solid fa-user"></i>
            Đăng Nhập
          </a>
          <a href="#" className="signup_Btn">
            Đăng Kí
          </a>
        </div>
      </header>
      <div className="modelShow">
        {results.map((result) => (
          <ul className="search_List" key={result.id}>
            <li className="search_Item">
              <div className="search_Content">
                <h3>{result.TitlePackage}</h3>
                <p>{result.DescPackage}</p>
              </div>
              <div className="search_Img">
                <img src={result.ImagePackage} alt="" />
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Header;
