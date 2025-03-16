import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './notice.css';
import mainlogo from './logo.png';

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
                <img src={mainlogo} className="logo" alt="로고" />
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
                <div className="notice-list">
                <h2>공지사항</h2>
                    <div className="notice-item">
                        <span className="notice-category">공지사항</span>
                        <span className="notice-title">MAP 엠티 날짜 투표</span>
                        <span className="notice-date">2025-04-29</span>
                    </div>
                    <div className="notice-item">
                        <span className="notice-category">공지사항</span>
                        <span className="notice-title">1학년 C언어 스터디 날짜 공지</span>
                        <span className="notice-date">2025-03-28</span>
                    </div>
                    <div className="notice-item">
                        <span className="notice-category">공지사항</span>
                        <span className="notice-title">MAP 신환회 안내</span>
                        <span className="notice-date">2025-03-25</span>
                    </div>
                    <div className="notice-item">
                        <span className="notice-category">공지사항</span>
                        <span className="notice-title">재학생 자료구조 스터디 날짜 투표</span>
                        <span className="notice-date">2025-03-10</span>
                    </div>
                    <div className="notice-item">
                        <span className="notice-category">공지사항</span>
                        <span className="notice-title">MAP 개파 날짜 투표</span>
                        <span className="notice-date">2025-03-07</span>
                    </div>
                    {/* 추가 공지사항 항목들 */}
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
