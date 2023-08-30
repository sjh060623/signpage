import React from "react";
import { authService } from "fbase";
import { useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();

  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <>
      <div className="ddd">
      <button className="logout" onClick={onLogOutClick}>로그아웃</button>
      <iframe src="http://localhost:3000/#/" allowFullScreen />
      </div>
    </>
  );
};
export default Home;
//https://chunggang.vercel.app/
