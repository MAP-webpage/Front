import { useState } from "react";
import styles from "./UploadForm.module.css";

const UploadForm = ({ onUpload }) => { // ✅ `onUpload`을 props로 전달받음
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);

  // ✅ 이미지 파일 업로드 처리
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file)); // ✅ 미리보기용 URL 생성
    setImages((prevImages) => [...prevImages, ...imageUrls]); // ✅ 기존 이미지 유지
  };

  // ✅ 업로드 버튼 클릭 시 새로운 게시글 추가
  const handleSubmit = () => {
    if (!title || images.length === 0) {
      alert("제목과 이미지를 입력하세요.");
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      images, // ✅ 업로드한 이미지 URL 포함
      likes: 0,
    };

    onUpload(newPost); // ✅ `Gallery.js`의 상태 업데이트
    setTitle(""); // 입력 필드 초기화
    setImages([]); // 이미지 초기화
    console.log("Uploaded Post:", newPost);
  };

  return (
    <div className={styles.uploadForm}>
      <input
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.inputField}
      />
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleImageUpload}
        className={styles.fileInput}
      />
      <button onClick={handleSubmit} className={styles.uploadButton}>
        업로드
      </button>

      {/* ✅ 업로드된 이미지 미리보기 */}
      <div className={styles.previewContainer}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`업로드 이미지 ${index + 1}`} className={styles.previewImage} />
        ))}
      </div>
    </div>
  );
};

export default UploadForm;
