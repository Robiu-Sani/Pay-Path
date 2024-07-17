import { Navigate, useLocation } from "react-router-dom";

export default function Private({ children }) {
  const LogedUser = localStorage.getItem("UserLogedIn");
  const location = useLocation();

  if (LogedUser) {
    return children;
  }

  return (
    <Navigate state={location.pathname} to={`/login`} replace={true}></Navigate>
  );
}
