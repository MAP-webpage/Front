import './MyPage.css'
import LogoutButton from "./components/LogoutButton";  // ✅ 경로 확인
import ProfileDetails from "./components/ProfileDetails";  // ✅ 경로 확인
import ProfileHeader from "./components/ProfileHeader";  // ✅ 경로 확인
import projectMapLogo from "./image/project_maplogo.png";

// props 미구현, App.jsx 에서 받아와야함
function MyPage ({ userInfo, setUserInfo }) {


  return (
    <div className='MyPage'>
      <div className='LogoWrapper'>
      <img src={projectMapLogo} alt="MAP Logo" className="maplogo-png" />
      </div>

      <ProfileHeader 
        userInfo={userInfo}
      />
      <ProfileDetails 
        userInfo={userInfo} 
        setUserInfo={setUserInfo}
      />
      <LogoutButton />
    </div>
  )
}

export default MyPage;