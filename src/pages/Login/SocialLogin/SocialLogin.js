import React from "react";
import "./SocialLogin.css";
import googleLogo from "../../../images/icon/google-logo.png";
import facebookLogo from "../../../images/icon/facebook.png";
import githubLogo from "../../../images/icon/github.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  let element = "";
  if (error || error1) {
    element = (
      <p className="text-danger">
        Error: {error.message} {error1.message}
      </p>
    );
    if (user || user1) {
      navigate(from, {replace: true});
    }
  }
  return (
    <div>
      {element}
      <div className="d-flex align-items-center justify-content-center mt-5">
        <div className="w-50 bg-primary" style={{ height: "1px" }}></div>
        <span className="m-2">or</span>
        <div className="w-50 bg-primary" style={{ height: "1px" }}></div>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-primary w-50"
        >
          <img
            src={googleLogo}
            className="img-fluid"
            style={{ height: "30px", width: "40px" }}
            alt=""
          />{" "}
          <span>Google Sign In</span>
        </button>
      </div>

      <div className="d-flex justify-content-center align-items-center my-3">
        <button className="btn btn-primary w-50">
          <img
            src={facebookLogo}
            className="img-fluid"
            style={{ height: "30px", width: "30px" }}
            alt=""
          />{" "}
          <span>Facebook Sign In</span>
        </button>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-primary w-50"
        >
          <img
            src={githubLogo}
            className="img-fluid"
            style={{ height: "30px", width: "30px" }}
            alt=""
          />{" "}
          <span>Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
