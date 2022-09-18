import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);

  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  if (user.providerData[0].providerId === "password" && !user.emailVerified) {
    return (
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div>
          <h3 className="text-danger">Your Email is not verified</h3>
          <h5 className="text-primary">Please verify your email</h5>
          <button
            onClick={async () => {
              await sendEmailVerification();
              toast("Sent verification link to your email address");
            }}
            className="btn btn-primary w-100"
          >
            Sent Verification
          </button>
        </div>
      </div>
    );
  }

  return children;
};

export default RequireAuth;
