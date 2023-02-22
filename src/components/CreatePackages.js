import React, { useState } from "react";
import "../css/CreatePackages.css";
export default function CreatePackages() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    
      <div className="packages">
        <div className="create_Package">
          <h3>Create your package</h3>
          <button onClick={handleOpenModal}>
            <i className="fa-regular fa-square-plus"></i>
          </button>
        </div>
        <div className="package_List">
          <div className="package_Item">
            <div className="package_Img">
              <img
                src="https://s.abcnews.com/images/International/brokenbrough-ht-rc-230113_1673633092456_hpMain_4x5_608.jpg"
                alt=""
              />
            </div>
            <div className="package_Content">
              <p className="title_Package">Gói Ảnh Cưới Ngoài Trời</p>
              <p className="desc_Package">
                Kỷ niệm ngày cưới với gói chụp ảnh ngoài trời của chúng tôi. Đẹp
                và sâu sắc với những bức ảnh tự nhiên tại địa điểm đẹp nhất.
              </p>
              <button className="edit_Btn">
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
            </div>
          </div>
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
