import React, { useState } from "react";
import "../css/CreatePosts.css";
function CreatePosts() {
  const [selectedImage, setSelectedImage] = useState();

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage();
  };

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="create">
      <div className="create_Container">
        <div className="photographer_Info">
          <div className="avt">
            <img
              src="https://static01.nyt.com/images/2019/02/05/world/05egg/15xp-egg-promo-superJumbo-v2.jpg"
              alt=""
            />
          </div>
          <div className="photographer_Name">
            <p>Nguyen Bui Tai</p>
          </div>
          <div className="location">
            <h3>Location</h3>
            <p>Da Nang</p>
          </div>
          <div className="about_Me">
            <h3>About me</h3>
            <p>
              Toi la mot nguoi dan ong dep trai vui tinh. Toi sinh nam 99, Toi
              muon lay vo tu lau roi ma cha co ma nao them.
            </p>
          </div>
        </div>

        <div className="create_Post">
          <div className="caption">
            <textarea
              name=""
              id=""
              placeholder="Type your caption..."
            ></textarea>
          </div>

          <button className="create_Btn">Create</button>
          <label htmlFor="chooseImg">
            <i class="fa-solid fa-image"></i>
          </label>

          <input
            className="choose_Img"
            type="file"
            id="chooseImg"
            accept="image/*"
            onChange={imageChange}
          />
          {selectedImage && (
            <div className="preview">
              <img src={URL.createObjectURL(selectedImage)} alt="Thumb" />
              <button onClick={removeSelectedImage} className="delete_Img">
                <i class="fa-solid fa-delete-left"></i>
              </button>
            </div>
          )}
        </div>

        <div className="packages">
          <div className="create_Package">
            <h3>Create your package</h3>
            <button onClick={handleOpenModal}>
              <i class="fa-regular fa-square-plus"></i>
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
                  Kỷ niệm ngày cưới với gói chụp ảnh ngoài trời của chúng tôi.
                  Đẹp và sâu sắc với những bức ảnh tự nhiên tại địa điểm đẹp
                  nhất.
                </p>
                <button className="edit_Btn">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>
                &times;
              </span>

              <form>
                <label>
                  <p>chon anh</p>
                  <input type="file" />
                </label>
                <label>
                  <p>nhap tieu de</p>
                  <div className="create_TitlePackage">
                    <input type="text" className="title_Package"/>
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
                  <input type="text" className="price_Package"/>
                </label>

                <button onClick={handleCloseModal}>Cancel</button>
                <button onClick={handleCloseModal}>Save</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreatePosts;
