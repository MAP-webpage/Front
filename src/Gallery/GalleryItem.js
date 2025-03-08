import { useState } from "react";
import styles from "./GalleryItem.module.css";

const GalleryItem = ({ post, isAdmin, onEdit, onDelete }) => {
  const [imageError, setImageError] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(post.title);

  const imageSrc = imageError || !post.images.length
    ? "https://via.placeholder.com/581x316?text=No+Image"
    : typeof post.images[0] === "string"
    ? post.images[0]
    : URL.createObjectURL(post.images[0]);

  return (
    <div className={styles.galleryItem}>
      <img
        src={imageSrc}
        alt={post.title}
        className={styles.thumbnail}
        onError={() => setImageError(true)}
      />

      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className={styles.editInput}
        />
      ) : (
        <h3 className={styles.title}>{post.title}</h3>
      )}

      <p className={styles.likes}>❤️ {post.likes}</p>

      {isAdmin && (
        <div className={styles.adminControls}>
          {isEditing ? (
            <button onClick={() => { onEdit(post.id, newTitle); setIsEditing(false); }} className={styles.saveButton}>
              💾 저장
            </button>
          ) : (
            <button onClick={() => setIsEditing(true)} className={styles.editButton}>
              ✏️ 수정
            </button>
          )}
          <button onClick={() => onDelete(post.id)} className={styles.deleteButton}>
            🗑 삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryItem;
