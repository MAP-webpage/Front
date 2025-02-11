import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './components/ui/Card';
import { Button } from './components/ui/Button';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import LikeButton from './components/ui/LikeButton';
import './Freeboard.css';

const FreeBoard = () => {
  const navigate = useNavigate();

  // localStorage에서 저장된 게시물 불러오기
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('freeboardPosts');
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  // localStorage에서 게시물 불러오기 (처음 한 번 실행)
  useEffect(() => {
    const savedPosts = localStorage.getItem('freeboardPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  // posts가 변경될 때마다 localStorage에 저장 (새 글 작성, 삭제 등 반영)
  useEffect(() => {
    localStorage.setItem('freeboardPosts', JSON.stringify(posts));
  }, [posts]);

  const handleViewPost = (id) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === id ? { ...post, views: post.views + 1 } : post
      )
    );

    // localStorage에도 업데이트
    const updatedPosts = posts.map(post =>
      post.id === id ? { ...post, views: post.views + 1 } : post
    );
    localStorage.setItem('freeboardPosts', JSON.stringify(updatedPosts));

    navigate(`/post/${id}`);
  };

  return (
    <div className="freeboard-container">
      <h1 className="page-title">자유게시판</h1>
      <Button onClick={() => navigate('/create')} className="write-button">
        글 작성하기
      </Button>

      <div className="freeboard-grid">
        {posts.length === 0 ? (
          <motion.p 
            className="text-center text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            작성된 글이 없습니다.
          </motion.p>
        ) : (
          posts.map(post => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="freeboard-post-card">
                <CardContent>
                  <div className="clickable-post" onClick={() => handleViewPost(post.id)}>
                    <h2 className="freeboard-post-title">{post.title}</h2>
                  </div>
                  <p className="freeboard-post-meta">
                    <span>👁️ {post.views}</span>
                    <LikeButton postId={post.id} initialLikes={post.likes} />
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default FreeBoard;
