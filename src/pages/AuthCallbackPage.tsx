import { useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

import { useCreateMyUser } from "../api/MyUserApi";

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();

  const { createUser } = useCreateMyUser();
  const isCreatedUser = useRef(false);

  useEffect(() => {
    if (user?.sub && user?.email && !isCreatedUser.current) {
      try {
        createUser({ auth0Id: user.sub, email: user.email });
        console.log("User created successfully");
        isCreatedUser.current = true;
      } catch (error) {
        console.error("Error creating user:", error);
      }
    }
    navigate("/");
  }, [createUser, navigate, user]);

  return <>Loading...</>;
};

export default AuthCallbackPage;
