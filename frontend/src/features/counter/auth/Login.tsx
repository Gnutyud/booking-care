import appApi from "../../../services/appApi";

const Login = () => {
  const loginHandler = async () => {
    try {
      const res = await appApi.login({
        email: "test@test.com",
        password: "12345678",
      });
      console.log("login res", res.user);
    } catch (e : any) {
      console.log(e.errors.message);
    }
  };
  return (
    <>
      <h1>Login Page</h1>
      <button onClick={loginHandler}>Login</button>
    </>
  );
};

export default Login;
