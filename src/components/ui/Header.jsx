import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Header = ({ children, className }) => {
    const navigate = useNavigate();

    return (
        <header className={`header ${className || ''}`}>
            <div className="logo">MAP</div>
            <nav className="nav-links">
                <span onClick={() => navigate('/notice')}>공지</span>
                <span onClick={() => navigate('/calender')}>캘린더</span>
                <span onClick={() => navigate('/gallerypage')}>갤러리</span>
            </nav>
            <div className="user-icon" onClick={() => navigate('/mypage')}>👤</div>
        </header>
    );
};