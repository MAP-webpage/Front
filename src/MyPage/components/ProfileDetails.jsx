import './ProfileDetails.css';
import { useState, useRef } from 'react';

// ✅ 이미지 import 추가
import iconId from '../image/project_id.png';
import iconStudentNum from '../image/project_studentnum.png';
import iconPassword from '../image/project_password.png';

const PasswordChangeModal = ({ onClose }) => {
  const onClickChangeBtn = () => {
    // 미구현
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>비밀번호 변경</h3>
        <input type="password" placeholder="기존 비밀번호" />
        <input type="password" placeholder="새 비밀번호" />
        <input type="password" placeholder="새 비밀번호 확인" />
        <button className="change-btn" onClick={onClickChangeBtn}>변경하기</button>
      </div>
    </div>
  );
};

const ProfileWrapper = ({
  icon, 
  label, 
  type, 
  placeholder,
  showButton,
  content,
  setIsModalOpen // 모달 상태 변경 함수 전달
}) => {
  return (
    <div className='ProfileWrapper'>
      <img src={icon} alt={`${label} icon`} className='ProfileIcon' />
      
      {/* 아이디 & 학번은 텍스트만 표시 */}
      {type === "text" && !showButton ? (
        <div className="ProfileText">{content}</div>
      ) : (
        <div className='PasswordText'>
          {content}
        </div>
      )}

      {/* 비밀번호 변경 버튼 (클릭 시 모달 열기) */}
      {showButton && <button className='ChangePasswordButton' onClick={() => setIsModalOpen(true)}>변경</button>}
    </div>
  );
};

const ProfileDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userId = "TempId1234";
  const studentNumber = "60240000";

  return (
    <div className='ProfileDetails'>
      <div className='Head'>
        <h3>프로필</h3>
      </div>

      {/* 아이디 & 학번: import한 이미지 사용 */}
      <ProfileWrapper icon={iconId} label="Id" type="text" content={userId} />
      <ProfileWrapper icon={iconStudentNum} label="Student Number" type="text" content={studentNumber} />

      {/* 비밀번호: import한 이미지 사용 */}
      <ProfileWrapper
        icon={iconPassword}
        label="Password"
        type="text"
        content="비밀번호 변경"
        showButton={true}
        setIsModalOpen={setIsModalOpen} // 모달 열기 함수 전달
      />

      {/* 모달이 열렸을 때만 렌더링 */}
      {isModalOpen && <PasswordChangeModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default ProfileDetails;