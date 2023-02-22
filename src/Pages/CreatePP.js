import React from "react";
import CreatePackages from "../components/CreatePackages";
import CreatePosts from "../components/CreatePosts";

import PhotographerInfo from "../components/PhotographerInfo";
import "../css/CreatePP.css"
function CreatePP() {
  return (
    <div className="create">
      <div className="create_Container">
        <PhotographerInfo />
        <CreatePosts />
        <CreatePackages />
      </div>
    </div>
  );
}

export default CreatePP;
