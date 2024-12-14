import { redirect } from "next/navigation";
import ActionButton from "../common/ActionButton";

const Login = ({ pathname }: { pathname: string }) => {
  return (
    <div className={`login-buttons`}>
      <button
        className={`login ${pathname !== "/" ? "destination-route" : ""}`}
        onClick={() => redirect("/login")}
      >
        log in
      </button>
      <ActionButton text={"book now"} redirectRoute="/book-now" />
    </div>
  );
};

export default Login;
