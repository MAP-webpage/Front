import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [autoLogin, setAutoLogin] = useState(false);

    const handleLogin = async () => {
        if (username.trim() === '' || password.trim() === '') {
            alert('아이디와 비밀번호를 입력해주세요.');
            return;
        }

        try {
            const response = await axios.post('https://주소', {
                username, password, autoLogin});

            if (response.status === 200) {
                alert('로그인되었습니다.');
            } else {
                alert('로그인에 실패했습니다.');
            }
        } catch (error) {
            alert('로그인 중 오류가 발생했습니다.');
        }
    };

    return (
        <div className="login-container">
            <img src="logo.png" alt="Logo" className="logo" />
            <div className="login-box">
                <input
                    type="text"
                    placeholder="아이디"
                    className="input-field"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    className="input-field"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="auto-login">
                    <div
                        className={`custom-checkbox ${autoLogin ? 'checked' : ''}`}
                        onClick={() => setAutoLogin(!autoLogin)}
                    ></div>
                    <label htmlFor="autoLoginCheckbox">자동 로그인</label>
                </div>
                <button className="login-button" onClick={handleLogin}>
                    로그인
                </button>
                <div className="links">
                    <a href="#">아이디 찾기</a>
                    <a href="#">비밀번호 찾기</a>
                    <a href="#">회원가입</a>
                </div>
            </div>
            <footer>
                <p>2024, 명지대학교 컴퓨터공학과 스터디 MAP</p>
                <p>Study-MAP of the Department of Computer Engineering, Myongji University</p>
            </footer>
        </div>
    );
};

export default Login;