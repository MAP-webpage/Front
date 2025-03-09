import './MyPage.css'
import LogoutButton from "./components/LogoutButton"; 
import ProfileDetails from "./components/ProfileDetails"; 
import ProfileHeader from "./components/ProfileHeader"; 
import projectMapLogo from "./image/project_maplogo.png";

// props 미구현, App.jsx 에서 받아와야함
function MyPage ({ userInfo, setUserInfo }) {

  /*
    사용자 정보 임시 객체 - 
    const [userInfo, setUserInfo] = useState({
      id: "TempId1234",
      name: "임시이름",
      studentId: "60240000",
      password: "TempPassword1234",
      entryYear: "24",
    });
  */
 
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