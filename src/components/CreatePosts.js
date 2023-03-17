import axios from "axios";
import React, { useState } from "react";
import "../css/CreatePosts.css";
function CreatePosts() {
  // preview img
  const [selectedImage, setSelectedImage] = useState();

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage();
  };

  // Create posts

  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("image", image || selectedImage);
    axios
      .post("https://61bc10bdd8542f001782451e.mockapi.io/Posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <form className="create_Post" onSubmit={handleSubmit}>
      <div className="caption">
        <textarea
          id="caption"
          placeholder="Type your caption..."
          value={caption}
          onChange={(event) => setCaption(event.target.value)}
        ></textarea>

        <label htmlFor="chooseImg">
          <i className="fa-solid fa-image"></i>
        </label>
      </div>

      <button className="create_Btn" type="submit">
        Create
      </button>
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
            <i className="fa-solid fa-delete-left"></i>
          </button>
        </div>
      )}
    </form>
  );
}

export default CreatePosts;
