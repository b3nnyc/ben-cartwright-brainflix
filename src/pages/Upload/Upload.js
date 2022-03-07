import React from "react";
import uploadImg from "../../assets/images/Upload-video-preview.jpg";
import "./Upload.scss";
import swal from "sweetalert";
import "../../styles/partials/_variables.scss";

function Upload() {
  const handleSubmitSuccess = (event) => {
    event.preventDefault();
    swal({
      title: "Success!",
      text: "Your video has been uploaded! Redirecting...",
      icon: "success",
    });
    setTimeout(function () {
      window.location.href = "/";
    }, 3000);
  };

  const handleSubmitCancel = (event) => {
    event.preventDefault();
    swal({
      title: "Cancel Upload?",
      text: "All current data will be erased.",
      icon: "warning",
      buttons: {
        cancel: true,
        confirm: true,
      },
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal({
          title: "Cancelled Upload",
          text: "Taking you home...",
          icon: "success",
        });
        setTimeout(function () {
          window.location.href = "/";
        }, 2000);
      } else {
        swal("Your video is safe!");
      }
    });
  };

  return (
    <section className="upload">
      <h2 className="upload__title">Upload Video</h2>
      <div className="upload__container">
        <div className="upload__top">
          <label className="upload__img-title" for="img-title">
            VIDEO THUMBNAIL
          </label>
          <img className="upload__img" src={uploadImg} alt="" />
        </div>
        <div className="upload__forms">
          <label className="upload__forms-header1" for="forms-title">
            TITLE YOUR VIDEO
          </label>
          <input
            className="upload__forms-title"
            title="TITLE YOUR VIDEO"
            placeholder="Add a title to your video"
            type="text"
          />
          <label className="upload__forms-header2" for="forms-desc">
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            className="upload__forms-desc"
            title="ADD A VIDEO DESCRIPTION"
            placeholder="Add a description to your video"
            type="text"
          />
        </div>
      </div>
      <div className="upload__buttons">
        <button className="upload__buttons-cancel" onClick={handleSubmitCancel}>
          CANCEL
        </button>
        <button
          className="upload__buttons-publish"
          onClick={handleSubmitSuccess}
        >
          PUBLISH
        </button>
        <button
          className="upload__buttons-cancel-mobile"
          onClick={handleSubmitCancel}
        >
          CANCEL
        </button>
      </div>
    </section>
  );
}

export default Upload;
