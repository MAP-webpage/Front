import MyPage from "./MyPage/MyPage";

function Mainpage({ userInfo, setUserInfo }) {  // ✅ props 받기
  return (
    <div>
      <MyPage userInfo={userInfo} setUserInfo={setUserInfo} />  {/* ✅ props 전달 */}
    </div>
  );
}

export default Mainpage;