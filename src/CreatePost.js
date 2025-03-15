import React, { useState } from 'react';
import { Card, CardContent } from './components/ui/Card';
import { Button } from './components/ui/Button';
import { Input } from './components/ui/Input';
import { Textarea } from './components/ui/Textarea';
import { useNavigate } from 'react-router-dom';
import './FreeBoard/Freeboard.css';

const CreatePost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePost = () => {
    if (title.trim() && content.trim()) {
      const savedPosts = JSON.parse(localStorage.getItem('freeboardPosts')) || [];
  
      const newPost = {
        id: Date.now(),
        title,
        content,
        authorId: 'user123', // 현재 로그인한 사용자의 ID 저장
        views: 0,
        likes: 0,
        comments: [], // 초기 댓글 배열
      };
  
      const updatedPosts = [newPost, ...savedPosts];
      localStorage.setItem('freeboardPosts', JSON.stringify(updatedPosts));
  
      navigate('/');
    }
  };  

  return (
    <div className="freeboard-container">
      <h1 className="page-title">글 작성하기</h1>

      <Card className="freeboard-card">
        <CardContent>
          <Input
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="freeboard-input"
          />
          <Textarea
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="freeboard-input"
          />
          <Button onClick={handlePost} className="freeboard-button">
            글 작성하기
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreatePost;
