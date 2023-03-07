import axios from "axios";
import React, { useState, useEffect } from "react";
import "../css/CreatePackages.css";

export default function CreatePackages() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // show package

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://61bc10bdd8542f001782451e.mockapi.io/Packages")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="packages">
      <div className="create_Package">
        <h3>Create your package</h3>
        <button onClick={handleOpenModal}>
          <i className="fa-regular fa-square-plus"></i>
        </button>
      </div>
      <div className="package_List">
        {data.map((Packages) => (
          <div key={Packages.id}>
            <div className="package_Item">
              <div className="package_Img">
              <img src={`${Packages.ImagePackage}`} alt=""></img>
              </div>
              <div className="package_Content">
                <h3 className="title_Package">{Packages.TitlePackage}</h3>
                <p className="desc_Package">
                  {Packages.DescPackage}
                </p>
                <button className="edit_Btn">
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <p className="price_Package">
                  {Packages.PricePackage}$
                </p>
              </div>
            </div>
          </div>
        ))}
        
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>

            <form className="modal_Form">
              <label>
                <p>chon anh</p>
                <input type="file" />
              </label>
              <label>
                <p>nhap tieu de</p>
                <div className="create_TitlePackage">
                  <input type="text" className="title_Package" />
                </div>
              </label>
              <label htmlFor="">
                <p>nhap mo ta</p>
                <div className="create_DescPackage">
                  <textarea name="" id=""></textarea>
                </div>
              </label>
              <label>
                <p>nhap gia</p>
                <input type="text" className="price_Package" />
              </label>

              <button onClick={handleCloseModal}>Cancel</button>
              <button onClick={handleCloseModal}>Save</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
