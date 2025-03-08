import axios from "axios";

// 📌 관리자 여부 확인 API
export const fetchAdminStatus = async () => {
  try {
    const response = await axios.get("/api/check-admin");
    return response.data.isAdmin;
  } catch (error) {
    console.error("관리자 여부 확인 실패:", error);
    return false;
  }
};

// 📌 게시글 목록 가져오기
export const fetchPosts = async () => {
  try {
    const response = await axios.get("/api/posts");
    return response.data;
  } catch (error) {
    console.error("게시글 불러오기 실패:", error);
    return [];
  }
};

// 📌 게시글 추가 API
export const uploadPost = async (newPost) => {
  try {
    const response = await axios.post("/api/posts", newPost);
    return response.data;
  } catch (error) {
    console.error("게시글 업로드 실패:", error);
    throw error;
  }
};

// 📌 게시글 삭제 API
export const deletePost = async (postId) => {
  try {
    await axios.delete(`/api/posts/${postId}`);
  } catch (error) {
    console.error("게시글 삭제 실패:", error);
    throw error;
  }
};

// 📌 게시글 수정 API
export const editPost = async (postId, newTitle) => {
  try {
    await axios.put(`/api/posts/${postId}`, { title: newTitle });
  } catch (error) {
    console.error("게시글 수정 실패:", error);
    throw error;
  }
};
