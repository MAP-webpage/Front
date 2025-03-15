import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './notice.css';

const NoticePage = () => {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const response = await axios.get('/api/notices'); 
                setNotices(response.data);
            } catch (error) {
                console.error("공지사항을 가져오는 데 오류가 발생했습니다:", error);
            }
        };

        fetchNotices();
    }, []);

    return (
        <div>
            <header>
                <img src="logo.png" className="logo" alt="로고" />
                <nav>
                    <ul>
                        <li className="active">공지</li>
                        <li>자유게시판</li>
                        <li>캘린더</li>
                        <li>갤러리</li>
                    </ul>
                </nav>
                <div className="user-icon">👤</div>
            </header>

            <main>
                <h2>공지사항</h2>
                <div className="notice-list">
                    {notices.map((notice, index) => (
                        <div className="notice-item" key={index}>
                            <span className="notice-category">{notice.category}</span>
                            <span className="notice-title">{notice.title}</span>
                            <span className="notice-date">{notice.date}</span>
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    <span>&lt;</span>
                    <span className="page-number">1</span>
                    <span>&gt;</span>
                </div>
            </main>

            <footer>
                <p>2025, 명지대학교 컴퓨터공학과 스터디 MAP</p>
                <p>Study-MAP of the Department of Computer Engineering, Myongji University</p>
            </footer>
        </div>
    );
};

export default NoticePage;
