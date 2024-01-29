import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { authService, firebaseInstance } from "fbase";
import AuthForm from "components/AuthForm";

const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };
  return (
    <div className="authContainer">
      <h1 style={{textAlign:"center", marginTop:300,  color:"black"}}>청강학원</h1>

      <AuthForm />
      {/*<div className="authBtns">
        <button onClick={onSocialClick} name="google" className="authBtn">
          구글로 로그인 하기 <FontAwesomeIcon icon={faGoogle} />
        </button>
      </div> */}
    </div>
   
  );
};
export default Auth;
