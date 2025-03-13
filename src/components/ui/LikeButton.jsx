import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import apiClient from '../api/apiClient'; // apiClient 클라이언트 추가
// import axios from 'axios';

const LikeButton = ({ postId, initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  // 현재 로그인된 회원 ID (임시: localStorage에서 가져오기)
  const memberId = localStorage.getItem('memberId') || 'testUser';

  useEffect(() => {
    // 서버에서 현재 사용자의 좋아요 여부 확인
    const fetchLikeStatus = async () => {
      try {
        const response = await apiClient.get(`/free-board/like/${postId}/${memberId}`);
        setLiked(response.data); // true or false
      } catch (error) {
        console.error('좋아요 상태 확인 실패:', error);
      }
    };

    fetchLikeStatus();
  }, [postId, memberId]);

  // 좋아요 추가 요청
  const handleLike = async () => {
    try {
      if (!liked) {
        await apiClient.post(`/free-board/like/${postId}/${memberId}`);
        setLikes((prev) => prev + 1);
      } else {
        await apiClient.delete(`/free-board/like/${postId}/${memberId}`);
        setLikes((prev) => prev - 1);
      }
      setLiked((prev) => !prev);
    } catch (error) {
      console.error('좋아요 변경 실패:', error);
    }
  };

  return (
    <Button onClick={handleLike} className={`like-button ${liked ? 'liked' : ''}`}>
      {liked ? '❤️ 좋아요' : '🤍 좋아요'} {likes}
    </Button>
  );
};

export default LikeButton;
