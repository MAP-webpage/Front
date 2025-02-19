import { useEffect, useState } from "react";
import Photo from "./component/Photo";
import styles from "./Gallerypage.module.css";
import React from "react";



// 이미지 업로더 컴포넌트
const Uploader = ({ onUpload }) => {
  const handleUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => ({
      id: URL.createObjectURL(file),
      url: URL.createObjectURL(file),
      name: file.name,
    }));
    onUpload(newImages);
  };

  return (
    <div className="upload-box">
      <input type="file" accept="image/*" multiple onChange={handleUpload} />
    </div>
  );
};

// 갤러리 컴포넌트 (2열 레이아웃)//왜 안되지!
const Gallery = ({ images, onDelete }) => {
  return (
    <div className="gallery-grid">
      {images.map((image, index) => (
        <div key={image.id} className="gallery-item">
          {/* 대표 사진 (첫 번째 사진만 .thumbnail 적용) */}
          <img
            src={image.url}
            alt={image.name}
            className={index === 0 ? "thumbnail" : "gallery-img"}
          />
          <button className="delete-btn" onClick={() => onDelete(image.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
};

// 메인 갤러리 페이지
const GalleryPage = () => {
  const [images, setImages] = useState([]);

  const handleNewImages = (newImages) => {
    setImages((prev) => [...prev, ...newImages]);
  };

  const handleDelete = (imageId) => {
    setImages((prev) => prev.filter((image) => image.id !== imageId));
  };

  return (
    <div className="gallery-container">
      <h2 className="title">Image Gallery</h2>
      <Uploader onUpload={handleNewImages} />
      <Gallery images={images} onDelete={handleDelete} />
    </div>
  );
};

export default GalleryPage;
