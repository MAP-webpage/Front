import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import apiClient from '../../api/apiClient'; // apiClient 클라이언트 추가

const LikeButton = ({ postId, initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes || 0);
  const [liked, setLiked] = useState(false);

  // 현재 로그인된 회원 ID (임시)
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
        const response = await apiClient.post(`/free-board/like/${postId}/${memberId}`);
        if (response.status === 200) {
          setLikes((prev) => Number(prev) + 1);
        }
      } else {
        const response = await apiClient.delete(`/free-board/like/${postId}/${memberId}`);
        if (response.status === 200) {
          setLikes((prev) => Math.max(0, Number(prev) - 1));
        }
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
