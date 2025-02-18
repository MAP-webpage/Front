import React, { useState, useEffect } from 'react';
import { Button } from './Button';

const LikeButton = ({ postId, initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // localStorage에서 해당 게시물의 likes 상태 가져오기
    const savedPosts = JSON.parse(localStorage.getItem('freeboardPosts')) || [];
    const post = savedPosts.find(p => p.id === postId);
    if (post) {
      setLikes(post.likes); // 저장된 likes 값 유지
    }

    // 사용자가 이 게시물에 공감한 기록이 있는지 확인
    const storedLike = localStorage.getItem(`liked-${postId}`);
    if (storedLike) {
      setLiked(true);
    }
  }, [postId]);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);

      // 기존 게시물 리스트에서 해당 게시물의 likes만 증가
      const savedPosts = JSON.parse(localStorage.getItem('freeboardPosts')) || [];
      const updatedPosts = savedPosts.map(post =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      );

      // 업데이트된 게시물 리스트 다시 저장
      localStorage.setItem('freeboardPosts', JSON.stringify(updatedPosts));

      // 개별 공감 상태 저장
      localStorage.setItem(`liked-${postId}`, 'true');
    }
  };

  return (
    <Button onClick={handleLike} className={`like-button ${liked ? 'liked' : ''}`}>
      좋아요 {likes} 
    </Button>
  );
};

export default LikeButton;
