import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './components/ui/Card';
import { Button } from './components/ui/Button';
import { Input } from './components/ui/Input';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import LikeButton from './components/ui/LikeButton';
import './Freeboard.css';

const categories = ['전체', '공지', '질문', '잡담'];

const FreeBoard = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('freeboardPosts');
    return savedPosts ? JSON.parse(savedPosts) : [];
  });
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const savedPosts = localStorage.getItem('freeboardPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('freeboardPosts', JSON.stringify(posts));
  }, [posts]);

  const handleViewPost = (id) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === id ? { ...post, views: post.views + 1 } : post
      )
    );

    const updatedPosts = posts.map(post =>
      post.id === id ? { ...post, views: post.views + 1 } : post
    );
    localStorage.setItem('freeboardPosts', JSON.stringify(updatedPosts));

    navigate(`/post/${id}`);
  };

  const filteredPosts = posts.filter(post =>
    (selectedCategory === '전체' || post.category === selectedCategory) &&
    (post.title.includes(searchQuery) || post.content.includes(searchQuery))
  );

  return (
    <div className="freeboard-container">
      {/* 헤더 */}
      <header className="freeboard-header">
        <div className="logo">MAP</div>
        <nav className="nav-links">
          <span onClick={() => navigate('/notice')}>공지</span>
          <span onClick={() => navigate('/calender')}>캘린더</span>
          <span onClick={() => navigate('/gallerypage')}>갤러리</span>
        </nav>
        <div className="user-icon" onClick={() => navigate('/mypage')}>👤</div>
      </header>

      {/* 자유게시판 제목 */}
      <h1 className="page-title">자유게시판</h1>

      {/* 카테고리 선택 */}
      <div className="category-filter">
        {categories.map(category => (
          <span
            key={category}
            className={`category-item ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </span>
        ))}
      </div>

      {/* 검색창 */}
      <div className="search-container">
        {/* SVG 돋보기 아이콘 */}
        <div className="search-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="7" stroke="#000" strokeWidth="2" />
            <line x1="15" y1="15" x2="21" y2="21" stroke="#000" strokeWidth="2" />
          </svg>
        </div>

        <Input
          type="text"
          placeholder="검색"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {/* 글 작성 버튼 */}
      <Button onClick={() => navigate('/create')} className="write-button">
        글 작성하기
      </Button>

      {/* 게시글 목록 */}
      <div className="freeboard-grid">
        {filteredPosts.length === 0 ? (
          <motion.p
            className="text-center text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            작성된 글이 없습니다.
          </motion.p>
        ) : (
          filteredPosts.map(post => (
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
                    <span className="views-container">
                      <div className="views-icon">
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_323_222)">
                            <path d="M0.541748 6C0.541748 6 2.70841 2 6.50008 2C10.2917 2 12.4584 6 12.4584 6C12.4584 6 10.2917 10 6.50008 10C2.70841 10 0.541748 6 0.541748 6Z"
                              stroke="#9B9B9B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.5 7.5C7.39746 7.5 8.125 6.82843 8.125 6C8.125 5.17157 7.39746 4.5 6.5 4.5C5.60254 4.5 4.875 5.17157 4.875 6C4.875 6.82843 5.60254 7.5 6.5 7.5Z"
                              fill="#9B9B9B" stroke="#9B9B9B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_323_222">
                              <rect width="13" height="12" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      {post.views}
                    </span>

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
