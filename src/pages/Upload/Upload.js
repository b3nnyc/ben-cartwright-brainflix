import React from "react";
import uploadImg from "../../assets/images/Upload-video-preview.jpg"
import "./Upload.scss";

function Upload() {
  return (
    <section className="upload">
      <h2 className="upload__title">Upload Video</h2>
      <div className="upload__container">
      <label className="upload__img-title" for="img-title">
              VIDEO THUMBNAIL
            </label>
        <img className="upload__img" src={uploadImg} alt="" />
        <div className="upload__forms">
        <label className="upload__forms-title1" for="forms-title">
              TITLE YOUR VIDEO
            </label>
          <input className="upload__forms-title" title="TITLE YOUR VIDEO" placeholder="Add a title to your video" type="text" />
          <label className="upload__forms-title2" for="forms-desc">
              ADD A VIDEO DESCRIPTION</label>
          <input className="upload__forms-desc" title="ADD A VIDEO DESCRIPTION" placeholder="Add a description to your video" type="text" />
        </div>
        <div className="upload__buttons">
          <button className="upload__buttons-publish"></button>
          <button className="upload__buttons-cancel"></button>
        </div>
      </div>
    </section>
  );
}

export default Upload;
