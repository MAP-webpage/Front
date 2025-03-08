import { useState } from "react";
import styles from "./Gallerypage.module.css";
import React from "react";
import GalleryItem from "./GalleryItem";
import UploadForm from "./UploadForm";

// ✅ 더미 데이터
const dummyUserPosts = [
  {
    id: 1,
    title: "첫 번째 게시글",
    images: ["https://source.unsplash.com/581x316/?nature,water"],
    likes: 5,
  },
  {
    id: 2,
    title: "두 번째 게시글",
    images: ["https://source.unsplash.com/581x316/?city,night"],
    likes: 10,
  },
  {
    id: 3,
    title: "세 번째 게시글",
    images: ["https://source.unsplash.com/581x316/?mountain"],
    likes: 15,
  },
  {
    id: 4,
    title: "네 번째 게시글",
    images: ["https://source.unsplash.com/581x316/?forest"],
    likes: 8,
  },
];

// ✅ 관리자용 더미 데이터 추가
const dummyAdminPosts = [
  ...dummyUserPosts,
  {
    id: 5,
    title: "관리자 추가 게시글",
    images: ["https://source.unsplash.com/581x316/?office"],
    likes: 20,
  },
];

const Gallery = () => {
  const [isAdmin, setIsAdmin] = useState(true); // 관리자 여부 상태
  const [posts, setPosts] = useState(isAdmin ? dummyAdminPosts : dummyUserPosts);


  const handleUpload = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]); // 업로드된 게시글 추가
  };

  // 게시글 수정
  const handleEdit = (postId, newTitle) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, title: newTitle } : post
      )
    );
  };

  //  게시글 삭제
  const handleDelete = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <>
      <div className={styles.gallerytitle}>MAP 갤러리</div>
      <hr className={styles.baseline} />
      <hr className={styles.topline} />
      <div className={styles.years}>2025</div> 

      <div className={styles.galleryContainer}>
        {/*  관리자일 경우 업로드 폼 표시 */}
        {isAdmin && <UploadForm onUpload={handleUpload} />}

        <div className={styles.postsContainer}>
          {posts.length > 0 ? (
            posts.map((post) => (
              <GalleryItem
                key={post.id}
                post={post}
                isAdmin={isAdmin}
                onEdit={handleEdit}
                onDelete={handleDelete} // ✅ 삭제 기능 추가
              />
            ))
          ) : (
            <p className={styles.noPosts}>게시글이 없습니다.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Gallery;
