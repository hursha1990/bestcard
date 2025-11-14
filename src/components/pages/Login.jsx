const Login = () => {
  return (
    <main>
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" /><br/>

        <label>Password:</label>
        <input type="password" placeholder="Enter your password" /><br/><br/>

        <button>Login</button>

        <p>Don't have an account? <a href="/signup">SignUp here</a>.</p>

      </form>
    </main>
  );
};

export default Login;
