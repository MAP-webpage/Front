import React, { useState } from 'react';
import axios from 'axios';
import './account.css'; 

const AccountPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!username || !password || !name || !studentId) {
            alert("모든 빈칸을 채워주세요.");
            return;
        }

        if (!isValidEmail(username)) {
            setErrorMessage("유효한 이메일 주소를 입력하세요.");
        return;
        }

        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
        return;
        }

        try {
            const response = await axios.post("/join", {
                userEmail: username,
                password: password,
                username: name,
                studentNumber: studentId
            });

            if (response.data.success) {
                alert("회원가입이 완료되었습니다.");
                window.location.href = "login.html";
            } else {
                alert("회원가입에 실패하였습니다.: " + response.data.message);
            } 
        } catch (error) {
            console.error("회원가입 오류:", error);
            alert("회원가입 오류. 다시 시도해주세요.");
        }
    };

    return (
        <div className="createAccount-container">
            <div className="createAccount-box">
                <img src="logo.png" className="logo" alt="logo" />
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input type="email" id="username" placeholder="이메일 (아이디)" className="input-field" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" id="password" placeholder="비밀번호" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input type="password" id="confirmPassword" placeholder="비밀번호 확인" className="input-field" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <input type="text" id="name" placeholder="이름" className="input-field" value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="text" id="studentId" placeholder="학번" className="input-field" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
                    </div>
                    <button type="submit" className="request-button">가입요청</button>
                </form>
                {errorMessage && <p className="error-text">{errorMessage}</p>}
            </div>
            <footer>
                <p>2024, 명지대학교 컴퓨터공학과 스터디 MAP</p>
                <p>Study-MAP of the Department of Computer Engineering, Myongji University</p>
            </footer>
        </div>
    );
};

export default AccountPage;
