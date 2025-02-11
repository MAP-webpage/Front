import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from './components/ui/Card';
import { Button } from './components/ui/Button';
import { Input } from './components/ui/Input';
import LikeButton from './components/ui/LikeButton';
import './PostDetail.css';

const PostDetail = () => {
  const { postId } = useParams(); // URL에서 postId 가져오기
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [currentUser, setCurrentUser] = useState('user123'); // 현재 로그인한 사용자 (예제용)

  // 게시물 & 댓글 불러오기
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('freeboardPosts')) || [];
    const foundPost = savedPosts.find(post => post.id === parseInt(postId));
    
    if (foundPost) {
      setPost(foundPost);
      setComments(foundPost.comments || []);
    }
  }, [postId]);

  // 댓글 작성
  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const updatedComments = [...comments, { id: Date.now(), text: newComment, authorId: currentUser }];
    setComments(updatedComments);
    setNewComment('');

    const savedPosts = JSON.parse(localStorage.getItem('freeboardPosts')) || [];
    const updatedPosts = savedPosts.map(p => 
      p.id === post.id ? { ...p, comments: updatedComments } : p
    );

    localStorage.setItem('freeboardPosts', JSON.stringify(updatedPosts));
  };

  // 댓글 삭제 (댓글 작성자만 가능)
  const handleDeleteComment = (commentId, authorId) => {
    if (authorId !== currentUser) return; // 본인의 댓글만 삭제 가능

    const updatedComments = comments.filter(comment => comment.id !== commentId);
    setComments(updatedComments);

    const savedPosts = JSON.parse(localStorage.getItem('freeboardPosts')) || [];
    const updatedPosts = savedPosts.map(p => 
      p.id === post.id ? { ...p, comments: updatedComments } : p
    );

    localStorage.setItem('freeboardPosts', JSON.stringify(updatedPosts));
  };

  // 게시물 삭제 (게시물 작성자만 가능)
  const handleDeletePost = () => {
    if (post.authorId !== currentUser) return; // 본인의 게시물만 삭제 가능

    const savedPosts = JSON.parse(localStorage.getItem('freeboardPosts')) || [];
    const updatedPosts = savedPosts.filter(p => p.id !== post.id); // 게시물 삭제

    localStorage.setItem('freeboardPosts', JSON.stringify(updatedPosts));
    navigate('/'); // 삭제 후 게시판으로 이동
  };

  if (!post) return <p>게시물을 찾을 수 없습니다.</p>;

  return (
    
    <div className="post-container">
      <Button onClick={() => navigate('/')} className="back-button">← 뒤로가기</Button>

      <Card className="post-card">
        <CardContent>
          <h1 className="post-title">{post.title}</h1>
          <p className="post-date">{post.date}</p>
          <LikeButton postId={post.id} initialLikes={post.likes} />
          <p className="post-content">{post.content}</p>
          {post.authorId === currentUser && ( // 게시물 작성자만 삭제 버튼 표시
            <Button onClick={handleDeletePost} className="delete-post-button">게시물 삭제</Button>
          )}
        </CardContent>
      </Card>

      {/* 댓글 섹션 */}
      <Card className="comments-card">
        <CardContent>
          <h2 className="comments-title">댓글</h2>
          {comments.length === 0 ? (
            <p className="no-comments">아직 댓글이 없습니다.</p>
          ) : (
            comments.map(comment => (
              <div key={comment.id} className="comment">
                <p className="comment-text">{comment.text}</p>
                {comment.authorId === currentUser && ( // 댓글 작성자만 삭제 가능
                  <Button onClick={() => handleDeleteComment(comment.id, comment.authorId)} className="delete-comment-button">
                    삭제
                  </Button>
                )}
              </div>
            ))
          )}
        </CardContent>
      </Card>

      {/* 댓글 작성 */}
      <Card className="write-comment-card">
        <CardContent>
          <Input 
            placeholder="댓글을 입력하세요" 
            value={newComment} 
            onChange={(e) => setNewComment(e.target.value)} 
            className="comment-input"
          />
          <Button onClick={handleAddComment} className="comment-button">
            작성
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostDetail;
